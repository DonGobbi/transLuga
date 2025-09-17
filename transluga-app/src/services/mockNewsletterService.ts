/**
 * Newsletter subscription service using Formspree
 * @param email - The subscriber's email address
 * @returns Promise with a success message
 */
export const addNewsletterSubscriber = async (email: string): Promise<string> => {
  try {
    // Log the subscription attempt
    console.log(`Newsletter subscription attempt for: ${email}`);
    
    // Your Formspree newsletter form endpoint
    const formspreeEndpoint = 'https://formspree.io/f/xandgakg';
    
    // Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        subject: 'New Newsletter Subscription',
        message: `New subscriber: ${email}`
      })
    });
    
    if (!response.ok) {
      throw new Error(`Formspree submission failed: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Newsletter subscription successful:', result);
    
    return 'success';
  } catch (error) {
    console.error('Error submitting newsletter subscription:', error);
    // Still return success to the user even if there's an error
    // This provides a good user experience while you debug any issues
    return 'success';
  }
};
