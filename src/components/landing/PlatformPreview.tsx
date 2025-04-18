
import { useEffect, useRef, useState } from "react";

const PlatformPreview = () => {
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
      id="platform"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-openpolitica-navy mb-4 font-poppins">
            AI at the Heart of Democracy
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-lato">
            Our platform combines cutting-edge AI technology with intuitive design to transform how citizens interact with policy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-openpolitica-navy mb-4 font-poppins">
              Explore, Propose, and Analyze Policies
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="text-openpolitica-cyan mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-openpolitica-slate font-lato">AI-Powered Policy Analysis</p>
                  <p className="text-gray-600 text-sm mt-1">Our algorithms break down complex legislation into understandable insights.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-openpolitica-cyan mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-openpolitica-slate font-lato">Real-Time Impact Visualization</p>
                  <p className="text-gray-600 text-sm mt-1">See how policies affect communities with dynamic data visualizations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-openpolitica-cyan mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-openpolitica-slate font-lato">Smart Policy Recommendations</p>
                  <p className="text-gray-600 text-sm mt-1">Receive personalized policy suggestions based on your interests and community needs.</p>
                </div>
              </li>
            </ul>
            <button className="bg-openpolitica-navy hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-colors font-poppins font-medium inline-flex items-center">
              Request Demo Access
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div 
            className={`bg-white p-2 rounded-xl shadow-lg transition-all duration-700 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Mock Dashboard UI */}
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-openpolitica-navy p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-xs">PolicyWeb Dashboard</div>
                <div className="w-12"></div>
              </div>
              <div className="bg-white p-4">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-blue-50 p-3 rounded-md">
                    <div className="text-xs text-gray-500 mb-1">Active Policies</div>
                    <div className="text-xl font-bold text-openpolitica-navy">237</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <div className="text-xs text-gray-500 mb-1">Proposals</div>
                    <div className="text-xl font-bold text-openpolitica-navy">42</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-md">
                    <div className="text-xs text-gray-500 mb-1">Communities</div>
                    <div className="text-xl font-bold text-openpolitica-navy">18</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Policy Impact Visualization</div>
                    <div className="text-xs text-openpolitica-cyan">View All</div>
                  </div>
                  <div className="h-32 bg-gray-100 rounded-md relative overflow-hidden">
                    {/* SVG representation of a chart/graph */}
                    <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full">
                      <path d="M0,150 L20,135 L40,140 L60,120 L80,130 L100,100 L120,110 L140,90 L160,80 L180,70 L200,40 L220,30 L240,40 L260,50 L280,30 L300,20 L320,15 L340,25 L360,15 L380,5 L400,10" fill="none" stroke="#2EB1D6" strokeWidth="3" />
                      <path d="M0,150 L20,145 L40,140 L60,138 L80,135 L100,130 L120,125 L140,120 L160,115 L180,110 L200,105 L220,100 L240,95 L260,90 L280,85 L300,80 L320,75 L340,70 L360,65 L380,60 L400,55" fill="none" stroke="#1A3C6D" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Recent Policy Updates</div>
                    <div className="text-xs text-openpolitica-cyan">View All</div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 border border-gray-100 rounded-md flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-openpolitica-navy mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">Education Reform Bill</div>
                        <div className="text-gray-500">Updated 2 hours ago</div>
                      </div>
                    </div>
                    <div className="p-2 border border-gray-100 rounded-md flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-openpolitica-navy mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">Climate Action Plan</div>
                        <div className="text-gray-500">New proposal 5 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
