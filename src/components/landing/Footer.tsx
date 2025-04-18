
const Footer = () => {
  return (
    <footer className="bg-openpolitica-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold text-white">
                  Open<span className="text-openpolitica-cyan">Politica</span>
                </span>
              </a>
            </div>
            <p className="text-blue-100 mb-6 font-lato">
              Empowering citizens with AI tools for meaningful democratic participation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.42-.014-.63.961-.689 1.8-1.56 2.46-2.548z" />
                </svg>
              </a>
              <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Platform</h3>
            <ul className="space-y-3 font-lato">
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Pricing</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Company</h3>
            <ul className="space-y-3 font-lato">
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Our Team</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Press</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Resources</h3>
            <ul className="space-y-3 font-lato">
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Events</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Help Center</a></li>
              <li><a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors">Tutorials</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0 font-lato">
            © {new Date().getFullYear()} OpenPolitica. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors font-lato">Privacy Policy</a>
            <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors font-lato">Terms of Service</a>
            <a href="#" className="text-blue-100 hover:text-openpolitica-cyan transition-colors font-lato">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
