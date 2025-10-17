import { useState, useEffect } from "react";
import { Cpu, Menu, X, ChevronDown, Search, BookOpen, Zap, Shield, ArrowRight, CheckCircle2, AlertCircle, Code2, Database, Settings } from "lucide-react";

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
          { type: "code", value: "3 Logs Found\n\n1. Plugin: PostContactUpdate\nDate: July 25, 2025\nStatus: Failed\nSummary: NullReferenceException in line 42 of UpdateContactMethod()\nException: Object reference not set to an instance of an object.\n[View Full Trace] [Copy Summary]" }
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
        "Perform CRUD operations (Create, Read, Update, Delete) on records using plain English",
        "Ask questions like 'Get all open leads created last week' or 'Update the contact record for John Doe'",
        "Create new entities and fields through guided natural commands",
        "Search and analyze plugin trace logs like the Plugin Tracing model",
        "Combine multiple operations in one query (e.g., 'Create an entity and add two fields')"
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
        ["Query (e.g., 'Get active accounts')", "Returns table of matching records"],
        ["Instruction (e.g., 'Update contact with ID X')", "Performs the operation and returns success/failure"],
        ["Customization Request (e.g., 'Add a choice field to lead')", "Guides you through creation"],
        ["Error Log Query (e.g., 'What plugin failed for lead update?')", "Returns plugin trace with explanation"]
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

const renderContent = (item: any, index: number) => {
  if (item.type === "text") {
    return (
      <p key={index} className="text-slate-700 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: item.value }} />
    );
  }

  if (item.type === "list") {
    return (
      <div key={index} className="space-y-2">
        {item.label && <p className="font-medium text-slate-900 mb-2 text-sm" dangerouslySetInnerHTML={{ __html: item.label }} />}
        <ul className="space-y-2.5 pl-1">
          {item.items.map((listItem: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-[15px] group">
              <span className="mt-1.5 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
              </span>
              <span dangerouslySetInnerHTML={{ __html: listItem }} className="flex-1" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (item.type === "alert") {
    const alertStyles = {
      info: "bg-[#E7F1FF] border-[#3A7CCF] text-[#123C66]",
      warning: "bg-[#FFF3CD] border-[#F4A261] text-[#E76F51]",
      error: "bg-[#F8D7DA] border-[#E63946] text-[#B71C1C]",
      success: "bg-[#D1FAE5] border-[#2A9D8F] text-[#1B7A6D]"
    };
    return (
      <div key={index} className={`flex items-start gap-3 p-4 border rounded-xl ${alertStyles[item.severity as keyof typeof alertStyles]}`}>
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
        <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.value }} />
      </div>
    );
  }

  if (item.type === "table") {
    return (
      <div key={index} className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#fffeeec]">
              {item.headers.map((header: string, i: number) => (
                <th key={i} className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row: string[], i: number) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                {row.map((cell: string, j: number) => (
                  <td key={j} className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (item.type === "code") {
    return (
      <div key={index} className="my-4 p-4 bg-slate-900 rounded-lg overflow-x-auto">
        <pre className="text-sm text-slate-100 whitespace-pre-wrap font-mono">{item.value}</pre>
      </div>
    );
  }

  return null;
};

function App() {
  const [activeSection, setActiveSection] = useState("get-started");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState(["get-started"]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#fffeeec]">
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-[60]">
        <div className="h-full bg-gradient-to-r from-[#0A2342] via-[#1E4D8F] to-[#3A7CCF] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#1E4D8F] to-[#0A2342] rounded-lg flex items-center justify-center shadow-sm">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900">Power Maker AI</span>
                <span className="hidden sm:inline text-xs text-slate-500 ml-2">Documentation</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("quickstart")}
            className="bg-gradient-to-r from-[#1E4D8F] to-[#123C66] hover:from-[#0A2342] hover:to-[#1E4D8F] text-white rounded-lg px-5 py-2 text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto pt-16 flex">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-[#fffeeec] border-r border-slate-200 overflow-y-auto z-40 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6">
            {/* <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4D8F]/20 focus:border-[#1E4D8F] transition-all bg-white"
              />
            </div> */}

            <nav className="space-y-1">
              {sidebarStructure.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} className="space-y-0.5">
                    <button
                      onClick={() => { scrollToSection(section.id); toggleSection(section.id); }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeSection === section.id ? 'bg-[#E7F1FF] text-[#123C66]' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {section.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`} />
                    </button>

                    {section.children && expandedSections.includes(section.id) && (
                      <div className="ml-3 pl-4 border-l-2 border-slate-100 space-y-0.5 py-1">
                        {section.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => scrollToSection(child.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${activeSection === child.id ? 'text-[#123C66] bg-[#E7F1FF] font-medium' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
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
        </aside>

        <main className="flex-1 min-w-0">
          <section className="relative bg-gradient-to-br from-[#0A2342] via-[#1E4D8F] to-[#123C66] text-white px-8 lg:px-12 py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7CCF]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#1E4D8F]/20 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <Zap className="w-4 h-4 text-[#296488]" />
                <span className="text-sm font-medium">AI-Powered CRM Assistant</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to<br />
                <span className="bg-gradient-to-r from-[#3A7CCF] to-[#296488] bg-clip-text text-transparent">Power Maker AI</span>
              </h1>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed max-w-2xl">
                Your AI Assistant for Dynamics 365 CRM – Accelerate CRM development, analysis, and automation with natural language-powered models.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("quickstart")}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("overview")}
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-5 h-5" /> View Docs
                </button>
              </div>
              <p className="text-sm text-slate-300 mt-8 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Official language support currently available in English only
              </p>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-8 lg:px-12 py-16 space-y-12">
            {Object.entries(docData).map(([key, section]: [string, any]) => (
              <article key={key} id={key} className="scroll-mt-24 group">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-1.5 bg-gradient-to-r from-[#0A2342] via-[#1E4D8F] to-[#3A7CCF]" />
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E7F1FF] to-[#3A7CCF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-[#123C66]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{section.title}</h2>
                        {section.description && (
                          <p className="text-slate-600 text-base leading-relaxed">{section.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {section.subtitle && (
                        <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-gradient-to-b from-[#1E4D8F] to-[#123C66] rounded-full" />
                          {section.subtitle}
                        </h3>
                      )}

                      {section.content && (
                        <div className="space-y-4 pl-0">
                          {section.content.map((item: any, itemIdx: number) => renderContent(item, itemIdx))}
                        </div>
                      )}

                      {section.sections?.map((subsection: any, idx: number) => (
                        <div key={idx} className="space-y-4">
                          {subsection.subtitle && (
                            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mt-8">
                              <span className="w-1.5 h-6 bg-gradient-to-b from-[#1E4D8F] to-[#123C66] rounded-full" />
                              {subsection.subtitle}
                            </h3>
                          )}
                          <div className="space-y-4 pl-3.5">
                            {subsection.content?.map((item: any, itemIdx: number) => renderContent(item, itemIdx))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700 py-12 px-8 lg:px-12 mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1E4D8F] to-[#0A2342] rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Power Maker AI</div>
                    <div className="text-sm text-slate-400">Powered by xAI</div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-slate-400">© 2025 Power Maker AI. All rights reserved.</p>
                  <p className="text-xs text-slate-500 mt-1">support@powermaker.ai</p>
                </div>
              </div>
            </div>
          </footer> */}
        </main>
      </div>
    </div>
  );
}

export default App;
