
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        background: `linear-gradient(135deg, #1A3C6D 0%, #2EB1D6 100%)`,
        backgroundSize: "cover"
      }}
    >
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            <circle cx="25" cy="25" r="1.6257413380501518" fill="#fff"></circle>
            <circle cx="40" cy="40" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            Redefining Democracy with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 font-lato animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empower your voice with PolicyWeb—AI tools for a participatory future.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-openpolitica-cyan hover:bg-white hover:text-openpolitica-navy text-white font-medium px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-poppins"
            >
              Discover PolicyWeb
            </Button>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-white opacity-70" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
