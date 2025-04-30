import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Diwakar Sharma</h3>
            <p className="text-gray-400 mt-1">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/diwakar7sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/diwakar7sharma/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="mailto:diwakar4311@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Diwakar Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
