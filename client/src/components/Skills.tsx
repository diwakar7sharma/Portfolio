import { SiCplusplus, SiPython, SiR } from "react-icons/si";
import { 
  FaJava, FaHtml5, FaCss3Alt, FaDatabase, 
  FaTable, FaCode, FaServer, FaChartBar,
  FaUserFriends, FaCheckDouble, FaSync, FaHeadphones
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const Skills = () => {
  const technicalSkills = {
    languages: [
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "R", icon: SiR },
      { name: "Python", icon: SiPython }
    ],
    frameworks: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Hadoop", icon: FaCode },
      { name: "Hive", icon: FaServer }
    ],
    tools: [
      { name: "MySQL", icon: FiDatabase },
      { name: "Apache Spark", icon: FaCode },
      { name: "Tableau", icon: FaChartBar }
    ],
  };
  
  const softSkills = [
    { name: "Active Listener", icon: FaHeadphones },
    { name: "Team Player", icon: FaUserFriends },
    { name: "Attention to Detail", icon: FaCheckDouble },
    { name: "Adaptability", icon: FaSync }
  ];

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
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
                  >
                    <skill.icon className="text-primary" />
                    {skill.name}
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
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
                  >
                    <skill.icon className="text-primary" />
                    {skill.name}
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
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
                  >
                    <skill.icon className="text-primary" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
            
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-green-500 flex items-center justify-center w-6 h-6 bg-green-50 rounded-full">
                    <skill.icon className="w-3.5 h-3.5" />
                  </span>
                  <span>{skill.name}</span>
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
