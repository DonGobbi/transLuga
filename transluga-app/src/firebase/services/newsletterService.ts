import { db } from '../config';
import { collection, addDoc, query, where, getDocs, Timestamp, Firestore } from 'firebase/firestore';

interface NewsletterSubscription {
  email: string;
  subscribedAt: Timestamp;
  acceptedPrivacyPolicy: boolean;
}

/**
 * Adds a new newsletter subscriber to Firestore if they don't already exist
 * @param email - The subscriber's email address
 * @returns Promise with the document reference or 'exists' if already subscribed
 */
export const addNewsletterSubscriber = async (email: string): Promise<string> => {
  try {
    if (!db) {
      throw new Error('Firebase database is not initialized');
    }
    
    // Check if email already exists in the collection
    const newsletterCollection = collection(db as Firestore, 'newsletter-subscribers');
    const emailQuery = query(newsletterCollection, where('email', '==', email));
    const querySnapshot = await getDocs(emailQuery);
    
    // If email already exists, return 'exists'
    if (!querySnapshot.empty) {
      return 'exists';
    }
    
    // Add new subscriber
    const docRef = await addDoc(newsletterCollection, {
      email,
      subscribedAt: Timestamp.now(),
      acceptedPrivacyPolicy: true
    } as NewsletterSubscription);
    
    // Here you would typically trigger an email confirmation
    // For now, we'll just log it
    console.log(`New subscriber added: ${email}. Email confirmation would be sent here.`);
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding newsletter subscriber: ', error);
    throw error;
  }
};
