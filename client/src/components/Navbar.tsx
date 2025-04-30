import { useState, useEffect } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary">
          Diwakar Sharma
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden focus:outline-none" 
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-gray-600"></i>
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`text-gray-600 hover:text-primary transition-colors ${
                  activeSection === item.href.substring(1) ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white w-full ${mobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="px-6 py-3 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`block text-gray-600 hover:text-primary py-2 ${
                  activeSection === item.href.substring(1) ? "text-primary font-medium" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
