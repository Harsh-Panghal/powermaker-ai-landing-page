import { useState, useEffect } from "react";
import { Cpu, Menu, X, ChevronRight, BookOpen, CheckCircle2, AlertCircle, Code2, Database, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            "💡 Friendly Summary of the error",
            "📄 Exception message",
            "🧩 Stack trace context",
            "🔍 Raw trace (copyable)"
          ]}
        ]
      }
    ]
  },
  "output-plugin": {
    title: "Output",
    content: [
      { type: "list", label: "The Plugin Tracing model outputs results in a two-level format:", items: [
        "Table View: Summary of all matching logs",
        "Expanded View: Detailed explanation with exception messages"
      ]},
      { type: "list", label: "You can:", items: [
        "Copy a readable summary for use in tickets/emails",
        "Inspect stack trace for root cause",
        "Save raw log if needed for manual CRM troubleshooting"
      ]}
    ]
  },
  "limitations-plugin": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Does not currently connect live to CRM to pull plugin logs (requires import or preloaded logs)",
        "❌ Cannot show logs that are not recorded in plugin trace settings",
        "❌ May not parse highly custom or encrypted logs correctly",
        "❌ Does not yet support advanced filtering by GUIDs, depth, or correlation IDs (coming soon)"
      ]}
    ]
  },
  "examples-plugin": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Scenario", "Benefit"], rows: [
        ["QA tester sees an error but doesn't understand it", "Ask the model to explain the log clearly"],
        ["Developer debugging a failed plugin", "Quickly locate the line or method that caused failure"],
        ["Support team creating a bug ticket", "Copy the readable exception and attach it"],
        ["Manager wants a non-technical error summary", "Use friendly explanation to share update"]
      ]}
    ]
  },
  "best-practices-plugin": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Keep plugin tracing enabled only for the relevant period to avoid data overload.",
        "Use concise natural queries (e.g., 'failures for Lead plugin last 3 days') for accurate filtering.",
        "Double-check trace depth settings in CRM to ensure logs capture full context.",
        "Export key logs for your support documentation (feature in development)."
      ]}
    ]
  },
  "sample-plugin": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Show plugin trace logs for failed plugins in the Contact entity this week'" }
        ]
      },
      {
        subtitle: "Output Preview:",
        content: [
          { type: "text", value: "<strong>3 Logs Found</strong>" },
          { type: "text", value: "1. <strong>Plugin:</strong> PostContactUpdate" },
          { type: "text", value: "<strong>Date:</strong> July 25, 2025" },
          { type: "text", value: "<strong>Status:</strong> Failed" },
          { type: "text", value: "<strong>Summary:</strong> NullReferenceException in line 42 of UpdateContactMethod()" },
          { type: "text", value: "<strong>Exception:</strong> Object reference not set to an instance of an object." }
        ]
      }
    ]
  },
  "coming-soon-plugin": {
    title: "Coming Soon",
    content: [
      { type: "text", value: "We're actively working to extend plugin tracing functionality with:" },
      { type: "list", items: [
        "🔄 Live sync from CRM environments via authenticated connectors",
        "📁 Export trace summaries to PDF or text for tickets",
        "🚦 Auto-classification of error types (e.g., null reference, unauthorized, timeout)"
      ]},
      { type: "text", value: "💬 For feedback or support, contact support@powermaker.ai" }
    ]
  },
  "crm-expert": {
    title: "CRM Expert 0.3",
    description: "The CRM Expert model is an intelligent, chat-like assistant designed to perform a wide range of Microsoft Dynamics CRM tasks through natural language commands. It acts as your AI-powered CRM co-pilot—capable of handling data operations, entity customizations, and plugin trace analysis without needing to navigate complex UI or write FetchXML manually.",
    content: [
      { type: "text", value: "It's ideal for developers, analysts, managers, testers, and anyone seeking a conversational way to work with CRM." }
    ]
  },
  "capabilities-expert": {
    title: "Key Capabilities",
    content: [
      { type: "list", items: [
        "✅ Perform CRUD operations (Create, Read, Update, Delete) on records using plain English",
        "✅ Ask questions like 'Get all open leads created last week' or 'Update the contact record for John Doe'",
        "✅ Create new entities and fields through guided natural commands",
        "✅ Search and analyze plugin trace logs like the Plugin Tracing model",
        "✅ Combine multiple operations in one query (e.g., \"Create an entity and add two fields\")"
      ]}
    ]
  },
  "how-it-works-expert": {
    title: "How It Works",
    sections: [
      {
        subtitle: "1. Conversational Interface",
        content: [
          { type: "text", value: "You interact with CRM Expert like you would with ChatGPT or Gemini. It's available in a chat-style UI and is context-aware — meaning you can have follow-up conversations without repeating everything." },
          { type: "list", label: "Examples:", items: [
            "'Show me all opportunities in the pipeline stage'",
            "'Add a new field called ProjectCode (Text) to the Project entity'",
            "'Update all leads with source = 'Event' to source = 'Webinar''",
            "'What plugins failed yesterday?'"
          ]}
        ]
      },
      {
        subtitle: "2. Smart Interpretation",
        content: [
          { type: "text", value: "The model breaks down your query into intent and context, then performs one or more CRM API operations accordingly." },
          { type: "list", label: "Behind the scenes, it:", items: [
            "Identifies the object (entity, field, plugin, etc.)",
            "Maps your words to corresponding CRM schema",
            "Validates your request",
            "Executes the operation or retrieves information"
          ]}
        ]
      }
    ]
  },
  "behavior-expert": {
    title: "Input/Output Behavior",
    content: [
      { type: "table", headers: ["Input Type", "Behavior"], rows: [
        ["Query (e.g., \"Get active accounts\")", "Returns table of matching records"],
        ["Instruction (e.g., \"Update contact with ID X\")", "Performs the operation and returns success/failure"],
        ["Customization Request (e.g., \"Add a choice field to lead\")", "Guides you through creation"],
        ["Error Log Query (e.g., \"What plugin failed for lead update?\")", "Returns plugin trace with explanation"]
      ]},
      { type: "list", label: "Outputs are shown in:", items: [
        "Tables (for records)",
        "Visual confirmations (for success/failure)",
        "Summaries (for trace logs)"
      ]}
    ]
  },
  "limitations-expert": {
    title: "Limitations",
    content: [
      { type: "list", items: [
        "❌ Cannot yet delete entities or fields (for safety reasons)",
        "❌ Some complex FetchXML conditions (like joins or aggregation) are not fully supported",
        "❌ Cannot bulk import records (planned)",
        "❌ Limited context memory — long conversations may lose earlier reference"
      ]}
    ]
  },
  "examples-expert": {
    title: "Example Use Cases",
    content: [
      { type: "table", headers: ["Task", "Prompt"], rows: [
        ["Quickly pull a CRM report", "'Get all accounts created last 30 days'"],
        ["Modify a record without UI", "'Update phone number for contact John Smith to 9876543210'"],
        ["Add a new custom field", "'Add a currency field Budget to Opportunity entity'"],
        ["Debug plugin issue", "'Show failed plugin logs for Account updates yesterday'"],
        ["Test logic in UAT", "'Create a dummy lead with source as Test Campaign'"]
      ]}
    ]
  },
  "best-practices-expert": {
    title: "Best Practices",
    content: [
      { type: "list", items: [
        "Use clear and specific language: 'Update lead named John' works better than 'fix the lead'",
        "For updates or deletes, always confirm record identifiers like names or GUIDs",
        "Group related requests in the same session for smoother conversation",
        "Use Plugin Tracing or CRM Customization models directly if your task is complex or bulk-oriented"
      ]}
    ]
  },
  "sample-expert": {
    title: "Sample Prompt & Output",
    sections: [
      {
        subtitle: "Prompt:",
        content: [
          { type: "text", value: "'Update the phone number for contact 'Priya Sharma' to 9876543210'" }
        ]
      },
      {
        subtitle: "Output:",
        content: [
          { type: "alert", severity: "success", value: "✅ Successfully updated phone number for Priya Sharma (Contact ID: 5a3b...)." }
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
        <p
          className="text-sm md:text-base text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.value }}
        />
      );

    case "alert":
      const alertStyles = {
        info: "bg-accent/10 border-accent/30 text-accent-foreground",
        warning: "bg-destructive/10 border-destructive/30 text-destructive",
        success: "bg-green-50 border-green-300 text-green-900 dark:bg-green-900/10 dark:text-green-400 dark:border-green-700"
      };
      const alertIcons = {
        info: CheckCircle2,
        warning: AlertCircle,
        success: CheckCircle2
      };
      const AlertIcon = alertIcons[item.severity as keyof typeof alertIcons];

      return (
        <div
          className={`flex gap-2 md:gap-3 p-3 md:p-4 rounded-lg border text-sm md:text-base ${
            alertStyles[item.severity as keyof typeof alertStyles]
          }`}
        >
          <AlertIcon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
          <div dangerouslySetInnerHTML={{ __html: item.value }} />
        </div>
      );

    case "list":
      return (
        <div className="space-y-2">
          {item.label && (
            <p className="font-medium text-sm md:text-base text-foreground" dangerouslySetInnerHTML={{ __html: item.label }} />
          )}
          <ul className="space-y-2 ml-4 md:ml-6">
            {item.items.map((listItem: string, idx: number) => (
              <li
                key={idx}
                className="text-sm md:text-base text-foreground leading-relaxed list-disc"
                dangerouslySetInnerHTML={{ __html: listItem }}
              />
            ))}
          </ul>
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-border -mx-4 md:mx-0">
          <table className="w-full min-w-[600px]">
            <thead className="bg-muted/50">
              <tr>
                {item.headers.map((header: string, idx: number) => (
                  <th
                    key={idx}
                    className="px-4 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {item.rows.map((row: string[], rowIdx: number) => (
                <tr key={rowIdx} className="hover:bg-muted/30 transition-colors">
                  {row.map((cell: string, cellIdx: number) => (
                    <td
                      key={cellIdx}
                      className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-foreground"
                    >
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

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("get-started");
  const [expandedSections, setExpandedSections] = useState<string[]>(["get-started"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
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

  const renderSidebarItems = () => {
    return sidebarStructure.map((section) => {
      const Icon = section.icon;
      const isExpanded = expandedSections.includes(section.id);
      const isActive = activeSection === section.id;

      return (
        <div key={section.id} className="mb-1">
          <button
            onClick={() => {
              toggleSection(section.id);
              scrollToSection(section.id);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted/80 text-foreground"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium text-sm">{section.title}</span>
            </div>
            <ChevronRight
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>

          {isExpanded && section.children && (
            <div className="mt-1 ml-6 space-y-0.5">
              {section.children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => scrollToSection(child.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === child.id
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {child.title}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  const renderContent = () => {
    const data = docData[activeSection];
    if (!data) return null;

    return (
      <div className="space-y-6 md:space-y-8 animate-fade-in">
        {/* Section Header */}
        <div className="space-y-3 md:space-y-4 pb-4 md:pb-6 border-b border-border">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
            {data.title}
          </h1>
          {data.description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Main Content */}
        {data.content && (
          <div className="space-y-4 md:space-y-6">
            {data.content.map((item: any, idx: number) => (
              <ContentBlock key={idx} item={item} />
            ))}
          </div>
        )}

        {/* Subtitle */}
        {data.subtitle && (
          <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              {data.subtitle}
            </h2>
          </div>
        )}

        {/* Sections */}
        {data.sections &&
          data.sections.map((section: any, idx: number) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 shadow-sm space-y-4 md:space-y-6"
            >
              {section.subtitle && (
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {section.subtitle}
                </h3>
              )}
              {section.content &&
                section.content.map((item: any, itemIdx: number) => (
                  <ContentBlock key={itemIdx} item={item} />
                ))}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="h-full px-4 md:px-6 flex items-center justify-between max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="relative">
              <Cpu className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">Power Maker AI</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Documentation</p>
            </div>
          </div>
          <Button className="hidden sm:inline-flex" onClick={() => scrollToSection("quickstart")}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-16 max-w-[1600px] mx-auto">
        {/* Sidebar - Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed left-0 top-16 bottom-0 w-72 bg-card/95 backdrop-blur-sm border-r border-border overflow-y-auto z-50
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:z-40
        `}>
          <nav className="p-4 md:p-6 space-y-1">{renderSidebarItems()}</nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 min-h-screen">
          {/* Hero Section */}
          <section className="relative h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                Welcome to Power Maker AI
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl drop-shadow px-4">
                Your AI Assistant for Dynamics 365 CRM – Accelerate development, analysis, and automation
              </p>
              <Button 
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hidden md:inline-flex"
                onClick={() => scrollToSection("quickstart")}
              >
                Get Started
              </Button>
              <p className="text-xs md:text-sm text-white/70 mt-2 md:mt-4 italic">
                Official language support currently available in English only
              </p>
            </div>
          </section>

          {/* Documentation Content */}
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {Object.entries(docData).map(([key]) => (
              <div key={key} id={key} className="scroll-mt-24 mb-8 md:mb-12">
                {activeSection === key && renderContent()}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;