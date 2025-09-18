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
    
    // First, send the notification to the admin
    const adminFormData = new FormData();
    adminFormData.append('email', adminEmail); // This will be the recipient
    adminFormData.append('_replyto', data.email); // Make it easy to reply to the user
    
    // Add user details
    if (data.name) {
      adminFormData.append('name', data.name);
    }
    
    // Create a descriptive subject line
    const adminSubject = data.formType === 'newsletter' 
      ? `New Newsletter Subscription: ${data.email}` 
      : `New Contact Form Submission: ${data.name || data.email}`;
    adminFormData.append('_subject', adminSubject);
    
    // Add message content
    const messageContent = data.message || 
      (data.formType === 'newsletter' 
        ? 'Newsletter subscription' 
        : 'Contact form submission');
    adminFormData.append('message', messageContent);
    
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
    }
    
    // Now send the confirmation to the user
    const userFormData = new FormData();
    userFormData.append('email', data.email); // User's email
    userFormData.append('_replyto', adminEmail); // Admin's email as reply-to
    
    if (data.name) {
      userFormData.append('name', data.name);
    }
    
    // Use a simple text message for the confirmation
    // This will be shown in the Formspree dashboard
    userFormData.append('message', data.formType === 'newsletter' 
      ? 'Thank you for subscribing to our newsletter!' 
      : 'Thank you for contacting us!');
    
    // Set the subject for the user's confirmation email
    const userSubject = data.formType === 'newsletter' 
      ? 'Thank you for subscribing to Transluga Newsletter!' 
      : 'We received your message - Transluga';
    userFormData.append('_subject', userSubject);
    
    // Add the HTML template as the autoresponse
    userFormData.append('_autoresponse', getAutoResponseTemplate(data));
    
    // Send the confirmation to the user
    const userResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: userFormData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!userResponse.ok) {
      throw new Error(`Failed to send confirmation email: ${userResponse.statusText}`);
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
