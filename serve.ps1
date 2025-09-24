# PowerShell helper to serve the site locally or on LAN
# Usage:
#   .\serve.ps1 start [-Port 8000]
#   .\serve.ps1 lan   [-Port 8000] [-OpenFirewall]
#   .\serve.ps1 stop  [-Port 8000]
#   .\serve.ps1 status [-Port 8000]

[CmdletBinding()]
param(
  [ValidateSet('start','lan','stop','status')]
  [string]$Command = 'start',
  [int]$Port = 8000,
  [switch]$OpenFirewall
)

function Get-PythonExe {
  if (Get-Command py -ErrorAction SilentlyContinue) { return 'py' }
  if (Get-Command python -ErrorAction SilentlyContinue) { return 'python' }
  throw 'Python not found. Install from https://python.org/downloads'
}

function Get-ServerProcess([int]$Port) {
  try {
    $conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop | Select-Object -First 1
  } catch { return $null }
  if (-not $conn) { return $null }
  $pid = $conn.OwningProcess
  try {
    $proc = Get-Process -Id $pid -ErrorAction Stop
    $ci = Get-CimInstance Win32_Process -Filter "ProcessId=$pid" -ErrorAction SilentlyContinue
    $cmd = if ($ci) { $ci.CommandLine } else { '' }
    # Consider it ours if it looks like a Python http.server
    if ($proc.ProcessName -match 'python|py' -and $cmd -match '\-m\s+http\.server') {
      return [PSCustomObject]@{ PID=$pid; Process=$proc; CommandLine=$cmd }
    }
    return $null
  } catch { return $null }
}

function Ensure-Firewall([int]$Port) {
  try {
    $name = "Python HTTP $Port"
    if (-not (Get-NetFirewallRule -DisplayName $name -ErrorAction SilentlyContinue)) {
      New-NetFirewallRule -DisplayName $name -Direction Inbound -Action Allow -Profile Any -Protocol TCP -LocalPort $Port -ErrorAction SilentlyContinue | Out-Null
    }
  } catch {}
}

function Get-LanIp {
  try {
    $ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' -and $_.InterfaceOperationalStatus -eq 'Up' }
    $lan = ($ips | Where-Object { $_.IPAddress -like '192.168.*' } | Select-Object -First 1).IPAddress
    if (-not $lan) { $lan = ($ips | Where-Object { $_.IPAddress -like '10.*' } | Select-Object -First 1).IPAddress }
    if (-not $lan) { $lan = ($ips | Where-Object { $_.IPAddress -match '^172\.(1[6-9]|2[0-9]|3[0-1])\.' } | Select-Object -First 1).IPAddress }
    if (-not $lan) { $lan = ($ips | Select-Object -First 1).IPAddress }
    return $lan
  } catch { return $null }
}

switch ($Command) {
  'stop' {
    $sp = Get-ServerProcess -Port $Port
    if ($sp) {
      try { Stop-Process -Id $sp.PID -Force -ErrorAction Stop; Write-Host "Stopped server PID $($sp.PID) on port $Port" -ForegroundColor Green }
      catch { Write-Host "Failed to stop PID $($sp.PID): $_" -ForegroundColor Red; exit 1 }
    } else {
      Write-Host "No python http.server found listening on port $Port" -ForegroundColor Yellow
    }
    break
  }
  'status' {
    $sp = Get-ServerProcess -Port $Port
    if ($sp) {
      $lan = Get-LanIp
      Write-Host "Running: PID $($sp.PID)" -ForegroundColor Green
      Write-Host ("Local:  http://127.0.0.1:{0}/" -f $Port)
      if ($lan) { Write-Host ("LAN:    http://{0}:{1}/" -f $lan, $Port) }
    } else {
      Write-Host "Not running on port $Port" -ForegroundColor Yellow
    }
    break
  }
  'start' { $bind = '127.0.0.1' }
  'lan'   { $bind = '0.0.0.0' }
}

if ($Command -in @('start','lan')) {
  $existing = Get-ServerProcess -Port $Port
  if ($existing) {
    Write-Host "Already running (PID $($existing.PID)) on port $Port" -ForegroundColor Yellow
    $lan = Get-LanIp
    Write-Host ("Local:  http://127.0.0.1:{0}/" -f $Port)
    if ($lan) { Write-Host ("LAN:    http://{0}:{1}/" -f $lan, $Port) }
    exit 0
  }

  if ($Command -eq 'lan' -and $OpenFirewall) { Ensure-Firewall -Port $Port }

  $py = Get-PythonExe
  $args = "-m http.server $Port --bind $bind"
  $proc = Start-Process -FilePath $py -ArgumentList $args -WorkingDirectory (Get-Location) -PassThru
  Start-Sleep -Milliseconds 400

  # Probe readiness
  $ok = $false
  for ($i=0; $i -lt 30; $i++) {
    Start-Sleep -Milliseconds 200
    try { $r = Invoke-WebRequest -UseBasicParsing -Uri ("http://127.0.0.1:{0}/" -f $Port); if ($r.StatusCode -ge 200) { $ok = $true; break } } catch {}
  }

  if ($ok) { Write-Host "Started PID $($proc.Id) on port $Port (bind $bind)" -ForegroundColor Green }
  else { Write-Host "Server starting (PID $($proc.Id)). If not reachable, wait a moment." -ForegroundColor Yellow }

  Write-Host ("Local:  http://127.0.0.1:{0}/" -f $Port)
  if ($bind -eq '0.0.0.0') { $lan = Get-LanIp; if ($lan) { Write-Host ("LAN:    http://{0}:{1}/" -f $lan, $Port) } }
}

