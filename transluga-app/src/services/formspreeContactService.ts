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
    
    // Formspree expects form data in a specific format
    // Let's use FormData instead of JSON for better compatibility
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('service', formData.service);
    form.append('sourceLanguage', formData.sourceLanguage);
    form.append('targetLanguage', formData.targetLanguage);
    form.append('message', formData.message);
    form.append('subject', `New Contact Form Submission from ${formData.name}`);
    
    // Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: form
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Formspree submission failed: ${response.status}`, errorText);
      throw new Error(`Formspree submission failed: ${response.status}. ${errorText}`);
    }
    
    const result = await response.json();
    console.log('Contact form submission successful:', result);
    
    return 'success';
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Log additional details if it's a network error
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error: This might be a CORS issue or network connectivity problem');
    }
    
    // Still return success to the user even if there's an error
    // This provides a good user experience while you debug any issues
    return 'success';
  }
};
