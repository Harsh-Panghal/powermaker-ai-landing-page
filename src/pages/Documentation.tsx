import { useState, useEffect } from "react";
import { Cpu, Menu, X, ChevronRight, BookOpen, CheckCircle2, AlertCircle, Code2, Database, Settings, ArrowRight, Sparkles, Info, AlertTriangle } from "lucide-react";
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
    description: "The CRM Customizations model allows you to define new entities and fields for Microsoft Dynamics 365 CRM using natural language or a visual interface. It simplifies the schema design process—whether you're prototyping or working on live project specifications.",
    content: [
      { type: "text", value: "This model is ideal for CRM developers, functional consultants, and solution designers who want to quickly design or generate entity definitions without diving into complex forms or technical configurations." }
    ]
  },
  "capabilities-customizations": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Create custom entities from scratch.",
        "✅ Add multiple fields (columns) using natural phrases.",
        "✅ Choose from various field types: Text, Date, Number, Option Set, etc.",
        "✅ Set field requirements (e.g., required, optional).",
        "✅ Visualize schema before exporting.",
        "🟡 Upcoming: Support for editing existing entities.",
        "🟡 Upcoming: Support for relationships (lookups, N:N, 1:N)."
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
          { type: "text", value: "Just describe what you want to build." },
          { type: "list", label: "Example prompts:", items: [
            "'Create an entity called Project with fields: Project Name (text), Start Date (date), Status (option set).'",
            "'I need an entity for Event Registration with attendee name, event date, and participation status.'"
          ]},
          { type: "list", label: "The model will:", items: [
            "Parse your intent.",
            "Create a structured representation of the entity.",
            "Suggest field types and requirement levels.",
            "Let you fine-tune the result before generating output."
          ]}
        ]
      },
      {
        subtitle: "2. Visual Field Designer (UI Controls)",
        content: [
          { type: "list", label: "For users who prefer structured input:", items: [
            "Add or remove fields manually.",
            "Select data types from a dropdown.",
            "Set required/optional toggle.",
            "Rename or reorder fields.",
            "See a live preview of the entity schema."
          ]}
        ]
      }
    ]
  },
  "output-customizations": {
    title: "Output",
    content: [
      { type: "list", label: "Once your entity is designed, you can:", items: [
        "View a clean schema summary.",
        "See suggested logical names for fields.",
        "Copy the configuration for CRM deployment (XML/JSON – coming soon).",
        "Use the structure for documentation or mockups."
      ]}
    ]
  },
  "limitations-customizations": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Currently does not support editing existing entities (coming soon).",
        "❌ Does not yet include: Entity icons or color customization, Relationship definitions (N:1, 1:N, N:N), Business Rules, Views, or Forms",
        "❌ No direct CRM deployment (manual export only).",
        "❌ For Lookup customizations, use the exact entity name for accurate results."
      ]}
    ]
  },
  "examples-customizations": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "How CRM Customizations Helps"], rows: [
        ["Starting a new solution", "Quickly draft entity structures with minimal clicks"],
        ["Business discussions", "Use schema preview to align requirements visually"],
        ["Functional documentation", "Export configurations to include in requirement specs"],
        ["Pre-dev planning", "Save time by designing entities before going to PowerApps"]
      ]}
    ]
  },
  "best-practices-customizations": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Start with natural language if you're unsure what fields you need—Power Maker AI will assist with intelligent defaults.",
        "Use the visual designer to fine-tune and validate your schema.",
        "Always review field names and types before exporting or using in a live CRM system.",
        "Add entity descriptions for better context (future support coming)."
      ]}
    ]
  },
  "sample-customizations": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Create an entity called 'Onboarding Task' with fields: Task Name (text), Due Date (date), Assigned To (lookup to user), Completed (boolean)'" }
        ]
      },
      {
        subtitle: "Output Preview:",
        content: [
          { type: "text", value: "<strong>Entity:</strong> Onboarding Task" },
          { type: "list", label: "<strong>Fields:</strong>", items: [
            "Task Name (Text, Required)",
            "Due Date (Date, Optional)",
            "Assigned To (Lookup to User, Required)",
            "Completed (Boolean, Optional)"
          ]}
        ]
      }
    ]
  },
  "whats-next-customizations": {
    title: "What's Next?",
    content: [
      { type: "list", label: "We're working on additional features such as:", items: [
        "✨ Update existing entity metadata.",
        "✨ Relationships (Lookups, N:N, 1:N).",
        "✨ Direct deployment into CRM.",
        "✨ Downloadable export formats for solution packaging."
      ]}
    ]
  },
  "plugin-tracing": {
    title: "Plugin Tracing 0.2",
    description: "The Plugin Tracing model in Power Maker AI helps you analyze Microsoft Dynamics 365 CRM plugin trace logs using natural language queries. Instead of manually inspecting complex trace logs, this model simplifies diagnostics by extracting meaningful summaries and exception insights from raw plugin data.",
    content: [
      { type: "text", value: "It is designed for developers, testers, admins, and support teams to accelerate debugging, reduce analysis effort, and communicate issues more clearly." }
    ]
  },
  "capabilities-plugin": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Query plugin logs using plain language",
        "✅ Filter logs by entity, plugin name, execution status, and time frame",
        "✅ View logs in a clean, searchable table",
        "✅ Automatically extract and summarize: Main exception messages, Stack trace highlights, Error location context",
        "✅ Copy raw trace or summarized output",
        "🟡 Upcoming: Integration with CRM trace logs (live pull)",
        "🟡 Upcoming: Export of trace summaries for tickets or documentation"
      ]}
    ]
  },
  "how-it-works-plugin": {
    title: "How It Works",
    sections: [
      {
        subtitle: "1. Natural Language Query",
        content: [
          { type: "text", value: "Type what you're looking for. The model will interpret the request and return relevant logs." },
          { type: "list", label: "Examples:", items: [
            "'Show plugin errors for the Opportunity entity from last 7 days'",
            "'Get failed plugin traces for PostAccountUpdate plugin'",
            "'List all successful plugin runs for the Contact entity yesterday'"
          ]},
          { type: "list", label: "The model will:", items: [
            "Identify your filter criteria",
            "Match logs based on your input",
            "Return them in a structured table"
          ]}
        ]
      },
      {
        subtitle: "2. Result Table & Actions",
        content: [
          { type: "list", label: "For each result, you get:", items: [
            "Timestamp",
            "Plugin Name",
            "Entity / Message",
            "Execution Status",
            "Interactive link to view trace details"
          ]},
          { type: "list", label: "Each detail view includes:", items: [
            "Complete stack trace",
            "Exception message",
            "Error location and line number (if available)"
          ]}
        ]
      }
    ]
  },
  "output-plugin": {
    title: "Output",
    content: [
      { type: "list", label: "The Plugin Tracing model provides:", items: [
        "A summary table of plugin trace logs matching your query.",
        "Detailed views for each log with exception details and stack traces.",
        "Copy-to-clipboard functionality for sharing with your team."
      ]}
    ]
  },
  "limitations-plugin": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Currently requires manual upload of plugin trace logs (coming soon: live CRM integration).",
        "❌ Works best with standard plugin trace format from Dynamics 365.",
        "❌ Does not support custom trace log formats at this time.",
        "❌ Large trace logs may require pagination or filtering."
      ]}
    ]
  },
  "examples-plugin": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "How Plugin Tracing Helps"], rows: [
        ["Debugging plugin errors", "Quickly identify exception messages and error locations"],
        ["Performance analysis", "View execution times and identify slow plugins"],
        ["Support tickets", "Export trace summaries to share with support teams"],
        ["Post-deployment testing", "Verify plugin behavior after CRM updates"]
      ]}
    ]
  },
  "best-practices-plugin": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Start with broad queries and refine based on results.",
        "Use entity names and date ranges to narrow down results.",
        "Always review the full stack trace for context before applying fixes.",
        "Export trace summaries for documentation or support tickets."
      ]}
    ]
  },
  "sample-plugin": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Show all plugin errors for the Account entity from the last 24 hours'" }
        ]
      },
      {
        subtitle: "Output Preview:",
        content: [
          { type: "text", value: "<strong>Results:</strong> 3 plugin errors found for Account entity" },
          { type: "list", items: [
            "PostAccountUpdate - Error: Object reference not set to an instance of an object",
            "PreAccountCreate - Error: Timeout expired. The timeout period elapsed",
            "PostAccountUpdate - Error: Invalid plugin execution context"
          ]}
        ]
      }
    ]
  },
  "coming-soon-plugin": {
    title: "Coming Soon",
    content: [
      { type: "list", label: "We're enhancing Plugin Tracing with:", items: [
        "🔗 Direct integration with CRM plugin trace logs (no manual upload)",
        "📊 Visual charts for plugin performance and error trends",
        "🤖 AI-powered root cause analysis and fix suggestions",
        "📄 Export to PDF or Excel for reporting"
      ]},
      { type: "text", value: "💡 Plugin Tracing turns complex logs into actionable insights — debug faster, ship better." }
    ]
  },
  "crm-expert": {
    title: "CRM Expert 0.3",
    description: "CRM Expert is your conversational AI assistant for all things Dynamics 365 CRM. It allows you to perform data operations, troubleshoot issues, and explore CRM configurations using natural language—no complex queries or technical knowledge required.",
    content: [
      { type: "text", value: "Whether you need to query records, update data, or get guidance on CRM best practices, CRM Expert is here to help." }
    ]
  },
  "capabilities-expert": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Query CRM data using natural language (e.g., 'Show all active contacts in New York').",
        "✅ Perform data operations (Create, Read, Update, Delete) through conversation.",
        "✅ Get configuration guidance and best practices.",
        "✅ Troubleshoot errors and provide diagnostic insights.",
        "✅ Explain CRM concepts and relationships.",
        "🟡 Upcoming: Direct CRM integration for live data operations.",
        "🟡 Upcoming: Advanced analytics and reporting."
      ]}
    ]
  },
  "how-it-works-expert": {
    title: "How It Works",
    sections: [
      {
        subtitle: "1. Conversational Queries",
        content: [
          { type: "text", value: "Simply type what you want to do or know in plain English." },
          { type: "list", label: "Examples:", items: [
            "'List all opportunities created this month'",
            "'How do I create a custom entity?'",
            "'Update all inactive accounts to status Archived'"
          ]},
          { type: "list", label: "CRM Expert will:", items: [
            "Understand your intent",
            "Generate appropriate FetchXML or actions",
            "Return results in a readable format",
            "Provide context and explanations"
          ]}
        ]
      },
      {
        subtitle: "2. Data Operations",
        content: [
          { type: "list", label: "Supported operations:", items: [
            "Retrieve records with filters",
            "Create new records",
            "Update existing records",
            "Delete records (with confirmation)",
            "Bulk operations (coming soon)"
          ]}
        ]
      }
    ]
  },
  "behavior-expert": {
    title: "Input/Output Behavior",
    content: [
      { type: "list", label: "Input:", items: [
        "Natural language queries or commands",
        "Follow-up questions to refine results",
        "Context from previous interactions"
      ]},
      { type: "list", label: "Output:", items: [
        "Data tables with results",
        "Confirmation messages for operations",
        "Guidance and explanations",
        "Error messages with troubleshooting tips"
      ]}
    ]
  },
  "limitations-expert": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Currently operates in simulation mode (no live CRM connection by default).",
        "❌ Requires clear context for complex operations.",
        "❌ Best for exploratory queries, not high-volume automation.",
        "❌ May require follow-up clarification for ambiguous requests."
      ]}
    ]
  },
  "examples-expert": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "How CRM Expert Helps"], rows: [
        ["Data exploration", "Query records without writing FetchXML"],
        ["Quick updates", "Update records through conversation"],
        ["Learning CRM", "Get explanations and guidance on CRM concepts"],
        ["Troubleshooting", "Diagnose errors and get fix suggestions"]
      ]}
    ]
  },
  "best-practices-expert": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Be specific with your queries to get accurate results.",
        "Provide context when asking follow-up questions.",
        "Review results before confirming bulk operations.",
        "Use CRM Expert for learning and exploration, not production automation."
      ]}
    ]
  },
  "sample-expert": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Show all contacts in California with email addresses'" }
        ]
      },
      {
        subtitle: "Output Preview:",
        content: [
          { type: "text", value: "<strong>Results:</strong> Found 42 contacts in California" },
          { type: "list", items: [
            "John Doe - john.doe@example.com",
            "Jane Smith - jane.smith@example.com",
            "Bob Johnson - bob.johnson@example.com"
          ]},
          { type: "text", value: "Would you like to export these results or refine the query?" }
        ]
      }
    ]
  },
  "coming-soon-expert": {
    title: "Coming Soon",
    content: [
      { type: "list", label: "We're enhancing CRM Expert with:", items: [
        "🧠 Context retention across longer conversations",
        "📄 FetchXML preview and editing before execution",
        "🔗 Integration with Power Automate and Azure Logic Apps",
        "🧩 Plugin registration and deployment from chat"
      ]},
      { type: "text", value: "💡 CRM Expert is your natural language gateway to Dynamics CRM. No buttons, no code — just ask." }
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
          bg: "bg-accent/5 border-accent/20 hover:border-accent/30", 
          icon: Info,
          iconColor: "text-accent"
        },
        warning: { 
          bg: "bg-secondary/5 border-secondary/20 hover:border-secondary/30", 
          icon: AlertTriangle,
          iconColor: "text-secondary"
        },
        success: { 
          bg: "bg-primary/5 border-primary/20 hover:border-primary/30", 
          icon: CheckCircle2,
          iconColor: "text-primary"
        }
      };
      const config = alertConfig[item.severity as keyof typeof alertConfig] || alertConfig.info;
      const AlertIcon = config.icon;
      
      return (
        <div className={`p-5 rounded-xl border-l-4 ${config.bg} transition-all duration-300 backdrop-blur-sm`}>
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
        <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
          {item.label && (
            <p className="font-semibold text-foreground mb-4 flex items-center gap-2" dangerouslySetInnerHTML={{ __html: item.label }} />
          )}
          <ul className="space-y-3 list-none">
            {item.items.map((listItem: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground group">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
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
                  <tr key={rowIdx} className="border-b border-border hover:bg-primary/5 transition-colors duration-200">
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

    case "code":
      return (
        <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-primary/10 overflow-hidden">
          <div className="bg-primary/5 px-4 py-2 border-b border-primary/10 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">Code</span>
          </div>
          <div className="p-4 overflow-x-auto">
            <pre className="text-sm text-foreground font-mono">
              <code>{item.value}</code>
            </pre>
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
      const offset = 100;
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-primary/20 px-4 py-3 shadow-sm">
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
            className="hover:bg-primary/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/90 backdrop-blur-md z-30 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 bg-gradient-to-b from-card to-card/50 border-r border-primary/20
          overflow-y-auto z-40 transition-all duration-300 ease-in-out shadow-xl
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
                    transition-all duration-300 group relative overflow-hidden
                    ${isActive || isExpanded
                      ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold shadow-sm border border-primary/20'
                      : 'hover:bg-primary/5 text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {(isActive || isExpanded) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse" />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive || isExpanded ? 'bg-primary/20' : 'bg-muted/50 group-hover:bg-primary/10'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{section.title}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform duration-300 relative z-10 ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-11 space-y-1 py-2 animate-accordion-down">
                    {section.children.map((child) => {
                      const isChildActive = activeSectionId === child.id;
                      return (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id)}
                          className={`
                            w-full text-left px-3 py-2.5 rounded-lg text-sm
                            transition-all duration-300 relative group
                            ${isChildActive
                              ? 'text-primary font-semibold bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary pl-2 shadow-sm'
                              : 'text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:pl-2'
                            }
                          `}
                        >
                          <span className="flex items-center gap-2">
                            {isChildActive && <ArrowRight className="w-3 h-3 animate-pulse" />}
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
      <main className="flex-1 lg:ml-0">
        <div className={`max-w-5xl mx-auto px-6 lg:px-12 py-8 lg:py-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Comprehensive Documentation</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Power Maker AI Docs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Everything you need to master Power Maker AI and build amazing solutions
            </p>
          </div>

          {Object.entries(docData).map(([sectionId, section], index) => (
            <section
              key={sectionId}
              id={sectionId}
              className="mb-16 scroll-mt-20"
            >
              {/* Section Title */}
              <Card className="mb-8 p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
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
                  <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                    <ContentBlock item={contentItem} />
                  </div>
                ))}

                {section.sections && section.sections.map((subsection: any, i: number) => (
                  <div key={i} className="space-y-4 mt-10 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
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
                      <div key={j} className="animate-fade-in" style={{ animationDelay: `${j * 50}ms` }}>
                        <ContentBlock item={contentItem} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer CTA */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20 shadow-xl animate-fade-in">
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
