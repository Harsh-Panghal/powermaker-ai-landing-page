import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Search, Code, MessageSquare, FileCode, Download, Network, Shield, ArrowUpRight } from "lucide-react";

const currentFeatures = [
  {
    title: "AI-Powered Entity Builder with Visualizer",
    tagline: "Transform natural language into structured CRM schema effortlessly",
    whatItDoes: "PowerMakerAI turns plain English descriptions into complete CRM schemas instantly. For example, saying \"Create a Contact entity with name, email, phone, and a custom status field\" generates a full entity configuration with appropriate attribute types and properties.",
    highlights: [
      "Interactive drag-and-drop schema builder",
      "Visual hierarchy of entities and relationships",
      "Auto-detection of attribute types based on intent",
      "Real-time preview of CRM entity structure",
    ],
    whyItMatters: "It saves developers and consultants time by replacing complex Dynamics 365 customization steps with a simple, conversational, and visual approach to entity creation.",
    icon: Puzzle,
  },
  {
    title: "Plugin Trace Log Analyzer",
    tagline: "Diagnose plugin errors without digging through endless logs.",
    whatItDoes: "PowerMakerAI simplifies diagnosing plugin errors by analyzing raw PluginTraceLog content or uploaded trace files. It highlights failed plugins, summarizes root causes, and offers likely solutions.",
    highlights: [
      "Parses complex, multi-level logs",
      "Identifies failed steps, plugins, and correlation IDs",
      "Suggests fixes and highlights affected CRM areas",
      "Supports both synchronous and asynchronous logs",
    ],
    whyItMatters: "It drastically reduces the time CRM developers spend analyzing logs, delivering quick, accurate insights and minimizing trial-and-error debugging.",
    icon: Search,
  },
  {
    title: "Advanced AI ChatBot with Live CRM Interaction",
    tagline: "Chat with your CRM like you chat with a colleague — only smarter.",
    whatItDoes: "Describe your entity in plain English — \"Create a Contact entity with name, email, phone, and a custom status field\" — and PowerMakerAI will generate a full entity configuration, complete with attribute types, requirements, and schema suggestions.",
    highlights: [
      "Interactive schema builder with drag-and-drop support",
      "Clear visual hierarchy of entities and attributes",
      "Auto-detects attribute types based on name & intent",
      "Instant preview of how your entity will look inside CRM",
    ],
    whyItMatters: "Developers and consultants often lose time navigating through multiple Dynamics 365 customization screens. PowerMakerAI streamlines this by making entity creation as easy as talking to a colleague — and visualizing the output in real-time.",
    icon: MessageSquare,
  },
];

const keyFeatures = [
  {
    title: "Natural Language Entity Builder",
    description: "Create entities and attributes by simply describing them — no need to click through endless setup forms.",
    icon: Puzzle,
  },
  {
    title: "Smart Plugin Trace Log Analyzer",
    description: "Paste your logs and get instant summaries, root-causes, and fix suggestions.",
    icon: Search,
  },
  {
    title: "Code-Free Attribute Designer",
    description: "Define field types, requirements, and relationships without writing a single line of code.",
    icon: Code,
  },
  {
    title: "Conversational AI Assistant",
    description: "Chat with PowerMakerAI to create, edit, and manage your CRM data — with context-aware, multi-turn interactions.",
    icon: MessageSquare,
  },
  {
    title: "Enterprise-Ready Security",
    description: "Your data is safe — encrypted handling, API token-based access, and deployment-ready for secure environments.",
    icon: Shield,
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* Current Features */}
      <section id="current-features" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-accent/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 inline-block relative px-4">
              Current Features
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon/Visual side */}
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-accent/80 to-accent rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                      <feature.icon className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:w-3/5 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground italic">{feature.tagline}</p>
                  </div>

                  <div className="bg-card border-l-4 border-accent rounded-lg p-4 sm:p-6 shadow-md">
                    <h4 className="text-lg sm:text-xl font-semibold text-accent mb-2 sm:mb-3">What it does</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{feature.whatItDoes}</p>
                  </div>

                  <div className="bg-card rounded-lg p-4 sm:p-6 shadow-md">
                    <h4 className="text-lg sm:text-xl font-semibold text-accent mb-3 sm:mb-4">Visualizer Highlights</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent"></div>
                          </div>
                          <span className="text-sm sm:text-base text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 sm:p-6 border border-accent/20">
                    <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Why it matters</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{feature.whyItMatters}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4 px-4">Key Features</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Everything you need to streamline your CRM development workflow
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in border-none shadow-lg bg-card/80 backdrop-blur-sm group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-accent/50 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-primary">{feature.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;