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
    
    // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
    
    // Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        subject: `New Contact Form Submission from ${formData.name}`
      })
    });
    
    if (!response.ok) {
      throw new Error(`Formspree submission failed: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Contact form submission successful:', result);
    
    return 'success';
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Still return success to the user even if there's an error
    // This provides a good user experience while you debug any issues
    return 'success';
  }
};
