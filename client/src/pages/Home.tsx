import { useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = "Diwakar Sharma - Portfolio";
  }, []);
  
  const sections = [
    {
      title: "About",
      description: "Learn about my background, interests, and career objectives as a data science professional.",
      path: "/about"
    },
    {
      title: "Skills",
      description: "Explore my technical expertise in Python, R, SQL, and data visualization tools.",
      path: "/skills"
    },
    {
      title: "Experience",
      description: "Review my professional journey including roles at various organizations.",
      path: "/experience"
    },
    {
      title: "Projects",
      description: "See my data science and development projects including Amazon Sales Dashboard and Heart Disease Prediction.",
      path: "/projects"
    },
    {
      title: "Education",
      description: "Discover my academic qualifications including my degree from Lovely Professional University.",
      path: "/education"
    },
    {
      title: "Certificates",
      description: "View my professional certifications from CipherSchools, Coursera, and other platforms.",
      path: "/certificates"
    },
    {
      title: "Contact",
      description: "Get in touch with me for opportunities or collaborations.",
      path: "/contact"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore My Portfolio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section) => (
                <div key={section.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <Link 
                      href={section.path}
                      className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors"
                    >
                      View {section.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
