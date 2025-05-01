import Navbar from "@/components/Navbar";
import ResumeViewer from "@/components/ResumeViewer";
import Footer from "@/components/Footer";

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <ResumeViewer />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;