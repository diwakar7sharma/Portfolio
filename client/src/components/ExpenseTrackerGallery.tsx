import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// App screenshots - all images are externally hosted to optimize performance
const screenshots = [
  {
    id: 1,
    title: "Learning Center",
    description: "Access educational content on budgeting basics, expense categorization, saving strategies, and financial tools.",
    imageUrl: "https://i.imgur.com/fWR8F9T.png" // Learn screen
  },
  {
    id: 2,
    title: "Expense Tracking",
    description: "Add income, expenses, goals, investments, savings, and tax percentages to monitor your financial health.",
    imageUrl: "https://i.imgur.com/bKlOfNh.png" // Track screen
  },
  {
    id: 3, 
    title: "Saving Strategies",
    description: "Learn practical ways to save money for the future with expert advice from financial institutions.",
    imageUrl: "https://i.imgur.com/b0sRTOp.png" // Savings article screen
  },
  {
    id: 4,
    title: "User Profile",
    description: "Personalize your experience with profile settings, currency preferences, and account management options.",
    imageUrl: "https://i.imgur.com/wL5cZ8k.png" // Profile screen
  }
];

export default function ExpenseTrackerGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the carousel
  useEffect(() => {
    let intervalId: number;
    
    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
      }, 3000);
    }
    
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  // Pause auto-play when hovering
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl my-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-slate-100 rounded-t-lg border-slate-200 border overflow-hidden">
        <div className="w-full md:max-w-[375px] mx-auto relative pt-4 pb-8 bg-black">
          {/* iPhone mockup */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center justify-center">
            <div className="w-32 h-6 bg-black rounded-b-lg"></div>
          </div>
          
          <div className="w-full h-full px-2 md:px-4">
            <img 
              src={screenshots[currentIndex].imageUrl} 
              alt={screenshots[currentIndex].title}
              className="w-full h-[500px] object-contain rounded-lg transition-transform duration-500 ease-in-out mx-auto"
            />
          </div>
          
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="w-1/3 h-1 bg-slate-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Caption */}
        <div className="bg-gradient-to-t from-primary/90 to-primary/70 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {screenshots[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base opacity-90 max-w-lg">
            {screenshots[currentIndex].description}
          </p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-2 md:px-8 z-10 pointer-events-none">
        <button 
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md pointer-events-auto"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={goToNext}
          className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md pointer-events-auto"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4 mb-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-6" : "bg-gray-300 w-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}