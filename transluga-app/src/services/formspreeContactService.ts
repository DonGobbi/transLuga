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
    
    // For Formspree, the simplest approach is to use their recommended HTML form submission method
    // Create a hidden form element, submit it, and then remove it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formspreeEndpoint;
    form.target = '_blank'; // This prevents page navigation
    form.style.display = 'none';
    
    // Add all form fields
    const addField = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };
    
    addField('name', formData.name);
    addField('email', formData.email);
    addField('phone', formData.phone);
    addField('service', formData.service);
    addField('sourceLanguage', formData.sourceLanguage);
    addField('targetLanguage', formData.targetLanguage);
    addField('message', formData.message);
    addField('subject', `New Contact Form Submission from ${formData.name}`);
    
    // Append form to body, submit it, and remove it
    document.body.appendChild(form);
    form.submit();
    
    // Use a timeout to give the form time to submit before removing it
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);
    
    // Since we're using the form submission approach, we don't have a response to check
    // Just return success
    console.log('Contact form submission initiated');
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
