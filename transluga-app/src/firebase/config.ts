// Firebase configuration
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Define Firebase configuration interface
interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

// Get Firebase configuration from environment variables
// This approach ensures credentials are not hardcoded
const getFirebaseConfig = (): FirebaseConfig => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // For client-side, use Next.js public environment variables
    return {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };
  } else {
    // For server-side, use regular environment variables
    // This branch won't typically be used with Next.js, but included for completeness
    return {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };
  }
};

// Initialize Firebase only if configuration is available
let app: FirebaseApp | undefined;
let db: Firestore | undefined;

try {
  const firebaseConfig = getFirebaseConfig();
  
  // Check if all required config values are present
  const requiredConfigKeys: (keyof FirebaseConfig)[] = ['apiKey', 'authDomain', 'projectId'];
  const missingKeys = requiredConfigKeys.filter(key => !firebaseConfig[key]);
  
  if (missingKeys.length > 0) {
    console.error(`Firebase initialization failed. Missing config keys: ${missingKeys.join(', ')}`);
  } else {
    // Initialize Firebase
    app = initializeApp(firebaseConfig as any);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export { db };
