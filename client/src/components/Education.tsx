const Education = () => {
  const educationHistory = [
    {
      id: 1,
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      period: "Aug 2022 - Present",
      grade: "CGPA: 7.04"
    },
    {
      id: 2,
      institution: "Vishwanath Academy",
      location: "Aashiana, Lucknow",
      degree: "Intermediate",
      field: "PCM",
      period: "Apr 2020 - Mar 2022",
      grade: "Percentage: 70%"
    },
    {
      id: 3,
      institution: "Vishwanath Academy",
      location: "Aashiana, Lucknow",
      degree: "Matriculation",
      field: "",
      period: "Apr 2018 - Mar 2020",
      grade: "Percentage: 71%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`relative pl-8 ${
                index !== educationHistory.length - 1 ? "pb-12" : ""
              } border-l-2 border-primary animate-fade-in-up`}
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <span className="text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-700 mb-2">{edu.location}</p>
                <p className="font-medium">{edu.degree}</p>
                {edu.field && <p>{edu.field}</p>}
                <p className="mt-2 inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
