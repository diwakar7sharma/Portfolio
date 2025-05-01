import { FaDownload, FaFilePdf, FaEye } from "react-icons/fa";
import resumeFile from "../assets/Diwakar_Sharma_CV.pdf";

const ResumeViewer = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-t-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 bg-primary text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">My Resume</h2>
              <p className="opacity-90">
                View my complete professional background, education, and skills
              </p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Diwakar Sharma</h3>
                  <p className="text-gray-600">Computer Science & Engineering Student</p>
                </div>
                
                <a 
                  href={resumeFile} 
                  download="Diwakar_Sharma_CV.pdf"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <FaDownload /> Download PDF
                </a>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  My resume highlights my skills in data science, programming, and web development, 
                  along with my education, projects, and professional experience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-gray-900">Key Skills</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>C++, Java, R, Python, Swift</li>
                      <li>HTML, CSS, Hadoop, Hive</li>
                      <li>MySQL, Apache Spark, Tableau, Xcode</li>
                      <li>Active Listener, Team Player</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-gray-900">Education</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>B.Tech in Computer Science (LPU)</li>
                      <li>Data Science Certifications</li>
                      <li>Algorithmic Problem Solving</li>
                      <li>Database Management Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* PDF Viewer */}
          <div className="bg-white rounded-b-lg shadow-xl overflow-hidden">
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-center">Resume Document</h3>
              
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-lg">
                  <div className="text-primary p-3 bg-white rounded-full">
                    <FaFilePdf className="text-3xl" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">View Complete Resume</h4>
                    <p className="text-gray-600 mb-3">
                      For a detailed view of my professional background:
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href={resumeFile} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <FaEye /> View PDF
                      </a>
                      
                      <a 
                        href={resumeFile} 
                        download="Diwakar_Sharma_CV.pdf"
                        className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <FaDownload /> Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden h-[600px] max-w-4xl mx-auto">
                <iframe
                  src={resumeFile}
                  title="Diwakar Sharma CV"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                />
              </div>
              
              <p className="text-gray-500 text-sm mt-4 text-center">
                For the best experience, you can download the PDF using the button above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;