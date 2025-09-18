import { sendConfirmationEmail } from './emailService';

/**
 * Contact form submission service using Formspree
 * @param formData - The contact form data
 * @returns Promise with a success message
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
    // Log the form submission attempt
    console.log(`Contact form submission attempt for: ${formData.email}`, formData);
    
    // Your Formspree contact form endpoint
    const formspreeEndpoint = 'https://formspree.io/f/meolbvwe';
    
    console.log(`Sending to Formspree endpoint: ${formspreeEndpoint}`);
    
    // Submit to Formspree using fetch API
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(`Formspree submission failed: ${response.statusText}`);
    }
    
    // Send confirmation email
    const confirmationSent = await sendConfirmationEmail({
      email: formData.email,
      name: formData.name,
      formType: 'contact',
      adminEmail: 'calvezgobbi@gmail.com', // Your admin email
      subject: 'We received your message - Transluga',
      message: `Service: ${formData.service}\nSource Language: ${formData.sourceLanguage}\nTarget Language: ${formData.targetLanguage}\n\n${formData.message}`
    });
    
    if (!confirmationSent) {
      console.warn('Confirmation email could not be sent, but form was submitted');
    }
    
    console.log('Contact form submission completed successfully');
    return 'success';
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Log additional details if it's a network error
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error: This might be a CORS issue or network connectivity problem');
    }
    
    throw error; // Propagate the error to be handled by the caller
  }
};
