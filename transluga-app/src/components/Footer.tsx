import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLanguage } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Transluga</h3>
            <p className="mb-4 text-gray-300">
              Professional translation and interpretation services specializing in African languages to help you communicate effectively across languages and cultures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" title="Facebook">
                <FaFacebook className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" title="Twitter">
                <FaTwitter className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" title="LinkedIn">
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" title="Instagram">
                <FaInstagram className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#document-translation" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Document Translation
                </Link>
              </li>
              <li>
                <Link href="/services#interpretation" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Interpretation Services
                </Link>
              </li>
              <li>
                <Link href="/services#localization" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Localization
                </Link>
              </li>
              <li>
                <Link href="/services#subtitling" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Subtitling & Captioning
                </Link>
              </li>
              <li>
                <Link href="/services#audiovisual-translation" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Audiovisual Translation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 mr-2 text-primary-500" />
                <span className="text-gray-300">
                  Area 14, House Number 151<br />
                  Lilongwe, Malawi
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2 text-primary-500" />
                <span className="text-gray-300">+265 99 68 73 573</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-primary-500" />
                <span className="text-gray-300">info@transluga.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* African Languages Section */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <FaLanguage className="mr-2 text-primary-500" /> African Language Specialists
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {['Swahili', 'Lingala', 'Chichewa', 'Nyanja', 'Kirundi', 'Kinyarwanda', 'Zulu', 'Xhosa', 'Afrikaans', 'Amharic', 'Yoruba', 'Igbo'].map((lang, index) => (
              <div key={index} className="bg-secondary-800 px-3 py-2 rounded text-sm text-center">
                {lang}
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Transluga. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
