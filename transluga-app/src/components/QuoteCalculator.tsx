import { useState, useEffect } from 'react';

// Sample pricing data
const basePrices = {
  general: 0.08, // per word
  legal: 0.12,
  medical: 0.14,
  technical: 0.13
};

const languageComplexity = {
  common: 1.0,  // English, French, Spanish
  uncommon: 1.3, // Swahili, Lingala
  rare: 1.5     // Chichewa, Kirundi
};

const timelineMultipliers = {
  standard: 1.0, // 3-5 business days
  rush: 1.5,     // 1-2 business days
  urgent: 2.0    // Same day
};

type DocumentType = 'general' | 'legal' | 'medical' | 'technical';
type LanguageType = 'common' | 'uncommon' | 'rare';
type TimelineType = 'standard' | 'rush' | 'urgent';

export default function QuoteCalculator() {
  const [documentType, setDocumentType] = useState<DocumentType>('general');
  const [sourceLanguage, setSourceLanguage] = useState<LanguageType>('common');
  const [targetLanguage, setTargetLanguage] = useState<LanguageType>('uncommon');
  const [wordCount, setWordCount] = useState(500);
  const [timeline, setTimeline] = useState<TimelineType>('standard');
  const [certification, setCertification] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate price whenever inputs change
  useEffect(() => {
    const basePrice = basePrices[documentType] * wordCount;
    const languageMultiplier = languageComplexity[targetLanguage];
    const timeMultiplier = timelineMultipliers[timeline];
    let price = basePrice * languageMultiplier * timeMultiplier;
    
    // Add certification fee if selected
    if (certification) {
      price += 25;
    }
    
    setTotalPrice(parseFloat(price.toFixed(2)));
  }, [documentType, sourceLanguage, targetLanguage, wordCount, timeline, certification]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-primary-700">Get an Instant Quote</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="document-type" className="block text-sm font-medium mb-1">Document Type</label>
          <select 
            id="document-type"
            value={documentType} 
            onChange={(e) => setDocumentType(e.target.value as DocumentType)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Document type"
            title="Document type"
          >
            <option value="general">General Content</option>
            <option value="legal">Legal Documents</option>
            <option value="medical">Medical Documents</option>
            <option value="technical">Technical Documents</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="word-count" className="block text-sm font-medium mb-1">Word Count</label>
          <input 
            id="word-count"
            type="number" 
            min="100"
            value={wordCount} 
            onChange={(e) => setWordCount(parseInt(e.target.value) || 0)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="source-language" className="block text-sm font-medium mb-1">Source Language</label>
          <select 
            id="source-language"
            value={sourceLanguage} 
            onChange={(e) => setSourceLanguage(e.target.value as LanguageType)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Source language"
            title="Source language"
          >
            <option value="common">Common (English, French, Spanish)</option>
            <option value="uncommon">Uncommon (Swahili, Lingala)</option>
            <option value="rare">Rare (Chichewa, Kirundi)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="target-language" className="block text-sm font-medium mb-1">Target Language</label>
          <select 
            id="target-language"
            value={targetLanguage} 
            onChange={(e) => setTargetLanguage(e.target.value as LanguageType)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Target language"
            title="Target language"
          >
            <option value="common">Common (English, French, Spanish)</option>
            <option value="uncommon">Uncommon (Swahili, Lingala)</option>
            <option value="rare">Rare (Chichewa, Kirundi)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-1">Timeline</label>
          <select 
            id="timeline"
            value={timeline} 
            onChange={(e) => setTimeline(e.target.value as TimelineType)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Timeline"
            title="Timeline"
          >
            <option value="standard">Standard (3-5 days)</option>
            <option value="rush">Rush (1-2 days)</option>
            <option value="urgent">Urgent (Same day)</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="certification"
            checked={certification} 
            onChange={(e) => setCertification(e.target.checked)}
            className="h-4 w-4 text-primary-600"
          />
          <label htmlFor="certification" className="ml-2">
            Certified Translation (+$25)
          </label>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Estimated Price:</span>
          <span className="text-2xl font-bold text-primary-600">${totalPrice}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          This is an estimate. Final price may vary based on document complexity.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button className="bg-secondary-600 text-white px-6 py-2 rounded hover:bg-secondary-700 transition">
          Request Official Quote
        </button>
        <button className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700 transition">
          Proceed to Order
        </button>
      </div>
    </div>
  );
}
