import { db } from '../config';
import { collection, addDoc, Timestamp, Firestore } from 'firebase/firestore';

interface NewsletterSubscription {
  email: string;
  subscribedAt: Timestamp;
  acceptedPrivacyPolicy: boolean;
}

/**
 * Adds a new newsletter subscriber to Firestore
 * @param email - The subscriber's email address
 * @returns Promise with the document reference
 */
export const addNewsletterSubscriber = async (email: string): Promise<string> => {
  try {
    if (!db) {
      throw new Error('Firebase database is not initialized');
    }
    
    const docRef = await addDoc(collection(db as Firestore, 'newsletter-subscribers'), {
      email,
      subscribedAt: Timestamp.now(),
      acceptedPrivacyPolicy: true
    } as NewsletterSubscription);
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding newsletter subscriber: ', error);
    throw error;
  }
};
