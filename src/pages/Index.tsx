
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PlatformPreview from "@/components/landing/PlatformPreview";
import MissionSection from "@/components/landing/MissionSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";
import { useEffect } from "react";

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.hostname === window.location.hostname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PlatformPreview />
      <MissionSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
