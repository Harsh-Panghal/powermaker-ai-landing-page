import { useState, useEffect } from "react";
import {
  Cpu, Menu, X, ChevronRight, BookOpen, CheckCircle2, AlertCircle, Code2, Database,
  Settings, ArrowRight, Sparkles, Info, AlertTriangle, Search, Home, Zap, Brain,
  Network, Play, Copy, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sidebarStructure = [
  {
    title: "Get Started",
    id: "get-started",
    icon: BookOpen,
    version: "0.1",
    color: "emerald",
    children: [
      { title: "Overview", id: "overview" },
      { title: "CRM Connection Setup", id: "crm-connection-setup" },
      { title: "Quickstart", id: "quickstart" },
      { title: "Available Models", id: "available-models" },
      { title: "What's Next?", id: "whats-next" }
    ]
  },
  {
    title: "CRM Customizations 0.1",
    id: "crm-customizations",
    icon: Settings,
    version: "0.1",
    color: "blue",
    children: [
      { title: "Key Capabilities", id: "capabilities-customizations" },
      { title: "How It Works", id: "how-it-works-customizations" },
      { title: "Output", id: "output-customizations" },
      { title: "Limitations", id: "limitations-customizations" },
      { title: "Example Use Cases", id: "examples-customizations" },
      { title: "Best Practices", id: "best-practices-customizations" },
      { title: "Sample Prompt & Output", id: "sample-customizations" },
      { title: "What's Next?", id: "whats-next-customizations" }
    ]
  },
  {
    title: "Plugin Tracing 0.2",
    id: "plugin-tracing",
    icon: Code2,
    version: "0.2",
    color: "green",
    children: [
      { title: "Key Capabilities", id: "capabilities-plugin" },
      { title: "How It Works", id: "how-it-works-plugin" },
      { title: "Output", id: "output-plugin" },
      { title: "Limitations", id: "limitations-plugin" },
      { title: "Example Use Cases", id: "examples-plugin" },
      { title: "Best Practices", id: "best-practices-plugin" },
      { title: "Sample Prompt & Output", id: "sample-plugin" },
      { title: "Coming Soon", id: "coming-soon-plugin" }
    ]
  },
  {
    title: "CRM Expert 0.3",
    id: "crm-expert",
    icon: Database,
    version: "0.3",
    color: "purple",
    children: [
      { title: "Key Capabilities", id: "capabilities-expert" },
      { title: "How It Works", id: "how-it-works-expert" },
      { title: "Input/Output Behavior", id: "behavior-expert" },
      { title: "Limitations", id: "limitations-expert" },
      { title: "Example Use Cases", id: "examples-expert" },
      { title: "Best Practices", id: "best-practices-expert" },
      { title: "Sample Prompt & Output", id: "sample-expert" },
      { title: "Coming Soon", id: "coming-soon-expert" }
    ]
  }
];

const docData: Record<string, any> = {
  "get-started": {
    title: "Get Started",
    description: "Welcome to Power Maker AI, your AI assistant for Dynamics 365 CRM. This documentation will guide you through everything you need to know—from getting started to using our AI-powered models to accelerate CRM development, analysis, and automation.",
    readTime: "2 min",
    content: [
      { type: "text", value: "Whether you're a CRM developer, consultant, tester, or business manager, this guide is designed to help you get the most out of Power Maker AI." },
      { type: "alert", severity: "info", value: "<strong>Note:</strong> Official language support is currently available in English only." }
    ]
  },
  "overview": {
    title: "Overview",
    description: "Power Maker AI is a web-based AI assistant designed specifically for users working with Microsoft Dynamics 365 CRM.",
    subtitle: "What Power Maker AI Helps You Do",
    readTime: "3 min",
    content: [
      { type: "features", items: [
        { icon: "Settings", title: "Design Custom Entities", desc: "Design custom entities and fields tailored to new or ongoing CRM projects, allowing seamless prototyping of CRM customizations." },
        { icon: "Code2", title: "Analyze Plugin Logs", desc: "Analyze plugin trace logs in a human-readable format with AI-powered diagnostics." },
        { icon: "Database", title: "Conversational AI", desc: "Interact with CRM through a conversational AI assistant for data operations and diagnostics." }
      ]},
      { type: "text", value: "Power Maker AI leverages cutting-edge language models and CRM-specific logic to interpret your natural language inputs and turn them into meaningful CRM actions." },
      { type: "alert", severity: "warning", value: "⚠️ Note: Power Maker AI does not directly connect to your CRM environment unless explicitly configured. All data operations and configurations are currently simulated or require manual export/import." }
    ]
  },
  "crm-connection-setup": {
    title: "CRM Connection Setup",
    description: "To configure your CRM connection in PowerMakerAI, follow these steps:",
    readTime: "5 min",
    sections: [
      {
        subtitle: "Step 1: Navigate to CRM Connection Settings",
        content: [
          { type: "text", value: "Go to <strong>Settings → CRM Connection Detail.</strong>" },
          { type: "text", value: "You will see a form where you need to enter your CRM connection details." }
        ]
      },
      {
        subtitle: "Important Notes",
        content: [
          { type: "list", items: [
            "<strong>Single Connection Limit (Beta):</strong><br />This beta version supports only <strong>one active CRM connection</strong> at a time.",
            "<strong>Azure App Registration Required:</strong><br />You may need to <strong>register your application in Azure</strong> to obtain the necessary credentials (Client ID, Tenant ID, etc.).",
            "<strong>User Permissions:</strong><br />Ensure that the user has the appropriate <strong>Dataverse security roles and permissions.</strong><br />PowerMakerAI adheres to standard Dataverse user security when interacting with your environment."
          ]}
        ]
      }
    ]
  },
  "quickstart": {
    title: "Quickstart",
    description: "Get up and running with Power Maker AI in minutes.",
    readTime: "4 min",
    sections: [
      {
        subtitle: "1. Sign In / Access the App",
        content: [
          { type: "text", value: "Visit <strong>https://chat.powermaker.ai</strong> and log in with your user account. New users may be prompted to create an account." },
          { type: "text", value: "📝 Users can log in using their Google account or sign up manually with an email ID and password." }
        ]
      },
      {
        subtitle: "2. Choose a Model",
        content: [
          { type: "text", value: "You can start working by selecting one of the available models from the sidebar:" },
          { type: "list", items: ["CRM Customizations", "Plugin Tracing", "CRM Expert"] },
          { type: "text", value: "Each model is tailored to solve a different problem—see the next section for a breakdown." }
        ]
      },
      {
        subtitle: "3. Interact and Generate Output",
        content: [
          { type: "text", value: "Use natural language or UI-based prompts depending on the model." },
          { type: "list", label: "Examples:", items: [
            "'Create a custom entity for API Configuration'",
            "'Show plugin errors from the last 7 days'",
            "'Update all contacts in Delhi to Inactive'"
          ]},
          { type: "list", label: "Outputs can include:", items: [
            "CRM schema mock-ups",
            "Exception trace analysis",
            "Data operation summaries",
            "Configuration exports (coming soon)"
          ]}
        ]
      },
      {
        subtitle: "4. Export / Apply Outputs",
        content: [
          { type: "text", value: "Most outputs can be copied or downloaded. You'll soon be able to directly push changes to your CRM (integration in development)." }
        ]
      }
    ]
  },
  "available-models": {
    title: "Available Models",
    readTime: "6 min",
    sections: [
      {
        subtitle: "1. CRM Customizations",
        content: [
          { type: "text", value: "<strong>Purpose:</strong> Helps you quickly design custom entities and fields using simple prompts or structured controls." },
          { type: "list", label: "Capabilities:", items: [
            "Create entity prototypes",
            "Define fields and datatypes",
            "Preview configurations before exporting"
          ]},
          { type: "list", label: "Limitations:", items: [
            "No live deployment to CRM (yet)",
            "Does not handle advanced logic (e.g., business rules, workflows)"
          ]}
        ]
      },
      {
        subtitle: "2. Plugin Tracing",
        content: [
          { type: "text", value: "<strong>Purpose:</strong> Use natural language to query plugin trace logs and receive readable diagnostics." },
          { type: "list", label: "Capabilities:", items: [
            "Filter logs by entity, date, error status, etc.",
            "Translate raw logs into clean summaries and exceptions",
            "View structured trace tables"
          ]},
          { type: "list", label: "Limitations:", items: [
            "Requires logs to be available in the system or uploaded",
            "Works best with standard plugin trace formats"
          ]}
        ]
      },
      {
        subtitle: "3. CRM Expert",
        content: [
          { type: "text", value: "<strong>Purpose:</strong> Your all-in-one conversational AI for CRM data tasks, config queries, and error diagnostics." },
          { type: "list", label: "Capabilities:", items: [
            "Perform CRUD-like operations through text (simulation)",
            "Suggest configuration steps",
            "Answer questions like a Dynamics consultant"
          ]},
          { type: "list", label: "Limitations:", items: [
            "Requires clear CRM context for deeper operations",
            "Best for guided exploration, not high-volume automation"
          ]}
        ]
      }
    ]
  },
  "whats-next": {
    title: "What's Next?",
    readTime: "1 min",
    content: [
      { type: "text", value: "Once you're familiar with the models, you can explore each in detail. Use the navigation menu to dive deeper into individual features, input formats, and best practices." },
      { type: "text", value: "💬 Need help? Reach out at support@powermaker.ai or via the in-app chat." }
    ]
  },
  "crm-customizations": {
    title: "CRM Customizations 0.1",
    description: "The CRM Customizations model allows you to define new entities and fields for Microsoft Dynamics 365 CRM using natural language or a visual interface. It simplifies the schema design process—whether you're prototyping or working on live project specifications.",
    readTime: "2 min",
    content: [
      { type: "text", value: "This model is ideal for CRM developers, functional consultants, and solution designers who want to quickly design or generate entity definitions." }
    ]
  },
  "capabilities-customizations": {
    title: "Key Capabilities",
    readTime: "3 min",
    content: [
      { type: "list", items: [
        "✅ Create custom entities from scratch.",
        "✅ Add multiple fields using natural phrases.",
        "✅ Choose from various field types.",
        "✅ Set field requirements.",
        "✅ Visualize schema before exporting."
      ]}
    ]
  },
  "how-it-works-customizations": {
    title: "How It Works",
    description: "You can interact with the model in two main ways:",
    readTime: "4 min",
    sections: [
      {
        subtitle: "1. Natural Language Input",
        content: [
          { type: "text", value: "Just describe what you want to build." }
        ]
      },
      {
        subtitle: "2. Visual Field Designer",
        content: [
          { type: "text", value: "Use UI controls to add and configure fields manually." }
        ]
      }
    ]
  },
  "output-customizations": {
    title: "Output",
    readTime: "2 min",
    content: [
      { type: "list", items: [
        "View a clean schema summary.",
        "See suggested logical names for fields.",
        "Copy the configuration for CRM deployment."
      ]}
    ]
  },
  "limitations-customizations": {
    title: "Limitations",
    readTime: "2 min",
    content: [
      { type: "list", items: [
        "❌ Does not support editing existing entities yet.",
        "❌ No direct CRM deployment.",
        "❌ Does not include relationships or business rules."
      ]}
    ]
  },
  "examples-customizations": {
    title: "Example Use Cases",
    readTime: "3 min",
    content: [
      { type: "table", headers: ["Scenario", "How It Helps"], rows: [
        ["New solution", "Draft entity structures quickly"],
        ["Documentation", "Export configurations for specs"]
      ]}
    ]
  },
  "best-practices-customizations": {
    title: "Best Practices",
    readTime: "2 min",
    content: [
      { type: "list", items: [
        "Start with natural language for quick prototyping.",
        "Use the visual designer to fine-tune.",
        "Always review field names before exporting."
      ]}
    ]
  },
  "sample-customizations": {
    title: "Sample Prompt & Output",
    readTime: "2 min",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Create an entity called Onboarding Task'" }
        ]
      }
    ]
  },
  "whats-next-customizations": {
    title: "What's Next?",
    readTime: "1 min",
    content: [
      { type: "list", items: [
        "✨ Update existing entities.",
        "✨ Relationship support.",
        "✨ Direct CRM deployment."
      ]}
    ]
  },
  "plugin-tracing": {
    title: "Plugin Tracing 0.2",
    description: "The Plugin Tracing model in Power Maker AI helps you analyze Microsoft Dynamics 365 CRM plugin trace logs using natural language queries.",
    readTime: "2 min",
    content: [
      { type: "text", value: "Designed for developers and testers to accelerate debugging." }
    ]
  },
  "capabilities-plugin": {
    title: "Key Capabilities",
    readTime: "3 min",
    content: [
      { type: "list", items: [
        "✅ Query logs using plain language",
        "✅ Filter by entity and status",
        "✅ View logs in clean tables"
      ]}
    ]
  },
  "crm-expert": {
    title: "CRM Expert 0.3",
    description: "The CRM Expert model acts as your AI-powered Dynamics 365 consultant.",
    readTime: "2 min",
    content: [
      { type: "text", value: "Ask questions, run queries, and perform CRM operations through natural conversation." }
    ]
  }
};

export default function Documentation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("get-started");
  const [expandedSections, setExpandedSections] = useState<string[]>(["get-started"]);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(["Get Started"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section-id]");
      let current = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = section.getAttribute("data-section-id") || "";
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
        updateBreadcrumb(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const updateBreadcrumb = (sectionId: string) => {
    const parent = sidebarStructure.find(s =>
      s.id === sectionId || s.children.some(c => c.id === sectionId)
    );
    
    if (parent) {
      const child = parent.children.find(c => c.id === sectionId);
      if (child) {
        setBreadcrumb([parent.title, child.title]);
      } else {
        setBreadcrumb([parent.title]);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const renderContent = (content: any, index: number) => {
    switch (content.type) {
      case "text":
        return (
          <p 
            key={index} 
            className="text-base leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content.value }}
          />
        );

      case "features":
        return (
          <div key={index} className="grid md:grid-cols-3 gap-6 my-8">
            {content.items.map((item: any, i: number) => {
              const Icon = item.icon === "Settings" ? Settings : item.icon === "Code2" ? Code2 : Database;
              return (
                <Card 
                  key={i}
                  className="group p-6 border-2 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        );

      case "list":
        return (
          <div key={index} className="my-6">
            {content.label && (
              <p className="font-medium text-foreground mb-3" dangerouslySetInnerHTML={{ __html: content.label }} />
            )}
            <ul className="space-y-3">
              {content.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start group">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span 
                    className="text-muted-foreground leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: item }} 
                  />
                </li>
              ))}
            </ul>
          </div>
        );

      case "alert":
        const isWarning = content.severity === "warning";
        return (
          <div
            key={index}
            className={`my-6 p-6 rounded-xl border-2 ${
              isWarning
                ? "bg-secondary/10 border-secondary/30"
                : "bg-accent/10 border-accent/30"
            } animate-fade-in`}
          >
            <div className="flex gap-4">
              {isWarning ? (
                <AlertTriangle className="w-6 h-6 text-secondary flex-shrink-0" />
              ) : (
                <Info className="w-6 h-6 text-accent flex-shrink-0" />
              )}
              <p 
                className="text-sm leading-relaxed text-foreground" 
                dangerouslySetInnerHTML={{ __html: content.value }} 
              />
            </div>
          </div>
        );

      case "table":
        return (
          <div key={index} className="my-8 overflow-hidden rounded-xl border-2 border-border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  {content.headers.map((header: string, i: number) => (
                    <th key={i} className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row: string[], i: number) => (
                  <tr 
                    key={i} 
                    className="border-t border-border hover:bg-muted/30 transition-colors group"
                  >
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="px-6 py-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Neural Network Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-accent" />
              <line x1="30" y1="30" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
              <line x1="30" y1="30" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-xl border-b border-border z-50 shadow-sm">
        <div className="h-full px-6 flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Left: Logo + Breadcrumb */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-all group-hover:scale-105">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg hidden sm:block">PMAI</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="w-4 h-4" />
              {breadcrumb.map((crumb, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span className={i === breadcrumb.length - 1 ? "text-foreground font-medium" : ""}>
                    {crumb}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Search */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border hover:border-accent/50 transition-colors flex-1 max-w-md mx-8 group">
            <Search className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="bg-transparent outline-none text-sm flex-1"
            />
            <kbd className="px-2 py-1 text-xs bg-background rounded border border-border">⌘K</kbd>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <Button 
              variant="default"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-lg shadow-accent/20"
            >
              <Zap className="w-4 h-4" />
              Get Started
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-80 h-full bg-background border-r border-border shadow-2xl animate-slide-in-left overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-lg">Documentation</h3>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Mobile Sidebar Content */}
              <nav className="space-y-2">
                {sidebarStructure.map((section, idx) => {
                  const Icon = section.icon;
                  const isExpanded = expandedSections.includes(section.id);
                  
                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => {
                          toggleSection(section.id);
                          scrollToSection(section.id);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                          activeSection === section.id
                            ? "bg-accent/10 text-accent"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium text-sm">{section.title}</span>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} 
                        />
                      </button>
                      
                      {isExpanded && (
                        <div className="ml-8 mt-1 space-y-1 animate-accordion-down">
                          {section.children.map((child, childIdx) => (
                            <button
                              key={child.id}
                              onClick={() => scrollToSection(child.id)}
                              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                activeSection === child.id
                                  ? "text-accent font-medium"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                              style={{ animationDelay: `${childIdx * 50}ms` }}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 w-80 h-[calc(100vh-4rem)] bg-background/50 backdrop-blur-sm border-r border-border overflow-y-auto z-30">
        <div className="p-6">
          {/* Progress Rail */}
          <div className="absolute left-6 top-24 bottom-6 w-0.5 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
          
          <nav className="space-y-2 relative">
            {sidebarStructure.map((section, idx) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              const isActive = activeSection === section.id || section.children.some(c => c.id === activeSection);
              
              return (
                <div key={section.id} className="relative">
                  {/* Progress Dot */}
                  <div 
                    className={`absolute -left-[19px] top-5 w-3 h-3 rounded-full border-2 border-background transition-all duration-300 ${
                      isActive 
                        ? "bg-accent shadow-[0_0_12px_rgba(16,185,129,0.6)] scale-125 animate-glow-pulse" 
                        : "bg-muted"
                    }`}
                  />
                  
                  <button
                    onClick={() => {
                      toggleSection(section.id);
                      scrollToSection(section.id);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all group ${
                      isActive
                        ? "bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 shadow-lg"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-all ${
                        isActive 
                          ? "bg-accent text-accent-foreground" 
                          : "bg-muted/50 group-hover:bg-accent/20"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">{section.title}</div>
                        <div className={`text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block ${
                          section.version === "0.1" ? "bg-blue-100 text-blue-700" :
                          section.version === "0.2" ? "bg-green-100 text-green-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          Beta
                        </div>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-90" : ""
                      }`} 
                    />
                  </button>
                  
                  {isExpanded && (
                    <div className="ml-14 mt-2 space-y-1 animate-accordion-down">
                      {section.children.map((child, childIdx) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all animate-cascade relative group ${
                            activeSection === child.id
                              ? "text-accent font-semibold bg-accent/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                          }`}
                          style={{ animationDelay: `${childIdx * 50}ms` }}
                        >
                          {activeSection === child.id && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full" />
                          )}
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-80 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/20 text-primary-foreground">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6 animate-float">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">AI-Powered CRM Assistant</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
                Power Maker AI Documentation
              </h1>
              
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Master AI-accelerated CRM development with comprehensive guides, tutorials, and best practices for Microsoft Dynamics 365.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("quickstart")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/30 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Quickstart Guide
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View API Reference
                </Button>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              {[
                { icon: Settings, title: "Design Entities", desc: "Prototype CRM schemas with AI" },
                { icon: Code2, title: "Trace Plugins", desc: "Debug with natural language" },
                { icon: Database, title: "Expert Queries", desc: "Conversational data operations" }
              ].map((feature, i) => (
                <Card 
                  key={i} 
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group"
                  style={{ animationDelay: `${(i + 2) * 100}ms` }}
                >
                  <feature.icon className="w-8 h-8 mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
          {sidebarStructure.map((section) => (
            <div key={section.id}>
              {/* Parent Section */}
              <section 
                id={section.id}
                data-section-id={section.id}
                className="scroll-mt-24 animate-fade-in-up"
              >
                <Card className="p-10 border-2 shadow-xl hover:shadow-2xl transition-shadow bg-gradient-to-br from-card via-card to-accent/5">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-accent/60 shadow-lg">
                      <section.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                          {docData[section.id]?.title}
                        </h2>
                        {docData[section.id]?.readTime && (
                          <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/50">
                            {docData[section.id].readTime} read
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {docData[section.id]?.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {docData[section.id]?.subtitle && (
                      <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                        {docData[section.id].subtitle}
                      </h3>
                    )}
                    
                    {docData[section.id]?.content?.map((item: any, idx: number) =>
                      renderContent(item, idx)
                    )}
                    
                    {docData[section.id]?.sections?.map((subsection: any, idx: number) => (
                      <div key={idx} className="mt-10">
                        <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
                          {subsection.subtitle}
                        </h3>
                        <div className="space-y-4">
                          {subsection.content.map((item: any, i: number) =>
                            renderContent(item, i)
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              {/* Child Sections */}
              {section.children.map((child) => {
                const childData = docData[child.id];
                if (!childData) return null;

                return (
                  <section
                    key={child.id}
                    id={child.id}
                    data-section-id={child.id}
                    className="scroll-mt-24 mt-12 animate-fade-in-up"
                  >
                    <Card className="p-8 border-2 hover:border-accent/30 transition-all hover:shadow-lg">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-3xl font-bold text-foreground">
                            {childData.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {childData.readTime && (
                              <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted/50">
                                {childData.readTime}
                              </span>
                            )}
                            <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        {childData.description && (
                          <p className="text-muted-foreground leading-relaxed">
                            {childData.description}
                          </p>
                        )}
                      </div>

                      <div className="space-y-6">
                        {childData.subtitle && (
                          <h4 className="text-xl font-semibold text-foreground">
                            {childData.subtitle}
                          </h4>
                        )}
                        
                        {childData.content?.map((item: any, idx: number) =>
                          renderContent(item, idx)
                        )}
                        
                        {childData.sections?.map((subsection: any, idx: number) => (
                          <div key={idx} className="mt-8">
                            <h4 className="text-xl font-semibold text-foreground mb-4">
                              {subsection.subtitle}
                            </h4>
                            <div className="space-y-4">
                              {subsection.content.map((item: any, i: number) =>
                                renderContent(item, i)
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </section>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground mt-24">
          <div className="absolute inset-0">
            <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" fill="url(#wave-gradient)" />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
                  <stop offset="100%" stopColor="rgba(245,158,11,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-float">
                <Sparkles className="w-8 h-8 text-accent animate-glow-pulse" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">Unlock CRM Superpowers</h3>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to accelerate your Dynamics 365 development? Get started with Power Maker AI today.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl shadow-accent/30"
              >
                <Network className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Join Beta Waitlist
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
