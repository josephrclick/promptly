# Create CLAUDE directory if it doesn't exist
New-Item -ItemType Directory -Force -Path ".\CLAUDE"

# Array of files to copy
$filesToCopy = @(
    "./public/index.html",
    "./public/manifest.json",
    "./src/App.vue",
    "./src/main.js",
    "./src/service-worker.js",
    "./src/views/Home.vue",
    "./src/views/Learn.vue",
    "./src/views/learn/Beginner.vue",
    "./src/assets/main.css",
    "./src/components/CategoryCard.vue",
    "./src/components/ContentCard.vue",
    "./src/components/FeatureCard.vue",
    "./src/components/MainNav.vue",
    "./src/views/learn/courses/BeginnerCourseOne.vue",
    "./src/views/use/ChatNow.vue"
)

# Copy each file directly to CLAUDE folder
foreach ($file in $filesToCopy) {
    $fileName = Split-Path $file -Leaf
    
    $destination = Join-Path ".\CLAUDE" $fileName
    
    # Copy file if it exists
    if (Test-Path $file) {
        Copy-Item $file -Destination $destination -Force
        Write-Host "Copied: $file -> $fileName"
    } else {
        Write-Host "Warning: Could not find $file"
    }
}

Write-Host "`nCopy operation completed. All files are in the CLAUDE directory."