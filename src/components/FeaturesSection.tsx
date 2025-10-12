import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Search, Code, MessageSquare, FileCode, Download, Network, Shield, ArrowUpRight } from "lucide-react";

const currentFeatures = [
  {
    title: "AI Entity Builder with Visualizer",
    tagline: "Transform natural language into structured CRM schema effortlessly.",
    whatItDoes: "PowerMakerAI turns plain English into structured CRM schemas instantly. For example, saying \"Create a Contact entity with name, email, phone, and a custom status field\" generates a complete entity setup with proper attribute types and configuration",
    highlights: [
      "Interactive drag-and-drop schema builder",
      "Visual hierarchy of entities and fields",
      "Auto-detection of attribute types based on intent",
      "Real-time CRM entity preview",
    ],
    whyItMatters: "It saves developers and consultants time by replacing complex Dynamics 365 customization steps with a simple, conversational and visual approach to entity creation.",
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
      "Auto-detects attribute type based on name & intent",
      "Instant preview of how your entity will look inside CRM",
    ],
    whyItMatters: "Developers and consultants often lose time navigating through multiple Dynamics 365 customizations screens. PowerMakerAI streamlines this by making entity creation as easy as talking to a colleague — and visualizing the output in real time.",
    icon: MessageSquare,
  },
];

const keyFeatures = [
  {
    title: "Natural Language Entity Builder",
    icon: Puzzle,
  },
  {
    title: "Smart Plugin Trace Log Analyzer",
    icon: Search,
  },
  {
    title: "Code-Free Attribute Designer",
    icon: Code,
  },
  {
    title: "Conversational AI Assistant",
    icon: MessageSquare,
  },
  {
    title: "Auto-Generated Plugin & JS Snippets",
    icon: FileCode,
  },
  {
    title: "One-Click CRM Export",
    icon: Download,
  },
  {
    title: "Built-in CRM Schema Visualizer",
    icon: Network,
  },
  {
    title: "Enterprise-Ready Security",
    icon: Shield,
  },
  {
    title: "Scalable & Extensible",
    icon: ArrowUpRight,
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* Current Features */}
      <section id="current-features" className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-accent/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-4 inline-block relative">
              Current Features
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>

          <div className="space-y-24">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon/Visual Side */}
                <div className="lg:w-2/5 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-64 h-64 bg-gradient-to-br from-accent/80 to-accent rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                      <feature.icon className="w-32 h-32 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-3/5 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground italic">{feature.tagline}</p>
                  </div>

                  <div className="bg-card border-l-4 border-accent rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-accent mb-3">What it does</h4>
                    <p className="text-foreground leading-relaxed">{feature.whatItDoes}</p>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-accent mb-4">Visualizer Highlights</h4>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                          </div>
                          <span className="text-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
                    <h4 className="text-xl font-semibold text-primary mb-3">Why it matters</h4>
                    <p className="text-foreground leading-relaxed">{feature.whyItMatters}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section id="key-features" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
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
