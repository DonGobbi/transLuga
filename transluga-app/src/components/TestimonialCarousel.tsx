import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

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

  // Handle automatic sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoplaySpeed);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, testimonials.length, autoplaySpeed]);

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Main testimonial */}
      <div className="bg-white p-8 rounded-xl shadow-lg relative">
        <div className="absolute top-4 left-4 text-primary-200">
          <FaQuoteLeft className="text-4xl opacity-30" />
        </div>
        
        <div className="relative z-10">
          <p className="text-gray-700 italic mb-6 pt-6">
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
      <div className="flex justify-between mt-6">
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
        
        <button 
          onClick={goToNext}
          className="bg-white p-2 rounded-full shadow hover:shadow-md transition-all duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-primary-600" />
        </button>
      </div>
    </div>
  );
}
