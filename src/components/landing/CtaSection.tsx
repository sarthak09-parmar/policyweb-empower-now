
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <section id="join-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-openpolitica-navy mb-6 font-poppins">
            Join the Democratic Revolution
          </h2>
          <p className="text-lg text-gray-600 mb-10 font-lato">
            Be part of the movement that's reshaping democracy for the digital age. Start your journey with PolicyWeb today and make your voice count.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
            <Button 
              size="lg" 
              className="bg-openpolitica-cyan hover:bg-openpolitica-navy text-white px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-poppins w-full md:w-auto animate-pulse"
            >
              Get Started with PolicyWeb
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-openpolitica-navy text-openpolitica-navy hover:bg-openpolitica-navy hover:text-white px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 text-lg font-poppins w-full md:w-auto"
            >
              Request a Demo
            </Button>
          </div>
          
          <div className="mt-12 text-gray-500 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-openpolitica-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-lato">Secure & Private</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-openpolitica-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-lato">Free 30-Day Trial</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-openpolitica-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="font-lato">No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
