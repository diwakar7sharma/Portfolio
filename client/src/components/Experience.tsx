const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 pb-12 border-l-2 border-primary animate-fade-in-up">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">Outlier AI</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-sm bg-green-500/10 text-green-600 px-3 py-1 rounded-full">Freelance</span>
                  <span className="text-gray-600">Oct 2024 - Nov 2024</span>
                </div>
              </div>
              
              <ul className="space-y-3 pl-6 list-disc text-gray-700">
                <li>Responsible for assessing problem-solving capabilities of model to ensure logical, contextually relevant, and unbiased outputs.</li>
                <li>Tasks included systematic rating of responses based on predefined guidelines, refining AI understanding of complex queries.</li>
                <li>Rated model responses with 85% accuracy based on predefined guidelines, contributing to AI refinement in handling complex queries.</li>
                <li>Evaluated over 50+ AI-generated responses, ensuring logical consistency, contextual relevance, and unbiased outputs.</li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-sm text-gray-600 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">JSON</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">HTML5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
