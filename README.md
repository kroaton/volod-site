# volod.xyz — Local Development

Static site; no build step required. Serve the folder with Python for quick local previews.

## Prerequisites

- Python 3 installed (Windows: https://python.org/downloads)
- Terminal/PowerShell access to the repository root (folder containing `index.html`)

## Quick Start

Windows (PowerShell):

```
# Local-only (localhost)
py -m http.server 8000 --bind 127.0.0.1

# Stop: Ctrl+C in the same window
```

macOS/Linux (Terminal):

```
# Local-only (localhost)
python3 -m http.server 8000 --bind 127.0.0.1

# Stop: Ctrl+C in the same window
```

Open http://127.0.0.1:8000/ in your browser.

## Helper Script (Windows)

Use the PowerShell helper `serve.ps1` in the repo root:

```
# Start on localhost (default port 8000)
./serve.ps1 start

# Start on LAN (binds 0.0.0.0); add -OpenFirewall to create an inbound rule
./serve.ps1 lan -OpenFirewall

# Stop the server on the given port
./serve.ps1 stop -Port 8000

# Check status and show URLs
./serve.ps1 status -Port 8000
```

## Access From Phone (Same Wi‑Fi)

1. Start the server bound to all interfaces:

   - Windows:
   ```
   py -m http.server 8000 --bind 0.0.0.0
   ```
   - macOS/Linux:
   ```
   python3 -m http.server 8000 --bind 0.0.0.0
   ```

2. Find your computer’s LAN IP and open on your phone: `http://<LAN-IP>:8000/`

   - Windows (PowerShell):
   ```
   (Get-NetIPAddress -AddressFamily IPv4 | ? { $_.IPAddress -like '192.168.*' -or $_.IPAddress -like '10.*' } | select -First 1).IPAddress
   ```
   - macOS:
   ```
   ipconfig getifaddr en0  # try en0 or en1
   ```
   - Linux:
   ```
   hostname -I | awk '{print $1}'
   ```

3. Windows Firewall (if phone can’t reach):

   Open a one-time inbound rule for port 8000 (Admin PowerShell):
   ```
   New-NetFirewallRule -DisplayName "Python HTTP 8000" -Direction Inbound -Action Allow -Profile Any -Protocol TCP -LocalPort 8000
   ```

Security note: binding to `0.0.0.0` exposes the server to your local network. Use only on trusted networks and stop the server when done.

## Stopping/Restarting

- If you started the server in the same terminal: press Ctrl+C.
- If it’s running elsewhere on Windows and you need to stop it:
  ```
  Get-NetTCPConnection -LocalPort 8000 -State Listen | Select -First 1 | % { Stop-Process -Id $_.OwningProcess -Force }
  ```

## Change Port

Use any open port, e.g. 8080:

```
py -m http.server 8080 --bind 127.0.0.1
# or
python3 -m http.server 8080 --bind 127.0.0.1
```

## Troubleshooting

- Port already in use:
  - Windows: `Get-NetTCPConnection -LocalPort 8000`
  - macOS/Linux: `lsof -i :8000`
- Phone can’t connect:
  - Ensure phone and PC are on the same Wi‑Fi (no guest/VPN separation).
  - Use the correct LAN IP (not 127.0.0.1).
  - Allow inbound TCP 8000 on firewall (Windows rule above).
  - Try another port (some networks block 8000).
