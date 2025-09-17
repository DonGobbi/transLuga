import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaGlobe, FaFileAlt, FaHandshake, FaUsers } from 'react-icons/fa';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  languages: string[];
  icon: JSX.Element;
  imageUrl?: string;
}

interface CaseStudiesProps {
  limit?: number;
}

export default function CaseStudies({ limit }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const caseStudies: CaseStudy[] = [
    {
      id: 'healthcare-translation',
      title: 'Healthcare Documentation Translation',
      client: 'International Medical NGO',
      industry: 'Healthcare',
      challenge: 'Needed to translate medical training materials into 5 African languages for healthcare workers in rural communities.',
      solution: 'Provided specialized medical translators with healthcare expertise to ensure accurate terminology and cultural relevance.',
      results: [
        'Successfully translated 500+ pages of medical documentation',
        'Trained 200+ healthcare workers across 5 countries',
        'Improved patient outcomes through better communication'
      ],
      languages: ['Swahili', 'Chichewa', 'Kinyarwanda', 'Lingala', 'Zulu'],
      icon: <FaFileAlt className="text-blue-600" />
    },
    {
      id: 'legal-interpretation',
      title: 'Legal Interpretation Services',
      client: 'International Human Rights Organization',
      industry: 'Legal',
      challenge: 'Required simultaneous interpretation for a high-profile human rights conference with participants from 12 African countries.',
      solution: 'Provided a team of certified interpreters specialized in legal terminology and human rights discourse.',
      results: [
        'Facilitated communication for 150+ participants',
        'Enabled successful negotiation of cross-border agreements',
        'Received 98% satisfaction rating from attendees'
      ],
      languages: ['English', 'French', 'Portuguese', 'Arabic', 'Swahili'],
      icon: <FaHandshake className="text-green-600" />
    },
    {
      id: 'website-localization',
      title: 'E-commerce Website Localization',
      client: 'Global Retail Brand',
      industry: 'E-commerce',
      challenge: 'Needed to localize their e-commerce platform for East African markets with culturally appropriate content.',
      solution: 'Comprehensive localization including translation, cultural adaptation, and UX modifications for local audiences.',
      results: [
        'Increased conversion rates by 45% in target markets',
        'Reduced customer support inquiries by 30%',
        'Expanded customer base in 3 new countries'
      ],
      languages: ['Swahili', 'Amharic', 'Somali'],
      icon: <FaGlobe className="text-purple-600" />
    },
    {
      id: 'community-outreach',
      title: 'Community Outreach Program',
      client: 'International Development Agency',
      industry: 'Non-profit',
      challenge: 'Needed to communicate agricultural education materials to rural communities speaking diverse languages.',
      solution: 'Created culturally adapted translations with visual aids and local terminology for maximum comprehension.',
      results: [
        'Reached 50,000+ farmers across 4 countries',
        'Improved crop yields by 25% through better education',
        'Created sustainable knowledge transfer systems'
      ],
      languages: ['Chichewa', 'Lingala', 'Kirundi', 'Kinyarwanda'],
      icon: <FaUsers className="text-orange-600" />
    }
  ];
  
  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry.toLowerCase() === activeTab);
  
  const displayedCaseStudies = limit 
    ? filteredCaseStudies.slice(0, limit) 
    : filteredCaseStudies;
  
  const uniqueIndustries = Array.from(new Set(caseStudies.map(study => study.industry.toLowerCase())));
  const industries = ['all', ...uniqueIndustries];
  
  return (
    <div className="w-full">
      {/* Industry Filter Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveTab(industry)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === industry
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {industry.charAt(0).toUpperCase() + industry.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {displayedCaseStudies.map((study) => (
          <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {study.icon}
                </div>
                <span className="text-sm font-medium text-gray-500">{study.industry}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary-800">{study.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">Client: {study.client}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                <p className="text-gray-600 text-sm">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">Results:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {study.languages.map((language, index) => (
                    <span key={index} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link (only shown when limit is provided) */}
      {limit && filteredCaseStudies.length > limit && (
        <div className="text-center mt-8">
          <Link href="/case-studies" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800">
            View all case studies <FaArrowRight className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
}
