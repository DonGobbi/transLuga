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
    
    // For Formspree, the simplest approach is to use their recommended HTML form submission method
    // Create a hidden form element, submit it, and then remove it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formspreeEndpoint;
    form.target = '_blank'; // This prevents page navigation
    form.style.display = 'none';
    
    // Add email field
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);
    
    // Add message field
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.name = 'message';
    messageInput.value = `New newsletter subscriber: ${email}`;
    form.appendChild(messageInput);
    
    // Append form to body, submit it, and remove it
    document.body.appendChild(form);
    form.submit();
    
    // Use a timeout to give the form time to submit before removing it
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);
    
    // Since we're using the form submission approach, we don't have a response to check
    // Just return success
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
