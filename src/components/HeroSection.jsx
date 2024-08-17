const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent overflow-hidden">
      {/* Animierter Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30 bg-cover bg-fixed animate-background"></div>

      {/* Inhaltswrapper */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-10 space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary relative overflow-hidden">
          Software-Tool
          <span className="bg-gradient-to-r from-lilac-light to-lilac-dark text-transparent bg-clip-text">
            {" "}
            für effiziente Entwicklung
          </span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-4xl relative z-10">
          Steigern Sie die Effizienz Ihrer Entwicklungsprozesse und optimieren Sie
          Ihre Projekte mit unserem leistungsstarken Software-Tool. Starten Sie noch
          heute und machen Sie Ihre Arbeit professioneller und schneller!
        </p>
        <div className="flex justify-center my-10 gap-6">
          <a
            href="#"
            className="bg-gradient-to-r from-lilac-light to-lilac-dark text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            Jetzt starten
          </a>
          <a
            href="#"
            className="border border-neutral-400 text-neutral-400 px-6 py-3 rounded-lg hover:bg-neutral-700 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Dokumentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
