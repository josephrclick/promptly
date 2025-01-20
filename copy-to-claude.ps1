# Create CLAUDE directory if it doesn't exist
New-Item -ItemType Directory -Force -Path ".\CLAUDE"

# Base array of files to copy
$filesToCopy = @(
    "./index.html",
    "./public/manifest.json",
    "jsconfig.json",
    "package.json",
    "postcss.config.cjs",
    "site.webmanifest",
    "tailwind.config.js",
    "vercel.json",
    "vite.config.js",
    "vue.config.js"
)

# Get all files under ./src/ recursively
$srcFiles = Get-ChildItem -Path ".\src" -Recurse -File | ForEach-Object { $_.FullName }

# Combine the arrays
$allFiles = $filesToCopy + $srcFiles

# Process each file
foreach ($file in $allFiles) {
    if (Test-Path $file) {
        # Get just the filename without the path
        $fileName = Split-Path $file -Leaf
        $destination = Join-Path ".\CLAUDE" $fileName
        
        # Copy file
        Copy-Item $file -Destination $destination -Force
        Write-Host "Copied: $file -> $fileName"
    } else {
        Write-Host "Warning: Could not find $file"
    }
}

Write-Host "`nCopy operation completed. All files are in the CLAUDE directory."