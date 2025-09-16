# Fresh Repository Setup Instructions

Since we're encountering issues with large files in the Git history, let's create a fresh repository with only the necessary source files:

## Step 1: Create a new directory for the clean repository
```powershell
mkdir C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean
```

## Step 2: Copy only the necessary source files (no node_modules or .next)
```powershell
# Copy only the source files, package.json, and configuration files
xcopy "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga\transluga-app\src" "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\transluga-app\src" /E /I
xcopy "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga\transluga-app\public" "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\transluga-app\public" /E /I
copy "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga\transluga-app\*.json" "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\transluga-app\"
copy "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga\transluga-app\*.js" "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\transluga-app\"
copy "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga\transluga-app\*.config.js" "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\transluga-app\"
```

## Step 3: Create a proper .gitignore file
```powershell
# Create .gitignore in the new directory
@"
# dependencies
node_modules/
**/node_modules/
/.pnp
.pnp.js

# next.js
.next/
**/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
"@ | Out-File -FilePath "C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean\.gitignore" -Encoding utf8
```

## Step 4: Initialize Git in the new repository
```powershell
cd C:\Users\DON GOBBI NSHOMBO\Documents\Projects\Github\transLuga-clean
git init
git add .
git commit -m "Initial commit of TransLuga website"
```

## Step 5: Add the remote repository and push
```powershell
git remote add origin https://github.com/DonGobbi/transLuga.git
git push -f origin master
```

**Note:** The `-f` flag forces the push and will overwrite the remote repository. Only use this if you're sure you want to replace everything in the remote repository.
