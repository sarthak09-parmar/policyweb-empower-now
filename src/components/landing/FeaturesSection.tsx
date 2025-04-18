
import { useEffect, useRef, useState } from "react";

// Feature card component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-openpolitica-offwhite rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-700 transform hover:scale-105 hover:shadow-lg ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-openpolitica-cyan mb-4 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-openpolitica-navy font-poppins">
        {title}
      </h3>
      <p className="text-gray-600 font-lato">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-openpolitica-navy mb-4 font-poppins">
            PolicyWeb: Your Voice, Amplified
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-lato">
            Our AI-powered platform puts democracy in your hands with intuitive tools
            designed for meaningful civic participation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            title="Engage with Policies"
            description="Dive into policies that shape your world with AI-powered tools that make complex legislation accessible and understandable."
            delay={100}
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            }
            title="Shape the Future"
            description="Propose ideas with AI-guided precision, ensuring your voice is heard through data-backed suggestions that resonate with policymakers."
            delay={200}
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
            title="Understand Impact"
            description="Visualize policy trends with cutting-edge analytics, making it easy to see how decisions affect communities and identify opportunities for change."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
