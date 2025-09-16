import Head from 'next/head';
import Link from 'next/link';
import { FaLanguage, FaHandshake, FaGlobe, FaPhoneAlt, FaFileAlt, FaVideo, FaArrowRight, FaCheck, FaMapMarkerAlt, FaClosedCaptioning, FaFilm } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 'document-translation',
      icon: <FaFileAlt className="text-4xl text-primary-600" />,
      title: 'Document Translation',
      description: 'Professional translation of documents, contracts, certificates, websites, and marketing materials. We ensure accuracy and cultural relevance in every translation.',
      features: [
        'Legal document translation',
        'Technical document translation',
        'Website and app localization',
        'Marketing material translation',
        'Academic document translation'
      ]
    },
    {
      id: 'interpretation',
      icon: <FaHandshake className="text-4xl text-primary-600" />,
      title: 'Interpretation Services',
      description: 'Professional interpreters for meetings, conferences, and events. We provide both simultaneous and consecutive interpretation services.',
      features: [
        'Conference interpretation',
        'Business meeting interpretation',
        'Legal interpretation',
        'Medical interpretation',
        'Community interpretation'
      ]
    },
    {
      id: 'localization',
      icon: <FaGlobe className="text-4xl text-primary-600" />,
      title: 'Localization',
      description: 'Adapt your content to specific regions and cultural contexts. We help you connect with your target audience in a culturally appropriate way.',
      features: [
        'Website localization',
        'Software localization',
        'Mobile app localization',
        'Marketing campaign localization',
        'Cultural consultation'
      ]
    },
    {
      id: 'phone-interpretation',
      icon: <FaPhoneAlt className="text-4xl text-primary-600" />,
      title: 'Phone Interpretation',
      description: 'On-demand phone interpretation services in multiple languages. Get connected with a professional interpreter within minutes.',
      features: [
        '24/7 availability',
        'Over 100 languages supported',
        'Pay-per-minute options',
        'Business account services',
        'Emergency services'
      ]
    },
    {
      id: 'certified-translation',
      icon: <FaLanguage className="text-4xl text-primary-600" />,
      title: 'Certified Translation',
      description: 'Official certified translations for legal, immigration, and academic purposes. Our certified translations are accepted by government agencies and institutions worldwide.',
      features: [
        'Birth certificate translation',
        'Marriage certificate translation',
        'Academic transcript translation',
        'Immigration document translation',
        'Court document translation'
      ]
    },
    {
      id: 'video-remote',
      icon: <FaVideo className="text-4xl text-primary-600" />,
      title: 'Video Remote Interpretation',
      description: 'Connect with professional interpreters via video conferencing for real-time interpretation services from anywhere in the world.',
      features: [
        'High-quality video connection',
        'Scheduled or on-demand services',
        'Multiple participant support',
        'Screen sharing capabilities',
        'Technical support included'
      ]
    },
    {
      id: 'subtitling',
      icon: <FaClosedCaptioning className="text-4xl text-primary-600" />,
      title: 'Subtitling & Captioning',
      description: 'Professional subtitling and captioning services for videos, films, documentaries, and corporate content with specialized expertise in African languages that preserve cultural nuances and context.',
      features: [
        'Accurate time-synced subtitles with cultural context preservation',
        'SDH (Subtitles for the Deaf and Hard of Hearing)',
        'African language subtitling expertise (Swahili, Lingala, Chichewa, etc.)',
        'Support for all major video formats (MP4, MOV, AVI, MKV)',
        'Fast turnaround options for urgent projects'
      ]
    },
    {
      id: 'audiovisual-translation',
      icon: <FaFilm className="text-4xl text-primary-600" />,
      title: 'Audiovisual Translation',
      description: 'Comprehensive audiovisual translation services including dubbing, voice-over, and subtitle creation for films, documentaries, e-learning materials, and corporate videos with authentic African language options.',
      features: [
        'Native African language voice talent selection',
        'Script adaptation that preserves cultural context and meaning',
        'Professional studio recording and audio engineering',
        'Specialized terminology expertise for medical, legal, and technical content',
        'Complete project management from translation to final delivery'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Our Services | Transluga</title>
        <meta name="description" content="Explore our professional translation and interpretation services including document translation, interpretation, localization, and more." />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl mb-10">
              We offer a comprehensive range of language services specializing in African languages to help you communicate effectively across languages and cultures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#document-translation" className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Document Translation <FaArrowRight className="ml-2" />
              </Link>
              <Link href="#interpretation" className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Interpretation Services <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Language Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our expert team provides professional language services with a special focus on African languages, ensuring accurate and culturally appropriate communication.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24 group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary-100 to-transparent opacity-70 -z-10"></div>
                  
                  <div className="bg-primary-100 p-4 rounded-full inline-block mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-primary-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="font-semibold mb-3 text-secondary-600">What we offer:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="h-5 w-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4">
                    <Link href="/contact" className="text-secondary-600 font-medium hover:text-secondary-800 inline-flex items-center group-hover:underline">
                      Request this service
                      <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages We Support</h2>
            <p className="text-gray-600">With expertise in over 100 languages, we specialize in African languages that are often overlooked by other translation services.</p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-xl font-bold text-primary-700 mb-6 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" /> Our African Language Specialties
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
              {[
                'Swahili', 'Lingala', 'Chichewa', 'Nyanja', 'Kirundi', 'Kinyarwanda',
                'Zulu', 'Xhosa', 'Afrikaans', 'Amharic', 'Yoruba', 'Igbo'
              ].map((language, index) => (
                <div key={index} className="bg-primary-50 p-4 rounded-lg shadow-sm text-center border-l-4 border-primary-600 hover:bg-primary-100 transition-colors duration-300">
                  <span className="font-medium text-primary-800">{language}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-700">Major World Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
                  'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi'
                ].map((language, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
                    {language}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-700">European Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Dutch', 'Swedish', 'Polish', 'Turkish', 'Greek', 'Czech',
                  'Norwegian', 'Finnish', 'Danish', 'Hungarian', 'Romanian', 'Bulgarian'
                ].map((language, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
                    {language}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-700">Asian Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Vietnamese', 'Thai', 'Malay', 'Indonesian', 'Tagalog', 'Nepali',
                  'Bengali', 'Urdu', 'Tamil', 'Telugu', 'Farsi', 'Hebrew'
                ].map((language, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see the language you need? We likely support it! Contact us for specific language requirements.
            </p>
            <Link href="/contact" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
              Ask About Your Language
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Translation Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a rigorous process to ensure the highest quality translations for your projects.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-800 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-2">Project Analysis</h3>
              <p className="text-gray-600">We analyze your content and requirements to determine the best approach.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-800 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-2">Translation</h3>
              <p className="text-gray-600">Our expert linguists translate your content with precision and cultural sensitivity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-800 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-2">Review & Editing</h3>
              <p className="text-gray-600">A second linguist reviews the translation for accuracy and consistency.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-800 font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Final quality checks ensure your translation meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Language Solution?</h2>
              <p className="text-xl opacity-90">
                We offer tailored language services to meet your specific needs, with expertise in African languages that other services may not provide.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <Link href="/contact" className="inline-block bg-white text-primary-800 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg">
                Get a FREE Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">How quickly can you complete my translation?</h3>
              <p className="text-gray-600">Turnaround times depend on the complexity and volume of your content. For standard documents, we typically deliver within 1-3 business days. For urgent requests, we offer expedited services at an additional cost.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you provide certified translations?</h3>
              <p className="text-gray-600">Yes, we provide certified translations for official documents such as birth certificates, marriage certificates, academic transcripts, and legal documents that are accepted by government agencies worldwide.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">What makes your African language services unique?</h3>
              <p className="text-gray-600">We specialize in African languages that many translation services don't offer. Our translators are native speakers with deep cultural understanding, ensuring not just linguistic accuracy but cultural relevance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">How do you ensure quality in your translations?</h3>
              <p className="text-gray-600">We follow a rigorous quality assurance process that includes translation by a native speaker, review by a second linguist, and final quality checks before delivery. All our translators are subject matter experts in their respective fields.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
