// This script creates a firebase-config.js file with environment variables
// It should be run during the build process

const fs = require('fs');
const path = require('path');

// Check if all required environment variables are set
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
  'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Error: Missing environment variables: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

// Create the firebase config content
const firebaseConfigContent = `// This file is auto-generated during the build process
// DO NOT EDIT MANUALLY

export const firebaseConfig = {
  apiKey: "${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}",
  authDomain: "${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}",
  projectId: "${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}",
  storageBucket: "${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}",
  messagingSenderId: "${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}",
  appId: "${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}",
  measurementId: "${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}"
};
`;

// Write the config file
const configFilePath = path.join(__dirname, '..', 'src', 'firebase', 'generated-config.js');
fs.writeFileSync(configFilePath, firebaseConfigContent);

console.log(`Firebase config file generated at ${configFilePath}`);
