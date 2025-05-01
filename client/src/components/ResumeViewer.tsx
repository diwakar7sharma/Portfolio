import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload, FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import resumeFile from "../assets/Diwakar_Sharma_CV.pdf";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumeViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setIsLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

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
                      <li>C++, Java, R, Python</li>
                      <li>HTML, CSS, Hadoop, Hive</li>
                      <li>MySQL, Apache Spark, Tableau</li>
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
              
              <div className="flex justify-center mb-4">
                <Document
                  file={resumeFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex justify-center items-center h-96">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  }
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {!isLoading && (
                    <Page 
                      pageNumber={pageNumber} 
                      width={Math.min(600, window.innerWidth - 40)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  )}
                </Document>
              </div>
              
              {numPages && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-4">
                    <button
                      disabled={pageNumber <= 1}
                      onClick={previousPage}
                      className={`p-2 rounded-full ${pageNumber <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-primary text-white hover:bg-primary/90'}`}
                      aria-label="Previous page"
                    >
                      <FaChevronLeft />
                    </button>
                    
                    <p className="text-gray-700">
                      Page {pageNumber} of {numPages}
                    </p>
                    
                    <button
                      disabled={pageNumber >= numPages}
                      onClick={nextPage}
                      className={`p-2 rounded-full ${pageNumber >= numPages ? 'bg-gray-200 text-gray-400' : 'bg-primary text-white hover:bg-primary/90'}`}
                      aria-label="Next page"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  
                  <p className="text-gray-500 text-sm mt-4">
                    For the best experience, you can download the PDF using the button above.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;