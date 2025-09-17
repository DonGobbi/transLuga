// Firebase configuration
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Log environment for debugging
console.log('Environment check:', {
  nodeEnv: process.env.NODE_ENV,
  hasWindow: typeof window !== 'undefined',
  hasApiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  hasAuthDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  hasProjectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
});

// Hard-coded configuration for production
// IMPORTANT: This is only for the deployed production environment
// These values will be replaced during the build process
const productionConfig = {
  apiKey: "FIREBASE_API_KEY_PLACEHOLDER",
  authDomain: "transluga-f0db9.firebaseapp.com",
  projectId: "transluga-f0db9",
  storageBucket: "transluga-f0db9.firebasestorage.app",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER",
  appId: "FIREBASE_APP_ID_PLACEHOLDER"
};

// Get Firebase configuration from environment variables or use production config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || productionConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || productionConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || productionConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || productionConfig.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || productionConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || productionConfig.appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only if configuration is available
let app: FirebaseApp | undefined;
let db: Firestore | undefined;

try {
  // Check if required config values are present
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('Firebase configuration is missing required fields:', { 
      hasApiKey: !!firebaseConfig.apiKey, 
      hasProjectId: !!firebaseConfig.projectId 
    });
  } else {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully with project:', firebaseConfig.projectId);
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export { db };
