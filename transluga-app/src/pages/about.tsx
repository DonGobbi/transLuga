import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaAward, FaUsers, FaGlobe, FaMapMarkerAlt, FaLanguage, FaHandshake, FaPhoneAlt, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import LanguageMap from '../components/LanguageMap';

export default function About() {
  const teamMembers = [
    {
      name: 'Don Nshombo',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in the translation industry, Don founded Transluga with a vision to break language barriers and connect people across cultures, with a special focus on African languages.',
      languages: ['Swahili', 'Lingala', 'French', 'English'],
      image: '/team-placeholder.jpg'
    },
    {
      name: 'Grace Daka',
      role: 'Head of Translation Services',
      bio: 'Grace oversees our translation department, ensuring quality and accuracy in every project. She is fluent in 6 languages including several African dialects and has a background in linguistics.',
      languages: ['Chichewa', 'Nyanja', 'English', 'Portuguese'],
      image: '/team-placeholder.jpg'
    },
    {
      name: 'Diane Mugoli',
      role: 'Lead Interpreter',
      bio: 'Diane specializes in simultaneous interpretation for high-profile events and conferences. She has interpreted for international organizations and government agencies across Africa and Europe.',
      languages: ['Kinyarwanda', 'Kirundi', 'French', 'English'],
      image: '/team-placeholder.jpg'
    },
    {
      name: 'Calvez Gobbi',
      role: 'Localization Specialist',
      bio: 'Calvez helps clients adapt their content to specific African cultural contexts. His expertise in cultural nuances ensures that your message resonates authentically with your target audience.',
      languages: ['Lingala', 'Swahili', 'French', 'English'],
      image: '/team-placeholder.jpg'
    }
  ];
  
  const testimonials = [
    {
      quote: "Transluga's expertise in African languages was invaluable for our expansion into East African markets. Their cultural insights helped us avoid potential missteps in our marketing materials.",
      author: "Maria Sanchez",
      company: "Global Reach Enterprises",
      image: "/team-placeholder.jpg"
    },
    {
      quote: "We needed urgent translation for a conference in Kinshasa, and Transluga delivered flawlessly. Their interpreters' knowledge of local dialects made all the difference.",
      author: "Jean-Pierre Mutombo",
      company: "International Aid Organization",
      image: "/team-placeholder.jpg"
    },
    {
      quote: "As a documentary filmmaker working across Africa, I rely on Transluga for accurate subtitling that preserves the authentic voice of my subjects. Their work is exceptional.",
      author: "Claire Thompson",
      company: "Horizon Documentaries",
      image: "/team-placeholder.jpg"
    }
  ];
  
  const africanLanguages = [
    { name: 'Swahili', countries: ['Tanzania', 'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'DRC'] },
    { name: 'Lingala', countries: ['DRC', 'Republic of Congo', 'Central African Republic', 'Angola'] },
    { name: 'Chichewa', countries: ['Malawi', 'Zambia', 'Mozambique', 'Zimbabwe'] },
    { name: 'Kinyarwanda', countries: ['Rwanda', 'Uganda', 'DRC', 'Tanzania'] },
    { name: 'Kirundi', countries: ['Burundi', 'Tanzania', 'Uganda', 'Rwanda'] },
    { name: 'Zulu', countries: ['South Africa', 'Lesotho', 'Eswatini', 'Zimbabwe'] }
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us | Transluga</title>
        <meta name="description" content="Learn about Transluga, our mission, values, and the team behind our professional translation and interpretation services." />
        <link rel="icon" href="/transLuga/images/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Transluga</h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              We're African language specialists on a mission to break language barriers and connect people across cultures through professional translation and interpretation services.
            </p>
            <div className="mt-8">
              <p className="text-white text-sm mb-3">Some of our supported languages:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {/* African Languages */}
                {['Swahili', 'Lingala', 'Chichewa', 'Nyanja', 'Kirundi', 'Kinyarwanda'].map((lang, index) => (
                  <span key={`african-${index}`} className="bg-secondary-500 bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium border border-secondary-300">
                    {lang}
                  </span>
                ))}
                {/* World Languages */}
                {['English', 'French', 'Spanish', 'Portuguese', 'Arabic', 'Chinese'].map((lang, index) => (
                  <span key={`world-${index}`} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
              <Link href="#language-expertise" className="text-white underline hover:text-secondary-300 text-sm inline-flex items-center">
                View all our language capabilities <FaArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Our Journey</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2018, Transluga began with a clear vision: to bridge communication gaps for African languages that are often overlooked by mainstream translation services. What started as a small team of passionate linguists from the African diaspora has grown into a global network of professional translators and interpreters.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our founder, Don Nshombo, recognized the need for high-quality, culturally sensitive translation services for African languages in an increasingly connected world. With his background in linguistics and deep cultural understanding of Central and East Africa, he assembled a team of experts who share his passion for languages and cross-cultural communication.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, Transluga serves clients from various industries around the world, providing accurate translations and interpretation services that help them reach new markets and connect with diverse African audiences. Our specialization in languages like Swahili, Lingala, Chichewa, and Kinyarwanda sets us apart in the translation industry.
              </p>
              <Link href="/contact" className="inline-flex items-center text-secondary-600 font-medium hover:text-secondary-800 group">
                Work with us <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-100 rounded-lg z-0"></div>
              <div className="bg-white p-4 rounded-lg shadow-lg relative z-10">
                <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded overflow-hidden">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-10"></div>
                    <div className="relative z-10 text-center">
                      <FaLanguage className="text-6xl text-primary-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Bridging cultures through language</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="text-3xl font-bold text-primary-600">15+</div>
                    <p className="text-sm text-gray-600">African languages</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="text-3xl font-bold text-primary-600">5+</div>
                    <p className="text-sm text-gray-600">Years of expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We're dedicated to preserving the richness and nuance of African languages while facilitating clear communication across cultures.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To break language barriers and facilitate clear communication across cultures, with a special focus on African languages that are often underrepresented in the translation industry, enabling businesses and individuals to connect with diverse African audiences authentically and effectively.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start bg-primary-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-primary-600" />
                  </div>
                  <p className="text-gray-700">Providing accurate translations that preserve cultural context</p>
                </div>
                <div className="flex items-start bg-primary-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-primary-600" />
                  </div>
                  <p className="text-gray-700">Helping clients connect with African markets and audiences</p>
                </div>
                <div className="flex items-start bg-primary-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-primary-600" />
                  </div>
                  <p className="text-gray-700">Promoting African languages and cultural understanding</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary-500 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary-800">Our Values</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                    <FaAward className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">African Expertise</h4>
                    <p className="text-gray-700">We specialize in African languages and cultures, offering insights that general translation services cannot provide.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                    <FaUsers className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Cultural Authenticity</h4>
                    <p className="text-gray-700">Our translators are native speakers who understand the cultural nuances and context of both source and target languages.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                    <FaGlobe className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Global Perspective</h4>
                    <p className="text-gray-700">While specializing in African languages, we maintain a global outlook that helps bridge diverse cultures effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Our Experts</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our team of language experts brings deep cultural knowledge and professional expertise to every project.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-primary-700 to-primary-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-white text-center z-10 px-4">
                    <FaUsers className="text-5xl mx-auto mb-3 text-white opacity-80" />
                    <p className="font-medium">Language Expert</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((lang, i) => (
                        <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* African Language Expertise */}
      <section id="language-expertise" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">African Language Specialists</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our specialized knowledge of African languages and cultures sets us apart in the translation industry.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 border-b-4 border-primary-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <span className="text-3xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-bold mb-3">African Languages</h3>
              <p className="text-gray-700">We specialize in African languages that are often overlooked by mainstream translation services.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 border-b-4 border-secondary-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700 mb-6 group-hover:bg-secondary-200 transition-colors duration-300">
                <span className="text-3xl font-bold">20+</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Native Translators</h3>
              <p className="text-gray-700">Our team includes native speakers of various African languages with deep cultural knowledge.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 border-b-4 border-primary-600">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <span className="text-3xl font-bold">98%</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Satisfaction</h3>
              <p className="text-gray-700">Our commitment to quality and cultural accuracy results in consistently high client satisfaction.</p>
            </div>
          </div>
          
          {/* Interactive Language Map */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Interactive African Language Map</h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Explore the diverse African languages we specialize in by hovering over different regions of the continent.
            </p>
            <LanguageMap />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Languages We Specialize In</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {africanLanguages.map((lang, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors duration-300">
                  <h4 className="font-bold text-lg mb-2 text-primary-700 flex items-center">
                    <FaGlobe className="mr-2 text-primary-500" /> {lang.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Spoken in:</p>
                  <div className="flex flex-wrap gap-1">
                    {lang.countries.map((country, i) => (
                      <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded">{country}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg text-primary-800 font-medium mb-4">Client Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Hear from organizations that have benefited from our African language expertise.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute top-4 left-4 text-primary-200">
                  <FaQuoteLeft className="text-4xl opacity-30" />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-700 italic mb-6 pt-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-gray-500 font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
              Become Our Client
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect Across Languages?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you communicate effectively with African audiences through our specialized translation and interpretation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
