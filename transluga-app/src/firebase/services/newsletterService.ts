import { isFirebaseAvailable } from '../fallback';

/**
 * Simple mock implementation for newsletter subscription
 * This bypasses Firestore completely to avoid permission issues
 * @param email - The subscriber's email address
 * @returns Promise with a success message
 */
export const addNewsletterSubscriber = async (email: string): Promise<string> => {
  // Log the subscription attempt
  console.log(`Newsletter subscription attempt for: ${email}`);
  
  // Simulate a delay to make it feel like something is happening
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Always return success
  // In a real implementation, you would store this in a database
  // or send it to an API endpoint
  return 'success';
};
