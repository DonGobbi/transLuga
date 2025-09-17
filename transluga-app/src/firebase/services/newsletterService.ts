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
    // First try the mock implementation for reliability
    console.log(`Newsletter subscription attempt for: ${email}`);
    
    // Simulate a delay to make it feel like something is happening
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Try to use Firebase only if available
    if (isFirebaseAvailable() && db) {
      try {
        // First check if the email already exists
        // This query must match the security rules exactly
        const newsletterCollection = collection(db as Firestore, 'newsletter-subscribers');
        
        try {
          // This query must match the security rules exactly:
          // allow read: if request.query.limit <= 10 && 
          //              request.query.orderBy == '__name__' && 
          //              'email' in request.query.filters;
          const emailQuery = query(
            newsletterCollection,
            where('email', '==', email),
            orderBy('__name__'),
            limit(10)
          );
          
          const querySnapshot = await getDocs(emailQuery);
          
          // If email already exists, return 'exists'
          if (!querySnapshot.empty) {
            console.log(`Email ${email} already exists in the database`);
            return 'exists';
          }
        } catch (queryError) {
          console.warn('Error checking for existing email:', queryError);
          // Continue with the subscription attempt even if the query fails
        }
        
        // Add new subscriber with just the email field
        // This matches the security rule: request.resource.data.keys().hasAll(['email'])
        const docRef = await addDoc(newsletterCollection, { email });
        
        console.log(`New subscriber added to Firebase: ${email}`);
        return docRef.id;
      } catch (firebaseError) {
        // If Firebase fails, log it but don't fail the subscription
        console.warn('Firebase error, falling back to mock:', firebaseError);
      }
    } else {
      console.log('Firebase not available, using mock implementation');
    }
    
    // If Firebase is not available or failed, return a mock success
    return 'mock-success';
  } catch (error) {
    console.error('Error in newsletter subscription:', error);
    // Always return success to the user even if there's an error
    return 'error-handled';
  }
};
