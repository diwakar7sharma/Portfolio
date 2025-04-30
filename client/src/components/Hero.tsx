import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-tech-pattern text-white">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-green-400">Diwakar Sharma</span>
          </h1>
          <p className="text-xl mb-8 max-w-xl md:max-w-2xl">
            Computer Science Engineering student passionate about Data Science, Machine Learning, and Software Development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-full font-medium transition-colors"
            >
              View Projects
            </a>
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Profile image placeholder" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
