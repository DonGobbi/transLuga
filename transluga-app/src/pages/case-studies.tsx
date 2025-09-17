import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Case Studies | Transluga</title>
        <meta name="description" content="Explore our successful translation and interpretation projects across various industries. See how we've helped clients overcome language barriers." />
        <link rel="icon" href="/transLuga/images/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-xl mb-10">
              Explore how we've helped organizations overcome language barriers and achieve their global communication goals.
            </p>
            <Link href="/services" className="inline-flex items-center bg-white text-primary-800 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition duration-300">
              <FaArrowLeft className="mr-2" /> View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Translation Success Stories</h2>
            <p className="text-gray-600">
              At Transluga, we've helped businesses and organizations across various industries overcome language barriers and connect with diverse audiences. Browse our case studies to see how our translation and interpretation services have made a difference.
            </p>
          </div>
          
          {/* Case Studies Component */}
          <CaseStudies />
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Industry Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare & Medical</h3>
              <p className="text-gray-600 mb-4">
                We provide accurate translations of medical documents, patient materials, and research papers, ensuring precise terminology and cultural sensitivity.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Medical documentation</li>
                <li>• Patient education materials</li>
                <li>• Clinical trial documentation</li>
                <li>• Healthcare training materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Legal & Government</h3>
              <p className="text-gray-600 mb-4">
                Our certified translators specialize in legal terminology and documentation, ensuring accuracy and compliance with regulatory requirements.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Legal contracts and agreements</li>
                <li>• Immigration documents</li>
                <li>• Court interpretation</li>
                <li>• Government communications</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Business & Marketing</h3>
              <p className="text-gray-600 mb-4">
                We help businesses communicate effectively across cultures with translations that maintain brand voice and marketing impact.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Marketing materials</li>
                <li>• Website localization</li>
                <li>• Product documentation</li>
                <li>• Corporate communications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your translation needs and how we can help you achieve your communication goals.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-800 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition duration-300">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
