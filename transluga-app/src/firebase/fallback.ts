// This file provides fallback functionality when Firebase is not available
// Used primarily for static builds like GitHub Pages where Firebase might not be fully functional

export const handleFirebaseError = (error: any): void => {
  console.warn('Firebase operation failed or not available:', error);
  // You could add more sophisticated fallback behavior here if needed
};

export const isFirebaseAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== 'dummy-api-key-for-github-pages';
};
