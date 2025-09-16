import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaLanguage, FaHandshake, FaGlobe, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import TranslationDemo from '../components/TranslationDemo';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const textsToType = [
    'CUSTOMERS',
    'BUSINESS',
    'BRAND',
    'PARTNERS'
  ];
  
  useEffect(() => {
    const currentText = textsToType[currentTextIndex];
    
    const type = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(50); // Faster when deleting
        
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % textsToType.length);
          setTypingSpeed(150);
        }
      } else {
        // Typing text
        setTypedText(currentText.substring(0, typedText.length + 1));
        
        if (typedText === currentText) {
          // Pause at the end of typing before deleting
          setTypingSpeed(2000);
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(50);
          }, 2000);
        }
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentTextIndex, isDeleting, typingSpeed, textsToType]);
  return (
    <div className="min-h-screen">
      <Head>
        <title>Transluga - Professional Translation & Interpretation Services</title>
        <meta name="description" content="Professional translation and interpretation services for businesses and individuals. Get accurate translations in multiple languages." />
        <link rel="icon" href="/transLuga/images/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row">
          {/* Left side - Text Content */}
          <div className="md:w-1/2 text-white md:pr-8">
            <div className="mb-8 bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-sm shadow-xl">
              <div className="mb-2">
                <h1 className="text-4xl md:text-5xl font-bold flex flex-col md:flex-row md:items-center">
                  <span className="mr-2">YOUR</span> 
                  <span className="text-secondary-400 min-h-[3rem] md:min-h-0 inline-block">
                    {typedText}
                    <span className="animate-pulse ml-1">|</span>
                  </span>
                </h1>
              </div>
              <div className="border-l-4 border-secondary-500 pl-4 my-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  COULD BE FROM ANYWHERE.
                </h2>
                <h3 className="text-xl md:text-2xl font-bold mt-3 text-secondary-300">
                  DO YOU SPEAK THEIR LANGUAGE?
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/services" className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  DISCOVER
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side will be empty to show the background image */}
          <div className="md:w-1/2"></div>
        </div>
      </section>
      
      {/* Action Bar */}
      <section className="bg-secondary-600 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <Link href="/contact" className="py-4 px-6 text-center text-xl font-bold hover:bg-secondary-700 transition duration-300">
            Get a FREE Quote
          </Link>
          <Link href="/services" className="py-4 px-6 text-center text-xl font-bold bg-primary-800 hover:bg-primary-700 transition duration-300">
            Languages We Translate
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-6">
                "Our partnership with Transluga allowed us to scale up and do virtual application prep that led to over 2200 TPS applications being filed in Colorado in under 6 months - totally free to the applicants. The scale and speed of the project would not have been possible without Transluga's quick, accurate, and professional translations and we're grateful for their cooperation."
              </p>
              <p className="text-secondary-600 font-semibold">Brandon Roché, Roché Immigration, Denver, Colorado</p>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary-700"></div>
              <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
              <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
            </div>
          </div>
          
          {/* Service Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-secondary-500">
                <div className="text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-primary-700 text-xl font-bold mb-2">100% Human Translation</h3>
              <div className="w-12 h-1 bg-gray-300 mx-auto mb-4"></div>
              <p className="text-gray-600">Innovative processes and advanced tools ensure accurate translations delivered on time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-secondary-500">
                <div className="text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-primary-700 text-xl font-bold mb-2">Tailored Solutions</h3>
              <div className="w-12 h-1 bg-gray-300 mx-auto mb-4"></div>
              <p className="text-gray-600">Translation services customized to suit your specific needs, industry, and audience.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-secondary-500">
                <div className="text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-primary-700 text-xl font-bold mb-2">Client-Focused Approach</h3>
              <div className="w-12 h-1 bg-gray-300 mx-auto mb-4"></div>
              <p className="text-gray-600">Every project is handled with care, ensuring a seamless experience and results that exceed expectations.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Translation Experts Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Your Translation Experts</h2>
          <h3 className="text-xl md:text-2xl text-center mb-8">Your Trusted African Language Translation Specialists</h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">
              Transluga has been a leader in the translation industry for years, specializing in African languages. Our office in Lilongwe, Malawi allows us to serve clients across industries with precise, culturally adapted language solutions. A dedicated team of project managers and a global network of linguists deliver sustainable human translation services in over 100 languages and dialects.
            </p>
            <p className="mb-4">
              We offer a comprehensive range of services, including translation, interpretation, cultural branding, graphic services, voice-overs, subtitling, and academic credentialing. Our expertise spans various industries, such as advertising and marketing, arts and academia, corporate communications, cosmetics and beauty products, financial services, government, NGOs, legal, management consulting, media and technology, medical and medical devices, and pharmaceuticals.
            </p>
            <p className="mb-8">
              Clients rely on us to bridge language gaps with precision and cultural awareness. Work with a trusted partner that helps businesses connect, expand, and communicate effectively. Reach out to Transluga for expert language solutions tailored to your needs.
            </p>
            
            <div className="text-center">
              <Link href="/our-work" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex">
              <div className="w-1/2">
                <div className="bg-blue-100 h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 p-6 bg-gray-50">
                <h3 className="text-secondary-600 text-xl font-bold mb-2">Interpretation Services</h3>
                <p className="text-gray-600 mb-4">Facilitate smooth communication in any setting with professional interpreters who deliver accurate and culturally appropriate language support.</p>
                <Link href="/services#interpretation" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded-sm text-sm transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="flex">
              <div className="w-1/2 p-6 bg-gray-50">
                <h3 className="text-secondary-600 text-xl font-bold mb-2">Cultural Branding Services</h3>
                <p className="text-gray-600 mb-4">Enhance your brand's global appeal with culturally relevant naming, logo development, and tailored marketing strategies.</p>
                <Link href="/services#cultural-branding" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded-sm text-sm transition duration-300">
                  Learn More
                </Link>
              </div>
              <div className="w-1/2">
                <div className="bg-orange-100 h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="flex">
              <div className="w-1/2">
                <div className="bg-purple-100 h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 p-6 bg-gray-50">
                <h3 className="text-secondary-600 text-xl font-bold mb-2">Voice Overs and Subtitling</h3>
                <p className="text-gray-600 mb-4">Bring your content to life with professional voice-over talents and accurate subtitles designed to engage diverse audiences.</p>
                <Link href="/services#voice-overs" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded-sm text-sm transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="flex">
              <div className="w-1/2 p-6 bg-gray-50">
                <h3 className="text-secondary-600 text-xl font-bold mb-2">Translation Agency</h3>
                <p className="text-gray-600 mb-4">Deliver precise and culturally accurate translations for documents, websites, and marketing materials across industries.</p>
                <Link href="/services#translation" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded-sm text-sm transition duration-300">
                  Learn More
                </Link>
              </div>
              <div className="w-1/2">
                <div className="bg-green-100 h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Translation Demo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Try Our Translation Tool</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Experience our translation capabilities with this interactive demo featuring some of our African language specialties.</p>
          
          <div className="max-w-3xl mx-auto">
            <TranslationDemo />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Transluga</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Expert Translators</h3>
              <p className="text-gray-600">Our team consists of certified professionals with expertise in various industries and languages.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Quick Turnaround</h3>
              <p className="text-gray-600">We deliver high-quality translations with fast turnaround times to meet your deadlines.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees, tailored to fit your budget and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free quote and consultation on your translation or interpretation needs.</p>
          <Link href="/contact" className="inline-block bg-white text-primary-800 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
