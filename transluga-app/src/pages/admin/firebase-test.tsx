import { useState, useEffect } from 'react';
import Head from 'next/head';
import { db } from '../../firebase/config';
import { collection, getDocs, Firestore } from 'firebase/firestore';

export default function FirebaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Test Firebase connection
    const testConnection = async () => {
      try {
        // Check if db is initialized
        if (!db) {
          throw new Error('Firebase database is not initialized. Check your environment variables.');
        }
        
        // Try to access Firestore
        const testQuery = await getDocs(collection(db as Firestore, 'test-collection'));
        
        // If we get here, the connection was successful
        setConnectionStatus('success');
      } catch (error) {
        console.error('Firebase connection error:', error);
        setConnectionStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Firebase Connection Test | Transluga</title>
      </Head>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Firebase Connection Test
          </div>
          <h1 className="mt-2 text-xl font-medium text-gray-900">
            Testing Firebase Connection
          </h1>
          
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Connection Status:</h2>
            
            {connectionStatus === 'checking' && (
              <div className="mt-2 flex items-center text-gray-500">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking connection...
              </div>
            )}
            
            {connectionStatus === 'success' && (
              <div className="mt-2 text-green-600">
                ✅ Successfully connected to Firebase!
              </div>
            )}
            
            {connectionStatus === 'error' && (
              <div className="mt-2">
                <div className="text-red-600">❌ Failed to connect to Firebase</div>
                <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-800">
                  {errorMessage}
                </div>
                <div className="mt-4 text-gray-700">
                  <h3 className="font-medium">Possible reasons:</h3>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Firebase credentials are not set up correctly in .env.local</li>
                    <li>Firebase project is not properly configured</li>
                    <li>Network connectivity issues</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900">Next Steps:</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
              <li>Make sure you've created a .env.local file with your Firebase credentials</li>
              <li>Ensure your Firebase project is properly set up with Firestore enabled</li>
              <li>Check that your security rules allow the test operation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
