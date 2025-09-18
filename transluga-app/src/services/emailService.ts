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
    
    const adminEmail = data.adminEmail || ADMIN_EMAIL;
    
    // Create a single FormData object for the submission
    const formData = new FormData();
    
    // Add the user's email as the primary email
    formData.append('email', data.email);
    
    // Add user details
    if (data.name) {
      formData.append('name', data.name);
    }
    
    // Add message content
    const messageContent = data.message || 
      (data.formType === 'newsletter' 
        ? 'Newsletter subscription' 
        : 'Contact form submission');
    formData.append('message', messageContent);
    
    // Add CC to admin email so they get a copy
    formData.append('_cc', adminEmail);
    
    // Make it easy to reply to the user
    formData.append('_replyto', data.email);
    
    // Set the subject for the email
    const emailSubject = data.formType === 'newsletter' 
      ? 'Thank you for subscribing to Transluga Newsletter!' 
      : 'We received your message - Transluga';
    formData.append('_subject', emailSubject);
    
    // Add the HTML template as the autoresponse
    // This is what the user will receive
    formData.append('_autoresponse', getAutoResponseTemplate(data));
    
    // Send the form submission
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to submit form: ${response.statusText}`);
    }
    
    console.log(`Form submitted successfully for ${data.email}`);
    
    // Now send a separate notification to the admin with more details
    const adminFormData = new FormData();
    adminFormData.append('email', adminEmail); // Admin's email
    adminFormData.append('_replyto', data.email); // User's email as reply-to
    
    // Create a descriptive subject line for admin
    const adminSubject = data.formType === 'newsletter' 
      ? `New Newsletter Subscription: ${data.email}` 
      : `New Contact Form Submission: ${data.name || data.email}`;
    adminFormData.append('_subject', adminSubject);
    
    // Add detailed message for admin
    adminFormData.append('message', `
      New ${data.formType === 'newsletter' ? 'newsletter subscription' : 'contact form submission'}


      Email: ${data.email}
      Name: ${data.name || 'Not provided'}
      ${data.message ? `Message: ${data.message}` : ''}
    `);
    
    // Send the admin notification
    const adminResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: adminFormData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!adminResponse.ok) {
      console.error(`Failed to send admin notification: ${adminResponse.statusText}`);
      // Don't throw error here, as the primary submission succeeded
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
