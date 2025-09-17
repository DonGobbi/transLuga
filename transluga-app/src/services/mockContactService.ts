/**
 * Simple mock implementation for contact form submission
 * This is completely independent of Firebase to avoid any permission issues
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
  // Log the form submission attempt
  console.log(`Contact form submission attempt for: ${formData.email}`, formData);
  
  // Simulate a delay to make it feel like something is happening
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Always return success
  // In a real implementation, you would store this in a database
  // or send it to an API endpoint
  return 'mock-contact-submission-id';
};
