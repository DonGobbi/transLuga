import { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCircle, FaClock } from 'react-icons/fa';
import styles from './TestimonialCarousel.module.css';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
}

export default function TestimonialCarousel({ 
  testimonials, 
  autoplaySpeed = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const progressIntervalRef = useRef<NodeJS.Timeout>();

  // Handle automatic sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      // Reset progress when autoplay starts
      setProgress(0);
      
      // Clear any existing progress interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      // Create progress interval that updates every 100ms
      const updateFrequency = 100;
      const steps = autoplaySpeed / updateFrequency;
      let currentStep = 0;
      
      progressIntervalRef.current = setInterval(() => {
        currentStep++;
        setProgress((currentStep / steps) * 100);
        
        if (currentStep >= steps) {
          currentStep = 0;
        }
      }, updateFrequency);
      
      // Main interval for changing slides
      interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          setProgress(0);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
        }, 300);
      }, autoplaySpeed);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoplay, testimonials.length, autoplaySpeed]);

  const goToNext = () => {
    setIsAutoplay(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsAutoplay(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };
  
  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className={`${styles.progressBar} ${styles[`progress${Math.floor(progress / 10) * 10}`] || styles.progress0}`}
        ></div>
      </div>
      
      {/* Main testimonial */}
      <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-4 left-4 text-primary-200">
          <FaQuoteLeft className="text-4xl opacity-30" />
        </div>
        
        <div className={`relative z-10 ${styles.testimonialContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
          <p className="text-gray-700 italic mb-6 pt-6 min-h-[100px]">
            "{testimonials[currentIndex].quote}"
          </p>
          
          <div className="flex items-center">
            {testimonials[currentIndex].image ? (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                <span className="text-gray-500 font-bold">{testimonials[currentIndex].author.charAt(0)}</span>
              </div>
            )}
            
            <div>
              <p className="font-bold">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-between items-center mt-6">
        <button 
          onClick={goToPrevious}
          className="bg-white p-2 rounded-full shadow hover:shadow-md transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-primary-600" />
        </button>
        
        {/* Indicators */}
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'text-primary-600' : 'text-gray-300 hover:text-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <FaCircle className={`${index === currentIndex ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleAutoplay}
            className={`p-2 rounded-full transition-all duration-300 ${
              isAutoplay ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'
            }`}
            aria-label={isAutoplay ? 'Pause autoplay' : 'Start autoplay'}
          >
            <FaClock className="w-3 h-3" />
          </button>
          
          <button 
            onClick={goToNext}
            className="bg-white p-2 rounded-full shadow hover:shadow-md transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-primary-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
