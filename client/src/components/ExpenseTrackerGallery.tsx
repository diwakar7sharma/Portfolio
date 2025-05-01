import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// App screenshots
const screenshots = [
  {
    id: 1,
    title: "Learn Financial Topics",
    description: "Access educational content on budgeting, saving, and investing strategies.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661769416268-e7283169beba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Track Finances",
    description: "Add income, expenses, goals, investments, savings, and tax information.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80"
  },
  {
    id: 3, 
    title: "Saving Strategies",
    description: "Learn about effective saving methods and money management techniques.",
    imageUrl: "https://images.unsplash.com/photo-1579014134953-1580d7f123f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 4,
    title: "User Profile",
    description: "Personalize your experience with profile settings and currency preferences.",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={screenshots[currentIndex].imageUrl} 
          alt={screenshots[currentIndex].title}
          className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out"
        />
        
        {/* Caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {screenshots[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base opacity-90 max-w-lg">
            {screenshots[currentIndex].description}
          </p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={goToNext}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}