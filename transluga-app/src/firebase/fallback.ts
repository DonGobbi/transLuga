// This file provides fallback functionality when Firebase is not available
// Used primarily for static builds like GitHub Pages where Firebase might not be fully functional

/**
 * Handle Firebase errors gracefully
 * @param error - The error object
 */
export const handleFirebaseError = (error: any): void => {
  console.warn('Firebase operation failed or not available:', error);
  // You could add more sophisticated fallback behavior here if needed
};

/**
 * Check if Firebase is available and properly configured
 * @returns boolean indicating if Firebase is available
 */
export const isFirebaseAvailable = (): boolean => {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return false;
    }
    
    // Check if Firebase API key is set and not a dummy value
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (!apiKey || apiKey === 'dummy-api-key-for-github-pages') {
      return false;
    }
    
    // Check if Firebase project ID is set
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    if (!projectId) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.warn('Error checking Firebase availability:', error);
    return false;
  }
};
