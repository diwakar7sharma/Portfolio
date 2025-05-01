import { useState } from "react";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Certificates", href: "/certificates" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Diwakar Sharma
        </Link>
        
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
              <Link 
                href={item.href} 
                className={`text-gray-600 hover:text-primary transition-colors ${
                  location === item.href ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white w-full ${mobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="px-6 py-3 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className={`block text-gray-600 hover:text-primary py-2 ${
                  location === item.href ? "text-primary font-medium" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
