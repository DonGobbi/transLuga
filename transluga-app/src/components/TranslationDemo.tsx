import { useState } from 'react';

type TranslationDictionary = {
  [sourceLanguage: string]: {
    [targetLanguage: string]: {
      [phrase: string]: string;
    };
  };
};

// Sample translation dictionary
const translations: TranslationDictionary = {
  english: {
    swahili: {
      "hello": "jambo",
      "thank you": "asante",
      "how are you": "habari gani",
      "goodbye": "kwaheri",
      "welcome": "karibu"
    },
    chichewa: {
      "hello": "moni",
      "thank you": "zikomo",
      "how are you": "muli bwanji",
      "goodbye": "tsalani bwino",
      "welcome": "takulandirani"
    },
    lingala: {
      "hello": "mbote",
      "thank you": "merci",
      "how are you": "ozali malamu",
      "goodbye": "kende malamu",
      "welcome": "boyei malamu"
    }
  }
};

export default function TranslationDemo() {
  const [sourceLanguage, setSourceLanguage] = useState('english');
  const [targetLanguage, setTargetLanguage] = useState('swahili');
  const [phrase, setPhrase] = useState('hello');
  const [translation, setTranslation] = useState('');
  
  const translatePhrase = () => {
    if (sourceLanguage in translations && 
        targetLanguage in translations[sourceLanguage] && 
        phrase.toLowerCase() in translations[sourceLanguage][targetLanguage]) {
      setTranslation(translations[sourceLanguage][targetLanguage][phrase.toLowerCase()]);
    } else {
      setTranslation('Translation not available');
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-primary-700">Try Our Translation Demo</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">From</label>
          <select 
            value={sourceLanguage} 
            onChange={(e) => setSourceLanguage(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Source language"
            title="Source language"
          >
            <option value="english">English</option>
            {/* Add more source languages as needed */}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">To</label>
          <select 
            value={targetLanguage} 
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
            aria-label="Target language"
            title="Target language"
          >
            <option value="swahili">Swahili</option>
            <option value="chichewa">Chichewa</option>
            <option value="lingala">Lingala</option>
            {/* Add more target languages as needed */}
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phrase</label>
        <input 
          type="text" 
          value={phrase} 
          onChange={(e) => setPhrase(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500"
          placeholder="Enter a phrase to translate"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => setPhrase("hello")}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition"
        >
          Hello
        </button>
        <button 
          onClick={() => setPhrase("thank you")}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition"
        >
          Thank you
        </button>
        <button 
          onClick={() => setPhrase("how are you")}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition"
        >
          How are you?
        </button>
        <button 
          onClick={() => setPhrase("goodbye")}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition"
        >
          Goodbye
        </button>
        <button 
          onClick={() => setPhrase("welcome")}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition"
        >
          Welcome
        </button>
      </div>
      
      <button 
        onClick={translatePhrase}
        className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
      >
        Translate
      </button>
      
      {translation && (
        <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
          <p className="font-medium text-gray-700">Translation:</p>
          <p className="text-xl font-bold text-primary-800 mt-1">{translation}</p>
          <button className="mt-3 flex items-center text-sm text-primary-600 hover:text-primary-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-1.414-7.071m-2.829 9.9a9 9 0 010-12.728" />
            </svg>
            Listen to Pronunciation
          </button>
        </div>
      )}
      
      <p className="mt-4 text-sm text-gray-500">
        This is a demonstration of our translation capabilities. For professional translation services, please contact us or request a quote.
      </p>
    </div>
  );
}
