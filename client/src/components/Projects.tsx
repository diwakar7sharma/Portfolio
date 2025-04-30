import { FaChevronRight, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Heart Disease Prediction",
      date: "Feb 2025",
      description: "A predictive model using Logistic Regression to assess heart disease risk with an interactive Flask interface.",
      techs: ["Python", "HTML5", "CSS", "Flask"],
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/diwakar7sharma/Heart-Disease-Prediction"
    },
    {
      id: 2,
      title: "Binary Search Tree",
      date: "Jul 2024",
      description: "A C++ implementation of Binary Search Tree with optimized data structures and algorithms.",
      techs: ["C++", "PowerShell", "Data Structures"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/diwakar7sharma/BST"
    },
    {
      id: 3,
      title: "Amazon Sales Dashboard",
      date: "May 2024",
      description: "An interactive sales dashboard using R with dynamic charts and filters for data-driven decision making.",
      techs: ["R", "CSS", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/diwakar7sharma/Amazon-R-dashboard"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden project-card animate-fade-in-up"
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded">{project.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary flex items-center gap-1 text-sm"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 text-sm"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Project
                    <FaChevronRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
