import * as functions from 'firebase-functions';
// Explicitly import v1 namespace to avoid confusion with v2
import { firestore as firestoreV1 } from 'firebase-functions/v1';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configure nodemailer with your email service credentials
// For production, use environment variables for these values
const getTransporter = () => {
  try {
    // Check if email config exists
    const emailConfig = functions.config().email;
    if (!emailConfig || !emailConfig.user || !emailConfig.password) {
      console.error('Email configuration is missing. Please set up email.user and email.password in Firebase config.');
      return null;
    }
    
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailConfig.user,
        pass: emailConfig.password
      }
    });
  } catch (error) {
    console.error('Error creating email transporter:', error);
    return null;
  }
};

// Company email to receive notifications
const getCompanyEmail = () => {
  try {
    return functions.config().email?.company || 'calvezgobbi@gmail.com';
  } catch (error) {
    return 'calvezgobbi@gmail.com';
  }
};

/**
 * Send confirmation email to new newsletter subscribers
 */
export const sendNewsletterConfirmation = firestoreV1
  .document('newsletter-subscribers/{subscriberId}')
  .onCreate(async (snap, context) => {
    const subscriberData = snap.data();
    if (!subscriberData || !subscriberData.email) {
      console.error('Invalid subscriber data:', subscriberData);
      return null;
    }
    
    // Check if we should skip email confirmation
    if (subscriberData.skipEmailConfirmation) {
      console.log(`Skipping email confirmation for ${subscriberData.email} as requested`);
      return null;
    }
    
    const subscriberEmail = subscriberData.email;
    const transporter = getTransporter();
    const COMPANY_EMAIL = getCompanyEmail();
    
    if (!transporter) {
      console.error('Email transporter not initialized');
      return null;
    }
    
    try {
      // Email to subscriber
      await transporter.sendMail({
        from: `"Transluga" <${COMPANY_EMAIL}>`,
        to: subscriberEmail,
        subject: 'Welcome to Transluga Newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a4365;">Thank You for Subscribing!</h2>
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to the Transluga newsletter. We're excited to share our latest translation tips, industry insights, and special offers with you.</p>
            <p>You'll start receiving our newsletter shortly. In the meantime, feel free to explore our services on our website.</p>
            <p style="margin-top: 20px;">Best regards,<br>The Transluga Team</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
              <p>If you didn't subscribe to our newsletter, please ignore this email.</p>
            </div>
          </div>
        `
      });
      
      // Notification to company
      await transporter.sendMail({
        from: `"Transluga System" <${COMPANY_EMAIL}>`,
        to: COMPANY_EMAIL,
        subject: 'New Newsletter Subscriber',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a4365;">New Newsletter Subscriber</h2>
            <p>A new user has subscribed to the Transluga newsletter:</p>
            <p><strong>Email:</strong> ${subscriberEmail}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `
      });
      
      console.log(`Confirmation emails sent for subscriber: ${subscriberEmail}`);
      return null;
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return null;
    }
  });

/**
 * Send confirmation email for contact form submissions
 */
export const sendContactConfirmation = firestoreV1
  .document('contact-submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const submissionData = snap.data();
    if (!submissionData || !submissionData.email) {
      console.error('Invalid submission data:', submissionData);
      return null;
    }
    
    const { name = 'Customer', email, service, sourceLanguage, targetLanguage, message = '' } = submissionData;
    const transporter = getTransporter();
    const COMPANY_EMAIL = getCompanyEmail();
    
    if (!transporter) {
      console.error('Email transporter not initialized');
      return null;
    }
    
    try {
      // Email to contact
      await transporter.sendMail({
        from: `"Transluga" <${COMPANY_EMAIL}>`,
        to: email,
        subject: 'We\'ve Received Your Message',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a4365;">Thank You for Contacting Us</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Transluga. We've received your message and will get back to you as soon as possible.</p>
            <p>Here's a summary of your inquiry:</p>
            <ul>
              <li><strong>Service:</strong> ${service || 'Not specified'}</li>
              <li><strong>Source Language:</strong> ${sourceLanguage || 'Not specified'}</li>
              <li><strong>Target Language:</strong> ${targetLanguage || 'Not specified'}</li>
            </ul>
            <p style="margin-top: 20px;">Best regards,<br>The Transluga Team</p>
          </div>
        `
      });
      
      // Notification to company
      await transporter.sendMail({
        from: `"Transluga System" <${COMPANY_EMAIL}>`,
        to: COMPANY_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2a4365;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Source Language:</strong> ${sourceLanguage || 'Not specified'}</p>
            <p><strong>Target Language:</strong> ${targetLanguage || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2a4365;">
              ${message}
            </div>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `
      });
      
      console.log(`Confirmation emails sent for contact: ${email}`);
      return null;
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return null;
    }
  });
