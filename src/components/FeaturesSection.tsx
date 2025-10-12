import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Search, Code, MessageSquare, FileCode, Download, Network, Shield, ArrowUpRight } from "lucide-react";

const currentFeatures = [
  {
    title: "AI Entity Builder with Visualizer",
    description:
      "Describe your data model in plain English, and PowerMaker AI generates fully-configured Dynamics 365 entities with relationships, fields, and forms.",
    details: [
      "Natural language to entity schema",
      "Real-time visual schema editor",
      "Instant CRM deployment",
    ],
    icon: Puzzle,
  },
  {
    title: "Plugin Trace Log Analyzer",
    description:
      "Upload plugin trace logs and let AI pinpoint errors, suggest fixes, and explain what went wrong in plain language.",
    details: [
      "Instant error detection",
      "Root cause analysis",
      "Actionable remediation steps",
    ],
    icon: Search,
  },
  {
    title: "Advanced AI ChatBot with Live CRM Interaction",
    description:
      "Ask questions, generate code, and execute operations directly in your Dynamics 365 environment—all from a conversational interface.",
    details: [
      "Context-aware responses",
      "Direct CRM integration",
      "Multi-turn conversations",
    ],
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
      <section id="current-features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Current Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
