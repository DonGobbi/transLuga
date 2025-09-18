/**
 * Email service utility for handling email confirmations
 * This service works with Formspree to send confirmation emails
 * 
 * Admin email: calvezgobbi@gmail.com
 * Website URL: https://dongobbi.github.io/transLuga/
 */

// Types for email data
export interface EmailData {
  email: string;
  name?: string;
  subject?: string;
  message?: string;
  formType: 'newsletter' | 'contact';
  adminEmail?: string; // Optional admin email override
}

// Admin email address for notifications
const ADMIN_EMAIL = 'calvezgobbi@gmail.com';

/**
 * Sends a confirmation email to the user
 * Uses Formspree's built-in email confirmation feature
 * 
 * @param data - The email data including recipient address
 * @returns Promise with success status
 */
export const sendConfirmationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Determine which Formspree endpoint to use based on form type
    const formspreeEndpoint = data.formType === 'newsletter' 
      ? 'https://formspree.io/f/xandgakg' // Newsletter form endpoint
      : 'https://formspree.io/f/meolbvwe'; // Contact form endpoint
    
    // Prepare the form data with _autoresponse field to trigger Formspree's auto-response
    const formData = new FormData();
    formData.append('email', data.email);
    
    if (data.name) {
      formData.append('name', data.name);
    }
    
    // Add message content
    const messageContent = data.message || 
      (data.formType === 'newsletter' 
        ? 'Newsletter subscription' 
        : 'Contact form submission');
    formData.append('message', messageContent);
    
    // This is the key field that tells Formspree to send an autoresponse
    formData.append('_autoresponse', getAutoResponseTemplate(data));
    
    // This tells Formspree to use a specific subject for the autoresponse
    const emailSubject = data.subject || 
      (data.formType === 'newsletter' 
        ? 'Thank you for subscribing to Transluga Newsletter!' 
        : 'We received your message - Transluga');
    formData.append('_subject', emailSubject);
    
    // Add admin email as CC to ensure admin gets a copy of all submissions
    const adminEmail = data.adminEmail || ADMIN_EMAIL;
    formData.append('_cc', adminEmail);
    
    // Add replyto field to make it easy to reply to the sender
    formData.append('_replyto', data.email);
    
    // Add website URL as a reference
    formData.append('_website', 'https://dongobbi.github.io/transLuga/');
    
    // Send the request to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to send confirmation email: ${response.statusText}`);
    }
    
    console.log(`Confirmation email sent to ${data.email}`);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};

/**
 * Gets the appropriate auto-response template based on the form type
 * 
 * @param data - The email data
 * @returns HTML template for the auto-response email
 */
function getAutoResponseTemplate(data: EmailData): string {
  const { name = 'there', formType } = data;
  const websiteUrl = 'https://dongobbi.github.io/transLuga/';
  const logoUrl = 'https://dongobbi.github.io/transLuga/images/logo.png';
  const adminEmail = 'calvezgobbi@gmail.com';
  
  if (formType === 'newsletter') {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <img src="${logoUrl}" alt="Transluga Logo" style="max-width: 200px; margin-bottom: 20px;">
            <h2 style="color: #4a6cf7;">Thank You for Subscribing!</h2>
            <p>Hello ${name},</p>
            <p>Thank you for subscribing to the Transluga newsletter. We're excited to share with you the latest translation tips, industry insights, and special offers.</p>
            <p>You'll start receiving our newsletter at this email address shortly.</p>
            <p>If you have any questions or need assistance with translation services, feel free to contact us at <a href="mailto:${adminEmail}" style="color: #4a6cf7;">${adminEmail}</a>.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="font-size: 14px; color: #666;">
                <strong>Transluga</strong><br>
                Area 14, House Number 151<br>
                Lilongwe, Malawi<br>
                +265 99 68 73 573<br>
                <a href="${websiteUrl}" style="color: #4a6cf7;">dongobbi.github.io/transLuga</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  } else {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <img src="${logoUrl}" alt="Transluga Logo" style="max-width: 200px; margin-bottom: 20px;">
            <h2 style="color: #4a6cf7;">We've Received Your Message</h2>
            <p>Hello ${name},</p>
            <p>Thank you for contacting Transluga. We've received your message and our team will review it shortly.</p>
            <p>We typically respond within 24-48 business hours. If your matter is urgent, please call us at +265 99 68 73 573.</p>
            <p>We appreciate your interest in our translation and interpretation services.</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="font-size: 14px; color: #666;">
                <strong>Transluga</strong><br>
                Area 14, House Number 151<br>
                Lilongwe, Malawi<br>
                +265 99 68 73 573<br>
                <a href="${websiteUrl}" style="color: #4a6cf7;">dongobbi.github.io/transLuga</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}
