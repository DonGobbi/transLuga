import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobe, FaLanguage, FaArrowRight, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    sourceLanguage: '',
    targetLanguage: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    // For now, we'll just simulate a successful submission
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been received. We will contact you shortly.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        sourceLanguage: '',
        targetLanguage: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error submitting your request. Please try again.',
      });
    }
  };

  const services = [
    'Document Translation',
    'Interpretation Services',
    'Localization',
    'Phone Interpretation',
    'Certified Translation',
    'Video Remote Interpretation',
    'Subtitling & Captioning',
    'Audiovisual Translation',
    'African Language Services',
    'Other',
  ];

  // Standard languages
  const standardLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Russian',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Hindi',
  ];
  
  // African languages - our specialization
  const africanLanguages = [
    'Swahili',
    'Lingala',
    'Chichewa',
    'Nyanja',
    'Kirundi',
    'Kinyarwanda',
    'Zulu',
    'Xhosa',
    'Afrikaans',
    'Amharic',
    'Yoruba',
    'Igbo',
  ];
  
  // All languages for the dropdown
  const languages = [
    ...standardLanguages,
    ...africanLanguages,
    'Other',
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact Us | Transluga</title>
        <meta name="description" content="Contact Transluga for professional translation and interpretation services. Request a quote or get in touch with our team." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-8">
              Have a question or need a quote? Our team of language experts, including African language specialists, is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#quote-form" className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Request a Quote <FaArrowRight className="ml-2" />
              </a>
              <a href="tel:+265996873573" className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                <FaPhone className="mr-2" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-800">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-primary-600 h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-gray-600">Area 14, House Number 151, Lilongwe, Malawi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary-100 p-3 rounded-full mr-4">
                      <FaPhone className="text-secondary-600 h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-gray-600">+265 99 68 73 573</p>
                      <p className="text-sm text-gray-500 mt-1">Available for African language inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-primary-600 h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <a href="mailto:info@transluga.com" className="text-secondary-600 hover:underline">info@transluga.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary-100 p-3 rounded-full mr-4">
                      <FaClock className="text-secondary-600 h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600">Saturday: 10am - 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FaLanguage className="text-primary-600 mr-2" /> African Language Specialists
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team includes native speakers of Swahili, Lingala, Chichewa, and many other African languages.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Swahili', 'Lingala', 'Chichewa'].map((lang, i) => (
                      <span key={i} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">{lang}</span>
                    ))}
                    <span className="bg-secondary-50 text-secondary-700 text-xs px-2 py-1 rounded-full">+10 more</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="quote-form" className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary-800">Request a Quote</h2>
                <div className="bg-secondary-100 text-secondary-800 text-sm px-4 py-1 rounded-full">
                  African Language Specialists Available
                </div>
              </div>
              
              {formStatus.submitted ? (
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
              ) : formStatus.error ? (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">{formStatus.message}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                      required
                    >
                      <option value="">Select a service</option>
                      <optgroup label="Translation Services">
                        <option value="Document Translation">Document Translation</option>
                        <option value="Certified Translation">Certified Translation</option>
                        <option value="Website Localization">Website Localization</option>
                      </optgroup>
                      <optgroup label="Interpretation Services">
                        <option value="Interpretation Services">Interpretation Services</option>
                        <option value="Phone Interpretation">Phone Interpretation</option>
                        <option value="Video Remote Interpretation">Video Remote Interpretation</option>
                      </optgroup>
                      <optgroup label="Media Services">
                        <option value="Subtitling & Captioning">Subtitling & Captioning</option>
                        <option value="Audiovisual Translation">Audiovisual Translation</option>
                      </optgroup>
                      <optgroup label="Specialized Services">
                        <option value="African Language Services">African Language Services</option>
                        <option value="Other">Other Services</option>
                      </optgroup>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="sourceLanguage" className="block text-gray-700 font-medium mb-2">
                      Source Language *
                    </label>
                    <select
                      id="sourceLanguage"
                      name="sourceLanguage"
                      value={formData.sourceLanguage}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select source language</option>
                      <optgroup label="Standard Languages">
                        {standardLanguages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="African Languages (Our Specialty)">
                        {africanLanguages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="targetLanguage" className="block text-gray-700 font-medium mb-2">
                      Target Language *
                    </label>
                    <select
                      id="targetLanguage"
                      name="targetLanguage"
                      value={formData.targetLanguage}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select target language</option>
                      <optgroup label="Standard Languages">
                        {standardLanguages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="African Languages (Our Specialty)">
                        {africanLanguages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please describe your project, including word count, timeline, and any specific requirements. If you need African language services, please specify which languages."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                    <FaLanguage className="text-secondary-600 mr-2" /> African Language Expertise
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We specialize in African languages including Swahili, Lingala, Chichewa, and many others. 
                    Our native-speaking translators ensure accuracy and cultural relevance.
                  </p>
                </div>
                
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center"
                  >
                    Submit Request <FaArrowRight className="ml-2" />
                  </button>
                  <p className="ml-4 text-sm text-gray-500">* Required fields</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">African Language Specialists</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of professional translators and interpreters brings specialized expertise in African languages to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaLanguage className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Native Speakers</h3>
              <p className="text-gray-600">
                Our translators are native speakers of African languages with deep cultural understanding and linguistic expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaGlobe className="text-secondary-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Relevance</h3>
              <p className="text-gray-600">
                We ensure your message is not just translated but culturally adapted for your target African audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaCheck className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every translation undergoes a rigorous quality check to ensure accuracy, consistency, and cultural appropriateness.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-gray-600 mb-6">
                Visit our office to discuss your translation and interpretation needs in person. Our team of African language specialists is ready to assist you.
              </p>
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-primary-600" />
                </div>
                <p className="text-gray-700">
                  Area 14, House Number 151<br />
                  Lilongwe<br />
                  Malawi
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                Conveniently located in the heart of the city, our office is easily accessible by public transportation.
              </p>
              <Link href="/contact" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-800">
                Get Directions <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-10"></div>
                <div className="relative z-10 text-center p-6">
                  <FaMapMarkerAlt className="text-5xl text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Area 14, House Number 151, Lilongwe, Malawi</p>
                  <p className="text-sm text-gray-500 mt-2">In a production environment, this would be an interactive Google Maps integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
