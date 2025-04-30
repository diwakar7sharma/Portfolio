import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initSmoothScroll } from "@/lib/smoothScroll";

const Home = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Set page title
    document.title = "Diwakar Sharma - Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
