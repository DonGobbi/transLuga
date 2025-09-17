import { FaPaperPlane } from 'react-icons/fa';

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
      
      {/* Pure HTML form that submits directly to Formspree */}
      <form action="https://formspree.io/f/xandgakg" method="POST" className="space-y-4">
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-1 ${textColorClass}`}>
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className={`w-full px-4 py-2 rounded-lg ${inputBgClass} ${inputTextClass} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              required
            />
          </div>
          <input type="hidden" name="message" value="Newsletter subscription" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
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
          className={`w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
        >
          <FaPaperPlane className="mr-2" /> {buttonText}
        </button>
      </form>
    </div>
  );
}
