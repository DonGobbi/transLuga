import { useState } from 'react';
import { FaCheck, FaTimes, FaRedo, FaShare, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './LanguageQuiz.module.css';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which language is the most widely spoken in East Africa?",
    options: ["Zulu", "Swahili", "Amharic", "Lingala"],
    correctAnswer: 1,
    explanation: "Swahili is the most widely spoken language in East Africa, serving as a lingua franca in countries like Tanzania, Kenya, Uganda, and parts of DRC."
  },
  {
    id: 2,
    question: "Which of these countries does NOT have Lingala as one of its major languages?",
    options: ["Democratic Republic of Congo", "Republic of Congo", "Angola", "Kenya"],
    correctAnswer: 3,
    explanation: "Kenya's major languages include Swahili and English, but not Lingala. Lingala is primarily spoken in DRC, Republic of Congo, and parts of Angola."
  },
  {
    id: 3,
    question: "What is the official language of Rwanda?",
    options: ["French", "English", "Kinyarwanda", "Swahili"],
    correctAnswer: 2,
    explanation: "Kinyarwanda is the official language of Rwanda, although English, French, and Swahili are also recognized languages."
  },
  {
    id: 4,
    question: "Which African language has the most native speakers?",
    options: ["Swahili", "Hausa", "Yoruba", "Arabic"],
    correctAnswer: 3,
    explanation: "Arabic has the most native speakers among African languages, with over 300 million speakers worldwide, many of whom are in North African countries."
  },
  {
    id: 5,
    question: "Chichewa is the official language of which country?",
    options: ["Zambia", "Malawi", "Zimbabwe", "Mozambique"],
    correctAnswer: 1,
    explanation: "Chichewa (also known as Nyanja) is the official language of Malawi, although it's also spoken in parts of Zambia, Zimbabwe, and Mozambique."
  },
  {
    id: 6,
    question: "Which language family do most languages in Central and Southern Africa belong to?",
    options: ["Niger-Congo", "Afro-Asiatic", "Nilo-Saharan", "Khoisan"],
    correctAnswer: 0,
    explanation: "Most languages in Central and Southern Africa belong to the Niger-Congo language family, which is the largest language family in Africa."
  },
  {
    id: 7,
    question: "Which language is known for its distinctive 'click' sounds?",
    options: ["Swahili", "Yoruba", "Xhosa", "Hausa"],
    correctAnswer: 2,
    explanation: "Xhosa is known for its distinctive click consonants. It's one of South Africa's official languages and was famously spoken by Nelson Mandela."
  },
  {
    id: 8,
    question: "Which of these is NOT one of the major languages spoken in Nigeria?",
    options: ["Hausa", "Yoruba", "Igbo", "Swahili"],
    correctAnswer: 3,
    explanation: "Swahili is not a major language in Nigeria. Nigeria's major languages include Hausa, Yoruba, and Igbo, among others."
  },
  {
    id: 9,
    question: "Approximately how many indigenous languages are spoken across Africa?",
    options: ["Around 500", "Around 1,000", "Around 2,000", "Around 3,000"],
    correctAnswer: 2,
    explanation: "Africa is home to approximately 2,000 indigenous languages, making it one of the most linguistically diverse continents."
  },
  {
    id: 10,
    question: "Which North African country has Berber as an official language alongside Arabic?",
    options: ["Egypt", "Libya", "Morocco", "Tunisia"],
    correctAnswer: 2,
    explanation: "Morocco recognizes Berber (Amazigh) as an official language alongside Arabic. Berber languages are spoken by indigenous populations across North Africa."
  }
];

export default function LanguageQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return; // Prevent changing answer after revealing
    
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const startQuiz = () => {
    setQuizStarted(true);
  };
  
  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 90) {
      return "Excellent! You're an African language expert!";
    } else if (percentage >= 70) {
      return "Great job! You have strong knowledge of African languages.";
    } else if (percentage >= 50) {
      return "Good effort! You have a basic understanding of African languages.";
    } else {
      return "Thanks for taking the quiz! Learn more about African languages with Transluga.";
    }
  };
  
  const getScoreColor = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };
  
  if (!quizStarted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-primary-800 mb-4">African Language Quiz</h3>
        <p className="text-gray-600 mb-6">
          Test your knowledge of African languages with our 10-question quiz. Learn interesting facts about the diverse languages spoken across the African continent.
        </p>
        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold text-primary-700 mb-2">What you'll learn:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Major African languages and where they're spoken</li>
            <li>Interesting linguistic facts about Africa</li>
            <li>Cultural insights about language diversity</li>
          </ul>
        </div>
        <button 
          onClick={startQuiz}
          className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
        >
          Start Quiz
        </button>
      </div>
    );
  }
  
  if (quizCompleted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-primary-800 mb-4">Quiz Completed!</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <p className="text-xl mb-4">Your score:</p>
          <p className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
            {score} / {quizQuestions.length}
          </p>
          <p className="text-lg font-medium mb-4">{getScoreMessage()}</p>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{Math.round((score / quizQuestions.length) * 100)}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`${styles.progressBar} ${score >= 0 && score <= 10 ? styles[`scoreProgress${score}`] : styles.scoreProgress0}`}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button 
            onClick={restartQuiz}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <FaRedo className="mr-2" /> Take Quiz Again
          </button>
          
          <div className="flex-1 bg-gray-100 p-3 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 mr-2">Share your score:</p>
            <div className="flex space-x-2">
              <button 
                className="text-blue-600 hover:text-blue-800 p-1"
                aria-label="Share on Twitter"
                title="Share on Twitter"
              >
                <FaTwitter />
              </button>
              <button 
                className="text-blue-800 hover:text-blue-900 p-1"
                aria-label="Share on Facebook"
                title="Share on Facebook"
              >
                <FaFacebook />
              </button>
              <button 
                className="text-blue-700 hover:text-blue-900 p-1"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
              >
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4">
          <p className="text-gray-700">
            Want to learn more about African languages? Explore our <a href="/transLuga/services" className="text-secondary-600 hover:underline">translation services</a> or <a href="/transLuga/contact" className="text-secondary-600 hover:underline">contact us</a> for language consultation.
          </p>
        </div>
      </div>
    );
  }
  
  const currentQ = quizQuestions[currentQuestion];
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {quizQuestions.length}</p>
        <p className="text-sm text-gray-600">Score: {score}</p>
      </div>
      
      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`${styles.progressBar} ${styles[`progressBar${Math.min(100, Math.max(0, Math.round(((currentQuestion + 1) / quizQuestions.length) * 10) * 10))}`]}`}
          ></div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-primary-800 mb-6">{currentQ.question}</h3>
      
      <div className="space-y-3 mb-6">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={showAnswer}
            className={`w-full text-left p-4 rounded-lg transition duration-300 flex justify-between items-center ${
              selectedOption === index 
                ? index === currentQ.correctAnswer 
                  ? 'bg-green-100 border border-green-500' 
                  : 'bg-red-100 border border-red-500'
                : showAnswer && index === currentQ.correctAnswer
                  ? 'bg-green-100 border border-green-500'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>{option}</span>
            {showAnswer && index === currentQ.correctAnswer && (
              <FaCheck className="text-green-600" />
            )}
            {showAnswer && selectedOption === index && index !== currentQ.correctAnswer && (
              <FaTimes className="text-red-600" />
            )}
          </button>
        ))}
      </div>
      
      {showAnswer && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-gray-700">{currentQ.explanation}</p>
        </div>
      )}
      
      <div className="flex justify-between">
        <button
          onClick={restartQuiz}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <FaRedo className="mr-1" /> Restart
        </button>
        
        {showAnswer && (
          <button
            onClick={handleNextQuestion}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}
