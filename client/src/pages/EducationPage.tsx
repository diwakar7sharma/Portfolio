import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;