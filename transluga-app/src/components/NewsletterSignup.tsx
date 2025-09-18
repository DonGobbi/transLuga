import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import { sendConfirmationEmail } from '../services/emailService';

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  darkMode?: boolean;
}

export default function NewsletterSignup({ 
  title = "Subscribe to Our Newsletter", 
  subtitle = "Get the latest translation tips, industry insights, and special offers delivered to your inbox.",
  buttonText = "Subscribe",
  darkMode = false
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const textColorClass = darkMode ? 'text-white' : 'text-gray-800';
  const subtitleColorClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const inputBgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
  const inputTextClass = darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400';
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First, submit to Formspree
      const formspreeEndpoint = 'https://formspree.io/f/xandgakg';
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          message: 'Newsletter subscription'
        })
      });
      
      if (!formspreeResponse.ok) {
        throw new Error('Failed to submit to Formspree');
      }
      
      // Then send confirmation email
      const confirmationSent = await sendConfirmationEmail({
        email,
        formType: 'newsletter',
        adminEmail: 'calvezgobbi@gmail.com', // Your admin email
        subject: 'Thank you for subscribing to Transluga Newsletter!'
      });
      
      if (!confirmationSent) {
        console.warn('Confirmation email could not be sent, but form was submitted');
      }
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for subscribing! A confirmation email has been sent to your inbox.'
      });
      
      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error submitting your subscription. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-8 rounded-lg shadow-md`}>
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{title}</h3>
        <p className={`${subtitleColorClass}`}>{subtitle}</p>
      </div>
      
      {formStatus.submitted && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaCheck className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{formStatus.message}</p>
            </div>
          </div>
        </div>
      )}
      
      {formStatus.error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaExclamationCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{formStatus.message}</p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-1 ${textColorClass}`}>
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`w-full px-4 py-2 rounded-lg ${inputBgClass} ${inputTextClass} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              required
            />
          </div>
          <input type="hidden" name="message" value="Newsletter subscription" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />
        </div>
        
        <div className="flex items-center">
          <input
            id="privacy-policy"
            name="privacy-policy"
            type="checkbox"
            required
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="privacy-policy" className={`ml-2 block text-sm ${subtitleColorClass}`}>
            I agree to receive emails from Transluga and accept the <a href="/privacy-policy" className="text-primary-600 hover:underline">privacy policy</a>.
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" /> {buttonText}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
