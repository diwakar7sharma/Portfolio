import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "wouter";
import profileImage from "../assets/Formal1.jpeg";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-tech-pattern text-white relative">
      {/* Data Science Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Data Points */}
          <circle cx="10%" cy="20%" r="2" fill="#4CAF50" />
          <circle cx="15%" cy="25%" r="2" fill="#2196F3" />
          <circle cx="20%" cy="15%" r="2" fill="#9C27B0" />
          <circle cx="25%" cy="30%" r="2" fill="#F44336" />
          <circle cx="30%" cy="10%" r="2" fill="#FFEB3B" />
          <circle cx="80%" cy="70%" r="2" fill="#4CAF50" />
          <circle cx="85%" cy="75%" r="2" fill="#2196F3" />
          <circle cx="90%" cy="65%" r="2" fill="#9C27B0" />
          <circle cx="70%" cy="80%" r="2" fill="#F44336" />
          <circle cx="75%" cy="60%" r="2" fill="#FFEB3B" />
          
          {/* Data Connection Lines */}
          <line x1="10%" y1="20%" x2="25%" y2="30%" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="15%" y1="25%" x2="20%" y2="15%" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="30%" y1="10%" x2="20%" y2="15%" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="80%" y1="70%" x2="90%" y2="65%" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="85%" y1="75%" x2="75%" y2="60%" stroke="#FFFFFF" strokeWidth="0.5" />
          <line x1="70%" y1="80%" x2="85%" y2="75%" stroke="#FFFFFF" strokeWidth="0.5" />
          
          {/* Graph Elements */}
          <path d="M50,80 Q60,60 70,70 Q80,80 90,50" stroke="#3B82F6" strokeWidth="1" fill="none" />
          <path d="M10,60 Q20,40 30,50 Q40,60 50,40" stroke="#10B981" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-10">
        <div className="md:w-2/3 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-green-400">Diwakar Sharma</span>
          </h1>
          <p className="text-xl mb-8 max-w-xl md:max-w-2xl">
            Computer Science Engineering student passionate about Data Science, Machine Learning, and Software Development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/contact" 
              className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/resume" 
              className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-full font-medium transition-colors"
            >
              View Resume
            </Link>
          </div>
          <div className="flex mt-8 gap-4 justify-center md:justify-start">
            <a 
              href="https://github.com/diwakar7sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-green-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/diwakar7sharma/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-green-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:diwakar4311@gmail.com" 
              className="text-white hover:text-green-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center animate-fade-in-up">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={profileImage} 
              alt="Diwakar Sharma" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
