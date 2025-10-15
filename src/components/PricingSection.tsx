import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const features = [
    "AI Entity Builder",
    "Plugin Trace Analyzer",
    "Live CRM Integration",
    "Unlimited Conversations",
    "Priority Support",
    "Early Access to New Features",
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-3 sm:mb-4 px-4">
          Purchase a subscription
        </h2>
        <p className="text-center text-muted-foreground mb-12 sm:mb-16 px-4">
          Choose the plan that works for you.
        </p>

        {/* Layered Cards Container */}
        <div className="relative max-w-5xl mx-auto min-h-[500px] sm:h-[600px] flex items-center justify-center">
          {/* Background Layer Cards - Hidden on mobile */}
          <div className="hidden sm:flex absolute inset-0 items-center justify-center">
            {/* Back card - most faded */}
            <div 
              className="absolute w-[320px] sm:w-[420px] h-[400px] sm:h-[480px] rounded-3xl opacity-20 blur-sm"
              style={{
                background: 'linear-gradient(135deg, hsl(207, 76%, 75%) 0%, hsl(207, 76%, 59%) 100%)',
                transform: 'rotate(-8deg) scale(0.85) translateY(40px)',
              }}
            />
            
            {/* Middle card */}
            <div 
              className="absolute w-[340px] sm:w-[440px] h-[420px] sm:h-[500px] rounded-3xl opacity-40 blur-[2px]"
              style={{
                background: 'linear-gradient(135deg, hsl(207, 76%, 70%) 0%, hsl(207, 76%, 54%) 100%)',
                transform: 'rotate(-4deg) scale(0.92) translateY(20px)',
              }}
            />
          </div>

          {/* Main Featured Card */}
          <div 
            className="relative w-full max-w-[360px] sm:max-w-[480px] rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 sm:hover:rotate-0"
            style={{
              background: 'linear-gradient(135deg, hsl(207, 76%, 65%) 0%, hsl(207, 76%, 50%) 100%)',
              transform: 'rotate(0deg)',
            }}
          >
            {/* Card Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              {/* Header Section */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  🎉 For All Users 🎉
                </h3>
                <p className="text-lg sm:text-xl text-white/90 font-medium">
                  During Beta
                </p>
              </div>

              {/* Price Section */}
              <div className="text-center mb-6 sm:mb-8 py-4 sm:py-6 border-y border-white/20">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">Free</p>
                <p className="text-white/90 text-base sm:text-lg">No credit card required*</p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-white text-accent hover:bg-white/90 font-bold text-base sm:text-lg h-12 sm:h-14 rounded-xl shadow-lg"
                size="lg"
                onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}
              >
                Get Started Free
              </Button>
            </div>

            {/* Decorative gradient overlay */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Side decorative cards */}
          <div 
            className="hidden lg:block absolute left-0 w-[280px] h-[360px] rounded-2xl opacity-15"
            style={{
              background: 'linear-gradient(135deg, hsl(207, 76%, 75%) 0%, hsl(207, 76%, 59%) 100%)',
              transform: 'rotate(-12deg) translateX(-120px)',
            }}
          />
          
          <div 
            className="hidden lg:block absolute right-0 w-[280px] h-[360px] rounded-2xl opacity-15"
            style={{
              background: 'linear-gradient(135deg, hsl(207, 76%, 75%) 0%, hsl(207, 76%, 59%) 100%)',
              transform: 'rotate(12deg) translateX(120px)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
