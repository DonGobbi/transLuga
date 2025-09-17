import { db } from '../config';
import { collection, addDoc, Timestamp, Firestore } from 'firebase/firestore';

interface ContactFormSubmission {
  name: string;
  email: string;
  phone?: string;
  service: string;
  sourceLanguage: string;
  targetLanguage: string;
  message: string;
  submittedAt: Timestamp;
}

/**
 * Adds a new contact form submission to Firestore
 * @param formData - The contact form data
 * @returns Promise with the document reference
 */
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  sourceLanguage: string;
  targetLanguage: string;
  message: string;
}): Promise<string> => {
  try {
    if (!db) {
      throw new Error('Firebase database is not initialized');
    }
    
    const docRef = await addDoc(collection(db as Firestore, 'contact-submissions'), {
      ...formData,
      submittedAt: Timestamp.now()
    } as ContactFormSubmission);
    
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw error;
  }
};
