import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const CertificatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <Certificates />
      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;