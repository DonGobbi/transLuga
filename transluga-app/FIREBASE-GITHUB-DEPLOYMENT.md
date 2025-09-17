# Firebase and GitHub Deployment Guide for TransLuga

This guide explains how to securely deploy your TransLuga application with Firebase integration using GitHub.

## The Challenge

When deploying a Firebase application on GitHub, you face two main challenges:

1. **Security**: Firebase credentials should never be committed to your GitHub repository
2. **Environment Variables**: GitHub Pages doesn't natively support environment variables

## Solution: Using GitHub Actions with Secrets

### 1. Set Up GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add each Firebase credential as a separate secret:

   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

5. For Firebase service account (for admin access):
   - Create a service account in Firebase Console > Project Settings > Service Accounts
   - Generate a new private key (JSON file)
   - Add the entire JSON content as `FIREBASE_SERVICE_ACCOUNT`

### 2. GitHub Actions Workflow

We've created a GitHub Actions workflow file at `.github/workflows/firebase-deployment.yml` that:

1. Checks out your code
2. Sets up Node.js
3. Installs dependencies
4. Creates a `.env.local` file with your Firebase credentials from GitHub secrets
5. Builds your application
6. Deploys to Firebase Hosting

### 3. Firebase CLI Configuration

1. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Initialize Firebase in your project:
   ```
   firebase init
   ```
   - Select Hosting and other services you need
   - Choose your Firebase project
   - Set public directory to `out` (for Next.js static export)
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys with GitHub: No (we're using our custom workflow)

4. Create a `.firebaserc` file:
   ```json
   {
     "projects": {
       "default": "YOUR_PROJECT_ID"
     }
   }
   ```

5. Create a `firebase.json` file:
   ```json
   {
     "hosting": {
       "public": "out",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     },
     "firestore": {
       "rules": "firestore.rules",
       "indexes": "firestore.indexes.json"
     }
   }
   ```

### 4. Next.js Configuration

1. Update your `next.config.js` to support static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### 5. Secure Firebase Configuration

We've already implemented a secure Firebase configuration that:

1. Uses environment variables instead of hardcoded credentials
2. Handles both client-side and server-side environments
3. Gracefully handles missing credentials
4. Provides proper TypeScript types

## Testing Your Setup

1. Push your changes to GitHub
2. Go to the "Actions" tab in your repository
3. Monitor the workflow execution
4. Once completed, your app should be deployed to Firebase Hosting

## Local Development

For local development:

1. Create a `.env.local` file with your Firebase credentials
2. Never commit this file to Git (it's already in `.gitignore`)
3. Run your development server:
   ```
   npm run dev
   ```

4. Test your Firebase connection at `/admin/firebase-test`

## Troubleshooting

If your deployment fails:

1. Check GitHub Actions logs for errors
2. Verify that all secrets are correctly set
3. Ensure your Firebase project is properly configured
4. Check that your Firebase configuration is being loaded correctly

## Security Best Practices

1. **Never** hardcode Firebase credentials in your code
2. **Always** use environment variables or GitHub secrets
3. Set up proper Firebase security rules
4. Restrict API key usage in the Firebase Console
5. Regularly rotate your Firebase service account keys

By following this guide, you can securely deploy your TransLuga application with Firebase integration using GitHub.
