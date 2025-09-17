import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { addNewsletterSubscriber } from '../firebase/services/newsletterService';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Add subscriber to Firebase
      await addNewsletterSubscriber(email);
      
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setEmail('');
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setIsLoading(false);
      setError('Failed to subscribe. Please try again later.');
      console.error('Newsletter subscription error:', err);
    }
  };
  
  const textColorClass = darkMode ? 'text-white' : 'text-gray-800';
  const subtitleColorClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const inputBgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
  const inputTextClass = darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400';
  
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-8 rounded-lg shadow-md`}>
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{title}</h3>
        <p className={`${subtitleColorClass}`}>{subtitle}</p>
      </div>
      
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-4">
          <FaCheckCircle className="text-green-500 text-4xl mb-3" />
          <p className={`${textColorClass} text-center`}>
            Thank you for subscribing! We'll keep you updated with the latest news and offers.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${textColorClass}`}>
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg ${inputBgClass} ${inputTextClass} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                required
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
          
          <div className="flex items-center">
            <input
              id="privacy-policy"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy-policy" className={`ml-2 block text-sm ${subtitleColorClass}`}>
              I agree to receive emails from Transluga and accept the <a href="/transLuga/privacy-policy" className="text-primary-600 hover:underline">privacy policy</a>.
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      )}
    </div>
  );
}
