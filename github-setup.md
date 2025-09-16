# GitHub Setup Instructions

After creating your GitHub repository at github.com/DonGobbi/transLuga, run these commands in your terminal:

```powershell
# Add all files to git
git add .

# Commit the changes
git commit -m "Initial commit of TransLuga website"

# Add the GitHub repository as a remote
git remote add origin https://github.com/DonGobbi/transLuga.git

# Push your code to GitHub
git push -u origin main
```

If the last command fails with an error about the branch name, try:

```powershell
# Check your current branch name
git branch

# If your branch is named "master" instead of "main", use:
git push -u origin master
```

After pushing, refresh your GitHub page to see your code in the repository.
