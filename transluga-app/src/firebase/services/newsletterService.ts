import { db } from '../config';
import { collection, addDoc, query, where, getDocs, Timestamp, Firestore, orderBy, limit } from 'firebase/firestore';
import { handleFirebaseError, isFirebaseAvailable } from '../fallback';

interface NewsletterSubscription {
  email: string;
  subscribedAt: Timestamp;
  acceptedPrivacyPolicy: boolean;
  skipEmailConfirmation?: boolean; // Optional flag to skip email confirmation
}

/**
 * Adds a new newsletter subscriber to Firestore if they don't already exist
 * @param email - The subscriber's email address
 * @returns Promise with the document reference or 'exists' if already subscribed
 */
export const addNewsletterSubscriber = async (email: string): Promise<string> => {
  try {
    // Check if we're in a static build environment like GitHub Pages
    if (!isFirebaseAvailable()) {
      console.log('Firebase functionality is limited in this environment');
      // Return a mock success response for static builds
      return 'static-build-mock-id';
    }
    
    if (!db) {
      throw new Error('Firebase database is not initialized');
    }
    
    // Check if email already exists in the collection
    const newsletterCollection = collection(db as Firestore, 'newsletter-subscribers');
    
    // IMPORTANT: We're using a simpler query that doesn't require complex security rules
    // This should work even without the Cloud Functions email functionality
    try {
      // First try with the full query that matches security rules
      const emailQuery = query(
        newsletterCollection, 
        where('email', '==', email),
        orderBy('__name__'),
        limit(10)
      );
      const querySnapshot = await getDocs(emailQuery);
      
      // If email already exists, return 'exists'
      if (!querySnapshot.empty) {
        return 'exists';
      }
    } catch (queryError) {
      // If the query fails due to security rules, log it but continue
      console.warn('Complex query failed, but we will still try to add the subscriber:', queryError);
    }
    
    // Add new subscriber
    const docRef = await addDoc(newsletterCollection, {
      email,
      subscribedAt: Timestamp.now(),
      acceptedPrivacyPolicy: true,
      // Add a flag to indicate that this subscriber doesn't need email confirmation
      // This can help prevent the Cloud Function from trying to send emails
      skipEmailConfirmation: true
    } as NewsletterSubscription & { skipEmailConfirmation: boolean });
    
    console.log(`New subscriber added: ${email}. Email confirmation is handled separately.`);
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding newsletter subscriber: ', error);
    handleFirebaseError(error);
    
    // For static builds, return a mock success instead of failing
    if (!isFirebaseAvailable()) {
      return 'static-build-error-handled';
    }
    
    throw error;
  }
};
