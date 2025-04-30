import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Data Structures and Algorithms with CPP",
      organization: "by CipherSchools",
      date: "Jul 2024",
      link: "https://www.cipherschools.com/certificate/preview?id=669c2d4cf0df01503180dd66"
    },
    {
      id: 2,
      title: "Excel Skills for Business",
      organization: "by Macquarie University",
      date: "Apr 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/F5CWXL4CVQJB"
    },
    {
      id: 3,
      title: "Become a Data Scientist",
      organization: "by LinkedIn",
      date: "Feb 2024",
      link: "https://www.linkedin.com/learning/certificates/3a7e2a327249a1f1c3c459abbbf4c10532aecafdc64d9573d2b2460af4523584"
    },
    {
      id: 4,
      title: "Generative AI for Everyone",
      organization: "by DeepLearning.AI",
      date: "Dec 2023",
      link: "https://coursera.org/verify/H29T6B488VRN"
    },
    {
      id: 5,
      title: "C++ Intermediate",
      organization: "by SoloLearn",
      date: "Nov 2023",
      link: "https://www.sololearn.com/certificates/CC-ZDNOPNQH"
    },
    {
      id: 6,
      title: "Python Intermediate",
      organization: "by SoloLearn",
      date: "Oct 2023",
      link: "https://www.sololearn.com/certificates/CC-XHNAVDSG"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Top 30 in Hack-a-Throne 1.0",
      organization: "by AIESEC",
      date: "Aug 2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 section-transition">
      <div className="container mx-auto px-6">
        {/* Certificates */}
        <div id="certificates" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
            Certificates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certificates.map((certificate) => (
              <div 
                key={certificate.id} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in-up"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold">{certificate.title}</h3>
                  <span className="text-xs text-gray-500">{certificate.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{certificate.organization}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 text-sm"
                    aria-label={`View certificate for ${certificate.title}`}
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div id="achievements">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
            Achievements
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 animate-fade-in-up"
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaTrophy className="text-2xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-2">{achievement.organization}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
