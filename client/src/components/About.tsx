const About = () => {
  return (
    <section id="about" className="py-16 bg-white section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-primary h-1 w-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          About Me
        </h2>
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a Computer Science Engineering student at Lovely Professional University with a passion for technology and problem-solving. My expertise spans data structures, algorithms, machine learning, and web development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With hands-on experience in various programming languages and frameworks, I enjoy building applications that solve real-world problems. My recent work includes developing predictive models for healthcare applications and creating interactive data visualization dashboards.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am constantly learning and improving my skills, and I am looking for opportunities to apply my knowledge in a professional setting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
