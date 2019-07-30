### Updating Packages

If using PowerShell, use the following line:

```ps1
$location = "$(Get-Location)/src/js"
(new-object System.Net.WebClient).DownloadFile("https://unpkg.com/dexie@latest/dist/dexie.min.js","$($location)/dexie.min.js")
(new-object System.Net.WebClient).DownloadFile("https://unpkg.com/dexie@latest/dist/dexie.min.js.map","$($location)/dexie.min.js.map")
```