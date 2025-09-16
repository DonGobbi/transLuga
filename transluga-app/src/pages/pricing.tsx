import Head from 'next/head';
import Link from 'next/link';
import { FaCheck, FaArrowRight, FaGlobe, FaLanguage, FaFileAlt, FaHeadset, FaStar } from 'react-icons/fa';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Standard',
      description: 'For small translation needs',
      price: '$0.10',
      unit: 'per word',
      icon: <FaFileAlt className="text-4xl text-primary-600" />,
      features: [
        'Document translation',
        'Up to 3 languages',
        'Standard delivery time',
        'Email support',
        'Basic quality assurance',
      ],
      africanLanguageNote: 'Standard rates for common African languages',
      recommended: false,
      buttonText: 'Get Started',
      buttonLink: '/contact',
      color: 'primary',
    },
    {
      name: 'Professional',
      description: 'For businesses and organizations',
      price: '$0.15',
      unit: 'per word',
      icon: <FaLanguage className="text-4xl text-secondary-600" />,
      features: [
        'Document translation',
        'Website localization',
        'African language expertise',
        'Cultural context adaptation',
        'Faster delivery time',
        'Email and phone support',
        'Dedicated project manager',
      ],
      africanLanguageNote: 'Specialized African language translators with cultural expertise',
      recommended: true,
      buttonText: 'Get Started',
      buttonLink: '/contact',
      color: 'secondary',
    },
    {
      name: 'Enterprise',
      description: 'For large-scale projects',
      price: 'Custom',
      unit: 'pricing',
      icon: <FaGlobe className="text-4xl text-primary-600" />,
      features: [
        'All translation services',
        'Unlimited languages',
        'Priority delivery',
        'Dedicated African language team',
        '24/7 support',
        'API integration',
        'Custom solutions',
      ],
      africanLanguageNote: 'Full access to our network of specialized African language translators',
      recommended: false,
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      color: 'primary',
    },
  ];
  
  const africanLanguagePricing = [
    { language: 'Swahili', standardRate: '$0.12', professionalRate: '$0.18', enterpriseRate: 'Custom' },
    { language: 'Lingala', standardRate: '$0.14', professionalRate: '$0.20', enterpriseRate: 'Custom' },
    { language: 'Chichewa', standardRate: '$0.14', professionalRate: '$0.20', enterpriseRate: 'Custom' },
    { language: 'Kinyarwanda', standardRate: '$0.14', professionalRate: '$0.20', enterpriseRate: 'Custom' },
    { language: 'Kirundi', standardRate: '$0.14', professionalRate: '$0.20', enterpriseRate: 'Custom' },
    { language: 'Zulu', standardRate: '$0.12', professionalRate: '$0.18', enterpriseRate: 'Custom' },
  ];

  const interpretationPricing = [
    {
      service: 'Consecutive Interpretation',
      price: '$75 - $150',
      unit: 'per hour',
      description: 'Interpreter speaks after the speaker has finished, ideal for small meetings and interviews.',
    },
    {
      service: 'Simultaneous Interpretation',
      price: '$100 - $200',
      unit: 'per hour',
      description: 'Real-time interpretation as the speaker talks, perfect for conferences and large events.',
    },
    {
      service: 'Phone Interpretation',
      price: '$2 - $4',
      unit: 'per minute',
      description: 'On-demand phone interpretation services for quick communication needs.',
    },
    {
      service: 'Video Remote Interpretation',
      price: '$3 - $5',
      unit: 'per minute',
      description: 'Video-based interpretation services for virtual meetings and events.',
    },
  ];

  const additionalServices = [
    {
      service: 'Certified Translation',
      price: '$0.20 - $0.30',
      unit: 'per word',
      description: 'Official certified translations for legal, immigration, and academic purposes.',
    },
    {
      service: 'Rush Service',
      price: '+25%',
      unit: 'surcharge',
      description: 'Expedited translation service for urgent projects with tight deadlines.',
    },
    {
      service: 'Desktop Publishing',
      price: '$50 - $75',
      unit: 'per hour',
      description: 'Formatting and layout services to maintain the original document design.',
    },
    {
      service: 'Transcription',
      price: '$1.50 - $3',
      unit: 'per minute',
      description: 'Converting audio or video content into written text.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Pricing | Transluga</title>
        <meta name="description" content="View our transparent pricing for translation and interpretation services. Get a custom quote for your specific needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl mb-10">
              Competitive rates for our professional translation and interpretation services, with special expertise in African languages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#translation-pricing" className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Translation Pricing <FaArrowRight className="ml-2" />
              </Link>
              <Link href="#interpretation-pricing" className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 flex items-center">
                Interpretation Rates <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Translation Pricing Plans */}
      <section id="translation-pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Our Packages</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Translation Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our standard pricing plans or contact us for a custom quote tailored to your specific requirements. We offer specialized rates for African languages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${
                  plan.recommended 
                    ? 'border-secondary-500' 
                    : 'border-primary-500'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.recommended && (
                  <div className="bg-secondary-500 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <div className={`${plan.recommended ? 'text-secondary-600' : 'text-primary-600'}`}>
                      {plan.icon}
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600"> {plan.unit}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`p-1 rounded-full ${plan.recommended ? 'bg-secondary-100' : 'bg-primary-100'} mr-3 flex-shrink-0 mt-0.5`}>
                          <FaCheck className={`h-3 w-3 ${plan.recommended ? 'text-secondary-600' : 'text-primary-600'}`} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 italic">
                      <strong>African Languages:</strong> {plan.africanLanguageNote}
                    </p>
                  </div>
                  
                  <Link
                    href={plan.buttonLink}
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-secondary-600 hover:bg-secondary-700 text-white'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* African Language Pricing */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-6">African Language Specialization</h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              As African language specialists, we offer competitive rates for these languages. Below are our standard rates for some of our most requested African languages.
            </p>
            
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-left font-bold text-gray-700">Language</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Standard Rate</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Professional Rate</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Enterprise Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {africanLanguagePricing.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-4 px-6 font-medium flex items-center">
                        <FaGlobe className="text-primary-500 mr-2" /> {item.language}
                      </td>
                      <td className="py-4 px-6 text-center">{item.standardRate}</td>
                      <td className="py-4 px-6 text-center font-medium text-secondary-700">{item.professionalRate}</td>
                      <td className="py-4 px-6 text-center">{item.enterpriseRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">* Rates may vary based on complexity, technical content, and urgency.</p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need a custom solution or pricing for other African languages? We support many more languages than listed above.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow hover:shadow-lg"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Interpretation Pricing */}
      <section id="interpretation-pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Our Rates</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interpretation Services</h2>
            <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
              Our interpretation services are available for various settings and requirements, with specialized expertise in African languages.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-secondary-100 text-secondary-800 px-4 py-2 rounded-lg">
                <FaStar className="mr-2 text-secondary-600" /> 
                <span className="font-medium">Premium rates apply for rare African languages</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-primary-700 to-primary-800 text-white">
                  <th className="py-4 px-6 text-left font-bold">Service</th>
                  <th className="py-4 px-6 text-left font-bold">Price</th>
                  <th className="py-4 px-6 text-left font-bold">Description</th>
                  <th className="py-4 px-6 text-left font-bold">African Language Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-primary-100 mr-3">
                        <FaHeadset className="text-primary-600" />
                      </div>
                      Consecutive Interpretation
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold">$75 - $150</span>
                    <span className="text-gray-600"> per hour</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Interpreter speaks after the speaker has finished, ideal for small meetings and interviews.</td>
                  <td className="py-4 px-6 text-gray-600">+25% for specialized African languages</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-secondary-100 mr-3">
                        <FaHeadset className="text-secondary-600" />
                      </div>
                      Simultaneous Interpretation
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold">$100 - $200</span>
                    <span className="text-gray-600"> per hour</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Real-time interpretation as the speaker talks, perfect for conferences and large events.</td>
                  <td className="py-4 px-6 text-gray-600">+30% for specialized African languages</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-primary-100 mr-3">
                        <FaHeadset className="text-primary-600" />
                      </div>
                      Phone Interpretation
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold">$2 - $4</span>
                    <span className="text-gray-600"> per minute</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">On-demand phone interpretation services for quick communication needs.</td>
                  <td className="py-4 px-6 text-gray-600">+20% for specialized African languages</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-secondary-100 mr-3">
                        <FaHeadset className="text-secondary-600" />
                      </div>
                      Video Remote Interpretation
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold">$3 - $5</span>
                    <span className="text-gray-600"> per minute</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">Video-based interpretation services for virtual meetings and events.</td>
                  <td className="py-4 px-6 text-gray-600">+25% for specialized African languages</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">African Language Interpretation</h3>
            <p className="text-gray-700 mb-4">
              Our specialized African language interpreters bring deep cultural understanding and linguistic expertise to every interpretation session. We offer interpretation services for a wide range of African languages, including but not limited to Swahili, Lingala, Chichewa, Kinyarwanda, Kirundi, and Zulu.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Minimum booking times apply (2 hours for in-person, 30 minutes for remote). Travel expenses may be additional for on-site interpretation. For rare African languages or dialects, please contact us for availability and custom pricing.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow hover:shadow-lg"
            >
              Book an Interpreter
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Extra Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto">
              Complementary services to enhance your translation and interpretation experience, with specialized options for African language content.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-primary-800">Certified Translation</h3>
                  <div className="bg-primary-100 p-2 rounded-full">
                    <FaFileAlt className="text-primary-600" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Official certified translations for legal, immigration, and academic purposes.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Rate:</span>
                    <span className="font-bold">$0.20 - $0.30 <span className="text-gray-600 font-normal">per word</span></span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">African Languages:</span>
                    <span className="font-bold">$0.25 - $0.35 <span className="text-gray-600 font-normal">per word</span></span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">Accepted by government agencies and institutions worldwide</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-primary-800">Rush Service</h3>
                  <div className="bg-secondary-100 p-2 rounded-full">
                    <FaArrowRight className="text-secondary-600" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Expedited translation service for urgent projects with tight deadlines.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Languages:</span>
                    <span className="font-bold">+25% <span className="text-gray-600 font-normal">surcharge</span></span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">African Languages:</span>
                    <span className="font-bold">+30% <span className="text-gray-600 font-normal">surcharge</span></span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">Same-day service available for select languages</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-primary-800">Desktop Publishing</h3>
                  <div className="bg-primary-100 p-2 rounded-full">
                    <FaFileAlt className="text-primary-600" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Formatting and layout services to maintain the original document design.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Rate:</span>
                    <span className="font-bold">$50 - $75 <span className="text-gray-600 font-normal">per hour</span></span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">Support for all major file formats</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-primary-800">Transcription</h3>
                  <div className="bg-secondary-100 p-2 rounded-full">
                    <FaHeadset className="text-secondary-600" />
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Converting audio or video content into written text.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Languages:</span>
                    <span className="font-bold">$1.50 - $3 <span className="text-gray-600 font-normal">per minute</span></span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">African Languages:</span>
                    <span className="font-bold">$2 - $4 <span className="text-gray-600 font-normal">per minute</span></span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">Specialized in African dialects and accents</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow hover:shadow-lg"
            >
              Inquire About Additional Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Questions & Answers</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our translation and interpretation services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">How do you calculate the cost of translation?</h3>
              <p className="text-gray-700">
                Translation costs are typically calculated based on the number of words in the source document. We also consider factors such as language pair (with specialized rates for African languages), technical complexity, formatting requirements, and delivery timeline.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">What makes your African language services unique?</h3>
              <p className="text-gray-700">
                Our translators and interpreters are native speakers of African languages with deep cultural understanding. We specialize in languages that many translation services don't offer, ensuring not just linguistic accuracy but cultural relevance for your content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Do you offer volume discounts?</h3>
              <p className="text-gray-700">
                Yes, we offer discounts for large volume projects and ongoing translation needs. For projects over 10,000 words, we typically provide a 10-15% discount. Contact us for a custom quote based on your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">What is the minimum charge for translation services?</h3>
              <p className="text-gray-700">
                We have a minimum charge of $50 for standard translation projects and $75 for African language translation projects to cover administrative costs and project setup.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">How quickly can you deliver translations?</h3>
              <p className="text-gray-700">
                Our standard delivery time depends on the volume and complexity of the content. For standard languages, we typically deliver 2,000-3,000 words per business day. For African languages, the rate is typically 1,500-2,500 words per day. For urgent needs, we offer rush services at an additional cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Do you provide certified translations?</h3>
              <p className="text-gray-700">
                Yes, we provide certified translations for legal, immigration, and academic purposes in both standard and African languages. These translations come with an official certification statement and are accepted by government agencies and institutions worldwide.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions? We're here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and consultation on your translation or interpretation needs.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-800 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition duration-300">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
