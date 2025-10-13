import { Card } from "@/components/ui/card";
import { FileCode, Download, Network, ArrowUpRight, Clock, Sparkles } from "lucide-react";

const upcomingFeatures = [
  {
    title: "Auto-Generated Plugin & JS Snippets",
    description: "Turn ideas into ready-to-use C#, JavaScript, and TypeScript code tailored for your CRM.",
    icon: FileCode,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "One-Click CRM Export",
    description: "Generate solution-ready JSON or XRM packages and push directly to your CRM.",
    icon: Download,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Built-in CRM Schema Visualizer",
    description: "Interactive diagrams showing entity relationships, attributes, and data types.",
    icon: Network,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    title: "Scalable & Extensible Architecture",
    description: "Built to grow with your team — integrate deeper with CRM APIs or plug into CI/CD.",
    icon: ArrowUpRight,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
];

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 sm:px-6 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">Coming Soon</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4">
            What's Next for PowerMakerAI
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Exciting features in development to make your CRM workflow even more powerful
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-muted hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Coming soon badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1">
                <Clock className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-accent">Soon</span>
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.iconColor}`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Want to stay updated on new features?
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
            <span className="text-sm sm:text-base">Join our newsletter</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
