const Skills = () => {
  const technicalSkills = {
    languages: ["C++", "Java", "R", "Python"],
    frameworks: ["HTML", "CSS", "Hadoop", "Hive"],
    tools: ["MySQL", "Apache Spark", "Tableau"],
  };
  
  const softSkills = ["Active Listener", "Team Player", "Attention to Detail", "Adaptability"];

  return (
    <section id="skills" className="py-16 bg-gray-50 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 text-primary">Technical Skills</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Tools/Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
            
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
