# Firebase Setup for TransLuga

This document provides instructions on how to set up and use Firebase for storing newsletter subscriptions and contact form submissions in the TransLuga application.

## Prerequisites

- A Firebase account (create one at [firebase.google.com](https://firebase.google.com) if you don't have one)
- Node.js and npm installed
- TransLuga application codebase

## Setup Steps

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "TransLuga")
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click "Create project"

### 2. Set Up Firestore Database

1. In your Firebase project console, navigate to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" and click "Next"
4. Select a location closest to your target audience and click "Enable"

### 3. Register Your Web Application

1. In your Firebase project console, click on the gear icon next to "Project Overview" and select "Project settings"
2. Scroll down to "Your apps" section and click the web icon (</>) 
3. Register your app with a nickname (e.g., "TransLuga Web")
4. Click "Register app"
5. You'll see your Firebase configuration. It looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### 4. Configure Environment Variables

1. Create a `.env.local` file in the root of your TransLuga application (if it doesn't exist already)
2. Add your Firebase configuration as environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Deploy Firestore Security Rules

1. Install Firebase CLI if you haven't already:
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
   - Select "Firestore" when prompted
   - Choose your Firebase project
   - Accept the default file for Firestore rules (`firestore.rules`)

4. Deploy the security rules:
   ```
   firebase deploy --only firestore:rules
   ```

## Testing Your Firebase Integration

1. Make sure you've set up your environment variables correctly in `.env.local`
2. Start your development server:
   ```
   npm run dev
   ```
3. Navigate to `/admin/firebase-test` to check if your Firebase connection is working
4. Test the newsletter signup and contact form to ensure data is being stored in Firestore

## Firebase Structure

The application uses the following Firestore collections:

### Newsletter Subscribers

Collection: `newsletter-subscribers`

Document structure:
```
{
  email: string,
  subscribedAt: timestamp,
  acceptedPrivacyPolicy: boolean
}
```

### Contact Form Submissions

Collection: `contact-submissions`

Document structure:
```
{
  name: string,
  email: string,
  phone: string (optional),
  service: string,
  sourceLanguage: string,
  targetLanguage: string,
  message: string,
  submittedAt: timestamp
}
```

## Security Rules

The application uses the following security rules to protect your data:

1. Newsletter subscribers can only be created, not read, updated, or deleted from the client
2. Contact form submissions can only be created, not read, updated, or deleted from the client
3. All data has validation rules to ensure proper formatting

To view or manage your data, use the Firebase Console.

## GitHub Integration

Since this application is hosted on GitHub, you need to be careful with your Firebase credentials:

1. **NEVER** commit your `.env.local` file to GitHub
2. Make sure `.env.local` is in your `.gitignore` file
3. For GitHub Actions or other CI/CD pipelines, set up repository secrets for your Firebase credentials

## Accessing Data in Firebase Console

To view and manage your data:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to "Firestore Database" in the left sidebar
4. You'll see your collections and documents

## Troubleshooting

If you encounter issues with your Firebase integration:

1. Check that your environment variables are set correctly
2. Ensure you've installed the Firebase SDK (`npm install firebase`)
3. Verify that your Firestore security rules allow the operations you're trying to perform
4. Check the browser console for any errors
5. Visit `/admin/firebase-test` to diagnose connection issues

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
