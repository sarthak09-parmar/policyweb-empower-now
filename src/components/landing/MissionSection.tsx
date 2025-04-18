
import { useEffect, useRef, useState } from "react";

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-20 bg-openpolitica-navy text-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
            Our Commitment
          </h2>
          <div 
            className={`text-xl font-light leading-relaxed mb-12 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="mb-6 font-lato">
              We're building a world where every citizen shapes democracy, powered by transparent AI. At OpenPolitica, we believe in a future where technology amplifies civic engagement rather than replacing it.
            </p>
            <p className="font-lato">
              Our mission is to create accessible, powerful tools that bridge the gap between citizens and policymakers, ensuring that democracy truly represents the will of the people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div 
              className={`bg-opacity-20 bg-white p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-4 text-openpolitica-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Transparency
              </h3>
              <p className="text-blue-100 font-lato">
                We're committed to open, explainable AI that empowers rather than obscures. Every recommendation is traceable and understandable.
              </p>
            </div>
            
            <div 
              className={`bg-opacity-20 bg-white p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="mb-4 text-openpolitica-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Inclusivity
              </h3>
              <p className="text-blue-100 font-lato">
                PolicyWeb is built for everyone, with accessibility and diverse perspectives at the core of our design philosophy.
              </p>
            </div>
            
            <div 
              className={`bg-opacity-20 bg-white p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="mb-4 text-openpolitica-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Innovation
              </h3>
              <p className="text-blue-100 font-lato">
                We continually push the boundaries of what's possible, developing AI tools that evolve with the needs of citizens and democracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
