import { useState } from 'react';
import Head from 'next/head';
import { sendConfirmationEmail } from '../services/emailService';
import { FaCheck, FaExclamationCircle } from 'react-icons/fa';

export default function TestEmail() {
  const [email, setEmail] = useState('');
  const [formType, setFormType] = useState<'newsletter' | 'contact'>('newsletter');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const sent = await sendConfirmationEmail({
        email,
        name: 'Test User',
        formType,
        adminEmail: 'calvezgobbi@gmail.com', // Your admin email
        subject: formType === 'newsletter' 
          ? 'Thank you for subscribing to Transluga Newsletter!' 
          : 'We received your message - Transluga',
        message: formType === 'newsletter'
          ? 'Newsletter subscription test'
          : 'Contact form submission test'
      });

      setResult({
        success: sent,
        message: sent 
          ? `Test ${formType} confirmation email sent successfully to ${email}` 
          : `Failed to send test ${formType} confirmation email to ${email}`
      });
    } catch (error) {
      console.error('Error sending test email:', error);
      setResult({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Test Email Confirmations | Transluga</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-primary-800 mb-6">Test Email Confirmations</h1>
        
        {result && (
          <div className={`${result.success ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'} border-l-4 p-4 mb-6 rounded-lg`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {result.success ? (
                  <FaCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <FaExclamationCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${result.success ? 'text-green-700' : 'text-red-700'}`}>
                  {result.message}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="test@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Type
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary-600"
                  name="formType"
                  value="newsletter"
                  checked={formType === 'newsletter'}
                  onChange={() => setFormType('newsletter')}
                />
                <span className="ml-2">Newsletter</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-primary-600"
                  name="formType"
                  value="contact"
                  checked={formType === 'contact'}
                  onChange={() => setFormType('contact')}
                />
                <span className="ml-2">Contact Form</span>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Test Email'}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Enter a valid email address where you want to receive the test confirmation.</li>
            <li>Select whether you want to test the Newsletter or Contact Form confirmation.</li>
            <li>Click "Send Test Email" and check your inbox for the confirmation email.</li>
            <li><strong>Important:</strong> The admin (calvezgobbi@gmail.com) will receive a notification email.</li>
            <li>Check both your inbox and spam folder for the confirmation email.</li>
            <li>Note: This page is for testing purposes only and should be removed in production.</li>
          </ol>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-4">
            This test uses Formspree's autoresponse feature to send confirmation emails:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li><strong>Admin Notification:</strong> Sends an email to calvezgobbi@gmail.com with details about the submission.</li>
            <li><strong>User Confirmation:</strong> Formspree sends an automatic response to the email address you entered.</li>
          </ol>
          <p className="text-gray-600 mt-4 font-bold text-red-600">
            IMPORTANT: Check both your inbox AND spam folder for the confirmation email. You may need to add formspree.io to your safe senders list.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> If you're not receiving confirmation emails, please try these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-yellow-700 mt-2">
              <li>Check your spam/junk folder</li>
              <li>Add formspree.io to your email's safe senders list</li>
              <li>Try a different email address (Gmail, Outlook, etc.)</li>
              <li>Wait a few minutes as email delivery can sometimes be delayed</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
