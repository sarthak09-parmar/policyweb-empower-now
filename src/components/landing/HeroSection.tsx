
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        background: `linear-gradient(135deg, rgb(89, 26, 115) 0%, rgb(134, 31, 119) 100%)`,
        backgroundSize: "cover"
      }}
    >
      {/* Animated particle overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#fff" className="animate-pulse"></circle>
            <circle cx="20" cy="20" r="1" fill="#fff" className="animate-pulse" style={{ animationDelay: "0.2s" }}></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-white bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
            Empowering Democracy Through AI
          </span>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins animate-fade-in leading-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            Shape the Future of
            <span className="bg-gradient-to-r from-rose-100 to-teal-100 text-transparent bg-clip-text"> Democracy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-lato animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Join thousands of citizens using AI-powered tools to participate in policy-making and create meaningful change in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-purple-900 font-medium px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-poppins w-full sm:w-auto"
            >
              Get Started Now
            </Button>
            
            <a 
              href="#features" 
              className="text-white/90 hover:text-white flex items-center gap-2 transition-colors font-medium"
            >
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Free Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Growing Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
