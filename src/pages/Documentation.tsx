import { useState, useEffect } from "react";
import { Cpu, Menu, X, ChevronRight, BookOpen, CheckCircle2, Code2, Database, Settings, ArrowRight, Sparkles, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sidebarStructure = [
  {
    title: "Get Started",
    id: "get-started",
    icon: BookOpen,
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
    content: [
      { type: "text", value: "Whether you're a CRM developer, consultant, tester, or business manager, this guide is designed to help you get the most out of Power Maker AI." },
      { type: "alert", severity: "info", value: "<strong>Note:</strong> Official language support is currently available in English only." }
    ]
  },
  "overview": {
    title: "Overview",
    description: "Power Maker AI is a web-based AI assistant designed specifically for users working with Microsoft Dynamics 365 CRM.",
    subtitle: "What Power Maker AI Helps You Do",
    content: [
      { type: "list", items: [
        "Design custom entities and fields tailored to new or ongoing CRM projects, allowing seamless prototyping of CRM customizations.",
        "Analyze plugin trace logs in a human-readable format.",
        "Interact with CRM through a conversational AI assistant for data operations and diagnostics."
      ]},
      { type: "text", value: "Power Maker AI leverages cutting-edge language models and CRM-specific logic to interpret your natural language inputs and turn them into meaningful CRM actions." },
      { type: "alert", severity: "warning", value: "⚠️ Note: Power Maker AI does not directly connect to your CRM environment unless explicitly configured. All data operations and configurations are currently simulated or require manual export/import." }
    ]
  },
  "crm-connection-setup": {
    title: "CRM Connection Setup",
    description: "To configure your CRM connection in PowerMakerAI, follow these steps:",
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
    content: [
      { type: "text", value: "Once you're familiar with the models, you can explore each in detail. Use the navigation menu to dive deeper into individual features, input formats, and best practices." },
      { type: "text", value: "💬 Need help? Reach out at support@powermaker.ai or via the in-app chat." }
    ]
  },
  "crm-customizations": {
    title: "CRM Customizations 0.1",
    description: "The CRM Customizations model allows you to define new entities and fields for Microsoft Dynamics 365 CRM using natural language or a visual interface.",
    content: [
      { type: "text", value: "This model is ideal for CRM developers, functional consultants, and solution designers who want to quickly design or generate entity definitions." }
    ]
  },
  "capabilities-customizations": {
    title: "Key Capabilities",
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
    content: [
      { type: "table", headers: ["Scenario", "How It Helps"], rows: [
        ["New solution", "Draft entity structures quickly"],
        ["Documentation", "Export configurations for specs"]
      ]}
    ]
  },
  "best-practices-customizations": {
    title: "Best Practices",
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
    description: "Analyze CRM plugin trace logs using natural language queries.",
    content: [
      { type: "text", value: "Designed for developers and testers to accelerate debugging." }
    ]
  },
  "capabilities-plugin": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Query logs using plain language",
        "✅ Filter by entity and status",
        "✅ View logs in clean tables"
      ]}
    ]
  },
  "how-it-works-plugin": {
    title: "How It Works",
    sections: [
      {
        subtitle: "1. Natural Language Query",
        content: [
          { type: "text", value: "Type what you're looking for and get relevant logs." }
        ]
      }
    ]
  },
  "output-plugin": {
    title: "Output",
    content: [
      { type: "list", items: [
        "Summary table of matching logs.",
        "Detailed views with stack traces."
      ]}
    ]
  },
  "limitations-plugin": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Requires manual upload of logs.",
        "❌ Works best with standard formats."
      ]}
    ]
  },
  "examples-plugin": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "How It Helps"], rows: [
        ["Debugging", "Identify exception messages quickly"],
        ["Support tickets", "Export trace summaries"]
      ]}
    ]
  },
  "best-practices-plugin": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Start with broad queries.",
        "Use entity names to narrow results.",
        "Review full stack traces."
      ]}
    ]
  },
  "sample-plugin": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Show plugin errors for Account'" }
        ]
      }
    ]
  },
  "coming-soon-plugin": {
    title: "Coming Soon",
    content: [
      { type: "list", items: [
        "🔗 Direct CRM integration",
        "📊 Visual performance charts",
        "🤖 AI-powered fix suggestions"
      ]}
    ]
  },
  "crm-expert": {
    title: "CRM Expert 0.3",
    description: "Your conversational AI assistant for Dynamics 365 CRM.",
    content: [
      { type: "text", value: "Query records, update data, and get guidance using natural language." }
    ]
  },
  "capabilities-expert": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Query CRM data naturally",
        "✅ Perform CRUD operations",
        "✅ Get configuration guidance"
      ]}
    ]
  },
  "how-it-works-expert": {
    title: "How It Works",
    sections: [
      {
        subtitle: "1. Conversational Queries",
        content: [
          { type: "text", value: "Type what you want to do in plain English." }
        ]
      }
    ]
  },
  "behavior-expert": {
    title: "Input/Output Behavior",
    content: [
      { type: "list", items: [
        "Input: Natural language queries",
        "Output: Data tables and guidance"
      ]}
    ]
  },
  "limitations-expert": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Currently in simulation mode.",
        "❌ Requires clear context.",
        "❌ Best for exploration, not automation."
      ]}
    ]
  },
  "examples-expert": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "How It Helps"], rows: [
        ["Data exploration", "Query without FetchXML"],
        ["Learning", "Get CRM guidance"]
      ]}
    ]
  },
  "best-practices-expert": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Be specific with queries.",
        "Provide context for follow-ups.",
        "Review before bulk operations."
      ]}
    ]
  },
  "sample-expert": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Show contacts in California'" }
        ]
      }
    ]
  },
  "coming-soon-expert": {
    title: "Coming Soon",
    content: [
      { type: "list", items: [
        "🧠 Context retention",
        "📄 FetchXML preview",
        "🔗 Power Automate integration"
      ]}
    ]
  }
};

const ContentBlock = ({ item }: { item: any }) => {
  switch (item.type) {
    case "text":
      return (
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: item.value }} />
        </div>
      );

    case "alert":
      const alertConfig = {
        info: { 
          bg: "bg-accent/5 border-accent/20", 
          icon: Info,
          iconColor: "text-accent"
        },
        warning: { 
          bg: "bg-secondary/5 border-secondary/20", 
          icon: AlertTriangle,
          iconColor: "text-secondary"
        },
        success: { 
          bg: "bg-primary/5 border-primary/20", 
          icon: CheckCircle2,
          iconColor: "text-primary"
        }
      };
      const config = alertConfig[item.severity as keyof typeof alertConfig] || alertConfig.info;
      const AlertIcon = config.icon;
      
      return (
        <div className={`p-5 rounded-xl border-l-4 ${config.bg} transition-all duration-300`}>
          <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded-lg ${config.iconColor} bg-current/10 flex items-center justify-center flex-shrink-0`}>
              <AlertIcon className="w-5 h-5" />
            </div>
            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.value }} />
          </div>
        </div>
      );

    case "list":
      return (
        <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/10 shadow-sm">
          {item.label && (
            <p className="font-semibold text-foreground mb-4" dangerouslySetInnerHTML={{ __html: item.label }} />
          )}
          <ul className="space-y-3 list-none">
            {item.items.map((listItem: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="flex-1" dangerouslySetInnerHTML={{ __html: listItem }} />
              </li>
            ))}
          </ul>
        </Card>
      );

    case "table":
      return (
        <Card className="overflow-hidden border-primary/10">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-primary/5 to-accent/5">
                  {item.headers.map((header: string, idx: number) => (
                    <th key={idx} className="text-left py-4 px-6 font-semibold text-foreground border-b-2 border-primary/20">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row: string[], rowIdx: number) => (
                  <tr key={rowIdx} className="border-b border-border hover:bg-primary/5 transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-4 px-6 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      );

    default:
      return null;
  }
};

const Documentation = () => {
  const [activeSectionId, setActiveSectionId] = useState("get-started");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["get-started"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-primary/20 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:bg-primary/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/90 backdrop-blur-md z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-card to-card/50 border-r border-primary/20
          overflow-y-auto z-40 transition-all duration-300 shadow-xl
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-primary/20 hidden lg:block bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Power Maker AI</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarStructure.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.includes(section.id);
            const isActive = activeSectionId === section.id;
            
            return (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`
                    w-full flex items-center justify-between p-3 rounded-xl
                    transition-all duration-300 group
                    ${isActive || isExpanded
                      ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold shadow-sm border border-primary/20'
                      : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isActive || isExpanded ? 'bg-primary/20' : 'bg-muted/50 group-hover:bg-primary/10'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{section.title}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-11 space-y-1 py-2">
                    {section.children.map((child) => {
                      const isChildActive = activeSectionId === child.id;
                      return (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id)}
                          className={`
                            w-full text-left px-3 py-2.5 rounded-lg text-sm
                            transition-all duration-300
                            ${isChildActive
                              ? 'text-primary font-semibold bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary pl-2'
                              : 'text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:pl-2'
                            }
                          `}
                        >
                          <span className="flex items-center gap-2">
                            {isChildActive && <ArrowRight className="w-3 h-3" />}
                            {child.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-72 pt-16 lg:pt-0">
        <div className={`max-w-5xl mx-auto px-6 lg:px-12 py-4 lg:py-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Hero Section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Comprehensive Documentation</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Power Maker AI Docs
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Everything you need to master Power Maker AI
            </p>
          </div>

          {Object.entries(docData).map(([sectionId, section], index) => (
            <section
              key={sectionId}
              id={sectionId}
              className="mb-12 scroll-mt-20"
            >
              {/* Section Title */}
              <Card className="mb-6 p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    {section.subtitle && (
                      <h3 className="text-xl font-semibold text-primary mt-4 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        {section.subtitle}
                      </h3>
                    )}
                  </div>
                </div>
              </Card>

              {/* Section Content */}
              <div className="space-y-6">
                {section.content && section.content.map((contentItem: any, i: number) => (
                  <div key={i}>
                    <ContentBlock item={contentItem} />
                  </div>
                ))}

                {section.sections && section.sections.map((subsection: any, i: number) => (
                  <div key={i} className="space-y-4 mt-10">
                    {subsection.subtitle && (
                      <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                        <h4 className="text-xl font-semibold text-foreground flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          {subsection.subtitle}
                        </h4>
                      </Card>
                    )}
                    {subsection.content && subsection.content.map((contentItem: any, j: number) => (
                      <div key={j}>
                        <ContentBlock item={contentItem} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer CTA */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20 shadow-xl">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Need More Help?</h3>
            <p className="text-muted-foreground mb-6">
              Reach out to our support team or join our community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                Contact Support
              </Button>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                Join Community
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Documentation;