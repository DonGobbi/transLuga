import { useState } from 'react';

// Define language data for different regions
interface LanguageInfo {
  name: string;
  description: string;
  countries: string[];
  speakers?: string;
}

interface RegionData {
  id: string;
  name: string;
  languages: LanguageInfo[];
}

const regionData: RegionData[] = [
  {
    id: "east-africa",
    name: "East Africa",
    languages: [
      {
        name: "Swahili",
        description: "Widely spoken throughout East Africa, Swahili is a Bantu language with Arabic influence.",
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        speakers: "Over 100 million speakers"
      },
      {
        name: "Kinyarwanda",
        description: "The official language of Rwanda, closely related to Kirundi.",
        countries: ["Rwanda"],
        speakers: "About 12 million speakers"
      },
      {
        name: "Kirundi",
        description: "The official language of Burundi, mutually intelligible with Kinyarwanda.",
        countries: ["Burundi"],
        speakers: "About 9 million speakers"
      }
    ]
  },
  {
    id: "central-africa",
    name: "Central Africa",
    languages: [
      {
        name: "Lingala",
        description: "A Bantu language spoken throughout the northwestern part of the DRC and a large part of the Republic of Congo.",
        countries: ["DRC", "Republic of Congo", "Central African Republic", "Angola"],
        speakers: "About 40 million speakers"
      },
      {
        name: "Kikongo",
        description: "A Bantu language spoken by the Kongo people living in the DRC, Angola and the Republic of Congo.",
        countries: ["DRC", "Angola", "Republic of Congo"],
        speakers: "About 8 million speakers"
      }
    ]
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    languages: [
      {
        name: "Chichewa",
        description: "Also known as Nyanja, it's the national language of Malawi and is also spoken in neighboring countries.",
        countries: ["Malawi", "Zambia", "Mozambique", "Zimbabwe"],
        speakers: "About 12 million speakers"
      },
      {
        name: "Zulu",
        description: "One of South Africa's 11 official languages and the most widely spoken home language in the country.",
        countries: ["South Africa", "Lesotho", "Eswatini", "Zimbabwe"],
        speakers: "About 12 million speakers"
      },
      {
        name: "Xhosa",
        description: "The second most common home language in South Africa, known for its click consonants.",
        countries: ["South Africa"],
        speakers: "About 8 million speakers"
      }
    ]
  },
  {
    id: "west-africa",
    name: "West Africa",
    languages: [
      {
        name: "Yoruba",
        description: "A language spoken in West Africa, primarily in Nigeria and Benin.",
        countries: ["Nigeria", "Benin", "Togo"],
        speakers: "About 40 million speakers"
      },
      {
        name: "Igbo",
        description: "One of the principal languages of Nigeria, spoken by the Igbo people.",
        countries: ["Nigeria"],
        speakers: "About 24 million speakers"
      },
      {
        name: "Hausa",
        description: "The Chadic language with the largest number of speakers, spoken as a first language by the Hausa people.",
        countries: ["Nigeria", "Niger", "Chad", "Ghana"],
        speakers: "About 70 million speakers"
      }
    ]
  },
  {
    id: "north-africa",
    name: "North Africa",
    languages: [
      {
        name: "Arabic",
        description: "Various dialects of Arabic are spoken across North Africa.",
        countries: ["Egypt", "Libya", "Tunisia", "Algeria", "Morocco"],
        speakers: "Over 300 million speakers (worldwide)"
      },
      {
        name: "Berber",
        description: "A group of closely related languages spoken by the Berber people across North Africa.",
        countries: ["Morocco", "Algeria", "Tunisia", "Libya"],
        speakers: "About 30 million speakers"
      }
    ]
  }
];

export default function LanguageMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  const handleRegionHover = (regionId: string, event: React.MouseEvent) => {
    setActiveRegion(regionId);
    setShowTooltip(true);
    
    // Calculate position for tooltip
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };
  
  const handleRegionLeave = () => {
    setShowTooltip(false);
  };
  
  const getRegionColor = (regionId: string) => {
    return activeRegion === regionId ? "#0369a1" : "#94a3b8";
  };
  
  const getActiveRegionData = () => {
    return regionData.find(region => region.id === activeRegion);
  };
  
  return (
    <div className="relative">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-primary-800 mb-2">Our African Language Coverage</h3>
        <p className="text-gray-600">Hover over regions to see languages we specialize in</p>
      </div>
      
      <div className="relative w-full max-w-3xl mx-auto">
        {/* SVG Map of Africa with interactive regions */}
        <svg viewBox="0 0 800 900" className="w-full h-auto">
          {/* Map outline */}
          <path 
            d="M400,50 C250,100 100,250 150,400 C200,550 150,700 250,800 C350,900 450,900 550,800 C650,700 600,550 650,400 C700,250 550,100 400,50 Z" 
            fill="#f1f5f9" 
            stroke="#e2e8f0" 
            strokeWidth="2"
          />
          
          {/* North Africa */}
          <path 
            id="north-africa"
            d="M250,150 C300,120 500,120 550,150 C600,200 550,300 500,350 C450,375 350,375 300,350 C250,300 200,200 250,150 Z" 
            fill={getRegionColor("north-africa")} 
            opacity="0.7"
            stroke="#fff" 
            strokeWidth="1"
            onMouseEnter={(e) => handleRegionHover("north-africa", e)}
            onMouseLeave={handleRegionLeave}
          />
          
          {/* West Africa */}
          <path 
            id="west-africa"
            d="M150,400 C200,350 300,350 350,375 C375,425 375,475 350,525 C300,550 200,550 175,500 C150,450 125,425 150,400 Z" 
            fill={getRegionColor("west-africa")} 
            opacity="0.7"
            stroke="#fff" 
            strokeWidth="1"
            onMouseEnter={(e) => handleRegionHover("west-africa", e)}
            onMouseLeave={handleRegionLeave}
          />
          
          {/* Central Africa */}
          <path 
            id="central-africa"
            d="M350,375 C400,350 500,350 550,375 C575,425 575,475 550,525 C500,550 400,550 350,525 C325,475 325,425 350,375 Z" 
            fill={getRegionColor("central-africa")} 
            opacity="0.7"
            stroke="#fff" 
            strokeWidth="1"
            onMouseEnter={(e) => handleRegionHover("central-africa", e)}
            onMouseLeave={handleRegionLeave}
          />
          
          {/* East Africa */}
          <path 
            id="east-africa"
            d="M550,375 C600,350 650,400 650,450 C650,500 600,550 550,525 C525,475 525,425 550,375 Z" 
            fill={getRegionColor("east-africa")} 
            opacity="0.7"
            stroke="#fff" 
            strokeWidth="1"
            onMouseEnter={(e) => handleRegionHover("east-africa", e)}
            onMouseLeave={handleRegionLeave}
          />
          
          {/* Southern Africa */}
          <path 
            id="southern-africa"
            d="M350,525 C400,550 500,550 550,525 C600,550 600,650 550,700 C500,750 400,750 350,700 C300,650 300,550 350,525 Z" 
            fill={getRegionColor("southern-africa")} 
            opacity="0.7"
            stroke="#fff" 
            strokeWidth="1"
            onMouseEnter={(e) => handleRegionHover("southern-africa", e)}
            onMouseLeave={handleRegionLeave}
          />
          
          {/* Region Labels */}
          <text x="400" y="200" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="20">North Africa</text>
          <text x="250" y="450" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="20">West Africa</text>
          <text x="450" y="450" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="20">Central Africa</text>
          <text x="600" y="450" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="20">East Africa</text>
          <text x="450" y="650" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="20">Southern Africa</text>
        </svg>
      </div>
      
      {/* Language Information Display */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        {activeRegion ? (
          <div>
            <h4 className="text-xl font-bold text-primary-800 mb-4">{getActiveRegionData()?.name} Languages</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {getActiveRegionData()?.languages.map((language, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold text-lg text-secondary-700 mb-2">{language.name}</h5>
                  <p className="text-gray-600 mb-3">{language.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {language.countries.map((country, i) => (
                      <span key={i} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">{country}</span>
                    ))}
                  </div>
                  {language.speakers && (
                    <p className="text-sm text-gray-500">{language.speakers}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>Hover over a region on the map to see languages we support in that area.</p>
          </div>
        )}
      </div>
    </div>
  );
}
