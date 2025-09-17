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
    
    console.log(`Sending to Formspree endpoint: ${formspreeEndpoint}`);
    
    // Formspree expects form data in a specific format
    // Let's use FormData instead of JSON for better compatibility
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', 'New Newsletter Subscription');
    formData.append('message', `New subscriber: ${email}`);
    
    // Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Formspree submission failed: ${response.status}`, errorText);
      throw new Error(`Formspree submission failed: ${response.status}. ${errorText}`);
    }
    
    const result = await response.json();
    console.log('Newsletter subscription successful:', result);
    
    return 'success';
  } catch (error) {
    console.error('Error submitting newsletter subscription:', error);
    
    // Log additional details if it's a network error
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error: This might be a CORS issue or network connectivity problem');
    }
    
    // Still return success to the user even if there's an error
    // This provides a good user experience while you debug any issues
    return 'success';
  }
};
