import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[120vh] bg-background pt-24 pb-16 overflow-hidden">
      {/* Animated Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top left */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(207, 76%, 59%) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
            animationDuration: '8s',
          }}
        />
        
        {/* Medium gradient orb - top right */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(211, 55%, 35%) 0%, transparent 70%)',
            top: '-10%',
            right: '-5%',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
        
        {/* Small accent orb - middle */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(207, 76%, 65%) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'float-slow 12s ease-in-out infinite',
          }}
        />
        
        {/* Bottom light effect */}
        <div 
          className="absolute w-[700px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, hsl(207, 76%, 59%) 0%, transparent 60%)',
            bottom: '10%',
            left: '20%',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -20px); }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Hero Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight px-2">
            AI That Understands Dynamics 365
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent italic font-medium mb-4 sm:mb-6 px-2">
            So You Don't Have to Start from Scratch
          </p>
          <p className="text-base sm:text-lg text-foreground max-w-2xl mb-6 sm:mb-8 leading-relaxed px-4">
            Design entities, fix plugins, and resolve issues faster—all through guided, intelligent
            workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 w-full sm:w-auto px-4 sm:px-0">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}>
              Request Demo
            </Button>
            <Button variant="outline-primary" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-accent italic mt-2 px-4">
            Your Assistant for Effortless Dynamics 365 Customizations
          </p>
        </div>

        {/* Dashboard Screenshot - Responsive for all devices */}
        <div className="max-w-6xl mx-auto animate-slide-up px-4 sm:px-0" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card border-2 border-accent rounded-xl shadow-2xl overflow-hidden">
            <img 
              src="/dashboard.png" 
              alt="PowerMaker AI Dashboard Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
