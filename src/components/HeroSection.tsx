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
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
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

        {/* Dashboard Video Preview - Hidden on mobile, shown on tablet+ */}
        <div className="hidden lg:block max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card border-2 border-accent rounded-xl shadow-2xl p-4 relative">
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-background rounded-lg overflow-hidden">
              {/* Top Bar */}
              <div className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">PM</span>
                  </div>
                  <span className="font-semibold text-primary">PowerMaker AI</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-accent">Hello, Adam Siegel!</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Connected to Dataverse</span>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">AS</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex h-[600px]">
                {/* Sidebar */}
                <div className="w-64 bg-secondary border-r border-border p-4 space-y-4">
                  <Button variant="accent" className="w-full justify-start">
                    + New Chat
                  </Button>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-medium px-2">RECENT</p>
                    <div className="space-y-1">
                      {[
                        "Watch Purchase Comparison...",
                        "URL Fetching...",
                        "SOAP for Job...",
                        "Browse Location Sharing...",
                        "Web Structure Health...",
                      ].map((item, i) => (
                        <button
                          key={i}
                          className="w-full text-left text-sm text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors truncate"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col p-8">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <h2 className="text-2xl font-semibold text-primary">
                        Hello, Adam Siegel!
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        What would you like to make?
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-4 border border-border rounded-lg">
                      <input
                        type="text"
                        placeholder="Enter Prompt"
                        className="flex-1 bg-transparent outline-none text-foreground"
                        disabled
                      />
                      <Button variant="outline" size="sm">
                        Attach Files
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>Model:</span>
                        <select className="bg-transparent border border-border rounded px-2 py-1">
                          <option>GPT-4</option>
                        </select>
                      </div>
                      <span>5000 tokens</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Templates */}
                <div className="w-80 bg-secondary border-l border-border p-4 space-y-3">
                  <div className="bg-card p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <p className="text-sm text-foreground mb-2">
                      Use one of our prompt templates for the account entity
                    </p>
                    <Play className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <p className="text-sm text-muted-foreground mb-2 font-mono">
                      {"<"}Find logs that contain a NullReferenceException{">"}
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <p className="text-sm text-foreground mb-2">
                      Let these logs where execution exceeded
                    </p>
                    <span className="text-xs text-muted-foreground">60ms</span>
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

export default HeroSection;
