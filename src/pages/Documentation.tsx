import { useState } from "react";
import { Cpu, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Content renderer helper
const renderContent = (item: any, index: number) => {
  if (item.type === "text") {
    return (
      <p 
        key={index} 
        className="text-[#605E5C] leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: item.value }}
      />
    );
  }
  
  if (item.type === "list") {
    return (
      <div key={index} className="mb-4">
        {item.label && (
          <p 
            className="font-semibold text-[#323130] mb-2"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        )}
        <ul className="space-y-2 pl-4">
          {item.value.map((listItem: any, i: number) => {
            if (typeof listItem === "string") {
              return (
                <li 
                  key={i} 
                  className="flex items-start gap-2 text-[#605E5C]"
                >
                  <span className="text-[#0078D4] mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: listItem }} />
                </li>
              );
            }
            // Handle nested lists
            return (
              <li key={i} className="text-[#605E5C]">
                <span dangerouslySetInnerHTML={{ __html: listItem.text }} />
                {listItem.children && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {listItem.children.map((child: string, ci: number) => (
                      <li key={ci} className="flex items-start gap-2">
                        <span className="text-[#0078D4]">◦</span>
                        <span dangerouslySetInnerHTML={{ __html: child }} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  if (item.type === "img") {
    return (
      <div key={index} className="my-4">
        <img 
          src={item.src} 
          alt={item.alt}
          className="rounded-lg border border-[#EDEBE9] max-w-full"
        />
      </div>
    );
  }
  
  if (item.type === "table") {
    return (
      <div key={index} className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-[#EDEBE9]">
          <thead>
            <tr className="bg-[#F3F2F1]">
              {item.headers.map((header: string, i: number) => (
                <th key={i} className="border border-[#EDEBE9] px-4 py-2 text-left font-semibold text-[#323130]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row: string[], i: number) => (
              <tr key={i} className="hover:bg-[#FAF9F8]">
                {row.map((cell: string, ci: number) => (
                  <td key={ci} className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">
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
  
  if (item.type === "codeblock") {
    return (
      <div key={index} className="my-4 bg-[#323130] text-white p-4 rounded-lg font-mono text-sm">
        {item.lines.map((line: any, i: number) => (
          <div key={i} className={line.lineClass || ""}>
            <span>{line.text}</span>
            {line.highlight && (
              <span className={line.highlightClass || ""}>{line.highlight}</span>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  return null;
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("get-started");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Generate section ID from heading
  const getSectionId = (heading: string) => {
    return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F8]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-[#EDEBE9] z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0078D4] rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#323130]">Power Maker AI</span>
          </Link>
          <Button 
            className="bg-[#0078D4] hover:bg-[#106EBE] text-white rounded"
            onClick={() => scrollToSection("quickstart")}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-[1440px] mx-auto pt-[60px] flex">
        {/* Sidebar */}
        <aside className="w-[250px] h-[calc(100vh-60px)] sticky top-[60px] bg-[#FAF9F8] border-r border-[#EDEBE9] overflow-y-auto">
          <nav className="p-4 space-y-1">
            <button
              onClick={() => scrollToSection("get-started")}
              className={`w-full text-left px-3 py-2 rounded text-sm font-semibold transition-colors ${
                activeSection === "get-started" ? "text-[#0078D4] bg-[#F3F2F1]" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("overview")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "overview" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("crm-connection-setup")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "crm-connection-setup" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              CRM Connection Setup
            </button>
            <button
              onClick={() => scrollToSection("quickstart")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "quickstart" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Quickstart
            </button>
            <button
              onClick={() => scrollToSection("available-models")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "available-models" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Available Models
            </button>
            <button
              onClick={() => scrollToSection("what-s-next")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "what-s-next" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              What's Next?
            </button>
            
            <div className="pt-2 border-t border-[#EDEBE9] mt-2">
              <div className="px-3 py-2 text-sm font-semibold text-[#323130]">CRM Customizations</div>
              <button
                onClick={() => scrollToSection("crm-customizations-0-1")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "crm-customizations-0-1" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.1 Customizations
              </button>
              <button
                onClick={() => scrollToSection("plugin-tracing-0-2")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "plugin-tracing-0-2" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.2 Plugin Tracing
              </button>
              <button
                onClick={() => scrollToSection("crm-expert-0-3")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "crm-expert-0-3" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.3 CRM Expert
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#0078D4] to-[#106EBE] text-white px-8 py-16">
            <div className="max-w-[900px] mx-auto">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Power Maker AI
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Your AI Assistant for Dynamics 365 CRM – Accelerate CRM development, analysis, and automation with natural language-powered models.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#0078D4] hover:bg-gray-100 font-semibold"
                onClick={() => scrollToSection("quickstart")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm italic text-white/70 mt-4">
                Official language support currently available in English only.
              </p>
            </div>
          </section>

          <div className="max-w-[900px] mx-auto px-8 py-12 space-y-12">
            {/* Section 1: Get Started, Overview, CRM Connection, Quickstart, Available Models, What's Next */}
            <section id="get-started" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Welcome to Power Maker AI, your AI assistant for Dynamics 365 CRM. This documentation will guide you through everything you need to know—from getting started to using our AI-powered models to accelerate CRM development, analysis, and automation.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    Whether you're a CRM developer, consultant, tester, or business manager, this guide is designed to help you get the most out of Power Maker AI.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    <strong>Note:</strong> Official language support is currently available in English only.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="overview" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Power Maker AI is a web-based AI assistant designed specifically for users working with Microsoft Dynamics 365 CRM. It helps you:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2 text-[#605E5C]">
                      <span className="text-[#0078D4] mt-1">•</span>
                      <span>Design custom entities and fields tailored to new or ongoing CRM projects, allowing seamless prototyping of CRM customizations.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#605E5C]">
                      <span className="text-[#0078D4] mt-1">•</span>
                      <span>Analyze plugin trace logs in a human-readable format.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#605E5C]">
                      <span className="text-[#0078D4] mt-1">•</span>
                      <span>Interact with CRM through a conversational AI assistant for data operations and diagnostics.</span>
                    </li>
                  </ul>
                  <p className="text-[#605E5C] leading-relaxed">
                    Power Maker AI leverages cutting-edge language models and CRM-specific logic to interpret your natural language inputs and turn them into meaningful CRM actions.
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[#FFF4E5] border-l-4 border-[#FF8C00] rounded mt-4">
                    <AlertCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#323130]">
                      ⚠️ Note: Power Maker AI does not directly connect to your CRM environment unless explicitly configured. All data operations and configurations are currently simulated or require manual export/import.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="crm-connection-setup" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">CRM Connection Setup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    To configure your CRM connection in PowerMakerAI, follow these steps:
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    <strong>Step 1: Navigate to CRM Connection Settings</strong>
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    Go to <strong>Settings → CRM Connection Detail.</strong>
                  </p>
                  <div className="my-4">
                    <img 
                      src="./public/assest/crm-connection-img-1.png" 
                      alt="CRM Connection Settings Screenshot"
                      className="rounded-lg border border-[#EDEBE9] max-w-full"
                    />
                  </div>
                  <p className="text-[#605E5C] leading-relaxed">
                    You will see a form where you need to enter your CRM connection details.
                  </p>
                  <div className="my-4">
                    <img 
                      src="./public/assest/crm-connection-img-2.png" 
                      alt="CRM Connection Settings Screenshot"
                      className="rounded-lg border border-[#EDEBE9] max-w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-[#323130] mb-2">
                      <strong>Important Notes:</strong>
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span><strong>Single Connection Limit (Beta):</strong><br />This beta version supports only <strong>one active CRM connection</strong> at a time.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span><strong>Azure App Registration Required:</strong><br />You may need to <strong>register your application in Azure</strong> to obtain the necessary credentials (Client ID, Tenant ID, etc.).</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span><strong>User Permissions:</strong><br />Ensure that the user has the appropriate <strong>Dataverse security roles and permissions.</strong><br /> PowerMakerAI adheres to standard Dataverse user security when interacting with your environment.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="quickstart" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">Quickstart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">1. Sign In / Access the App</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      Visit https://chat.powermaker.ai and log in with your user account. New users may be prompted to create an account.
                    </p>
                    <p className="text-[#605E5C] leading-relaxed">
                      📝 Users can log in using their Google account or sign up manually with an email ID and password.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">2. Choose a Model</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      You can start working by selecting one of the available models from the sidebar:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>CRM Customizations</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Plugin Tracing</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>CRM Expert</span>
                      </li>
                    </ul>
                    <p className="text-[#605E5C] leading-relaxed mt-2">
                      Each model is tailored to solve a different problem—see the next section for a breakdown.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">3. Interact and Generate Output</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      Use natural language or UI-based prompts depending on the model.
                    </p>
                    <p className="font-semibold text-[#323130] mb-2">Examples:</p>
                    <ul className="space-y-2 pl-4 mb-2">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>"Create a custom entity for API Configuration"</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>"Show plugin errors from the last 7 days"</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>"Update all contacts in Delhi to Inactive"</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-[#323130] mb-2">Outputs can include:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>CRM schema mock-ups</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Exception trace analysis</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Data operation summaries</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Configuration exports (coming soon)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">4. Export / Apply Outputs</h3>
                    <p className="text-[#605E5C] leading-relaxed">
                      Most outputs can be copied or downloaded. You'll soon be able to directly push changes to your CRM (integration in development).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="available-models" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">Available Models</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">1. CRM Customizations</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      Purpose: Helps you quickly design custom entities and fields using simple prompts or structured controls.
                    </p>
                    <p className="font-semibold text-[#323130] mb-2">Capabilities:</p>
                    <ul className="space-y-2 pl-4 mb-2">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Create entity prototypes</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Define fields and datatypes</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Preview configurations before exporting</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-[#323130] mb-2">Limitations:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>No live deployment to CRM (yet)</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Does not handle advanced logic (e.g., business rules, workflows)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">2. Plugin Tracing</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      Purpose: Use natural language to query plugin trace logs and receive readable diagnostics.
                    </p>
                    <p className="font-semibold text-[#323130] mb-2">Capabilities:</p>
                    <ul className="space-y-2 pl-4 mb-2">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Filter logs by entity, date, error status, etc.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Translate raw logs into clean summaries and exceptions</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>View structured trace tables</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-[#323130] mb-2">Limitations:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Requires logs to be available in the system or uploaded</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Works best with standard plugin trace formats</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">3. CRM Expert</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-2">
                      Purpose: Your all-in-one conversational AI for CRM data tasks, config queries, and error diagnostics.
                    </p>
                    <p className="font-semibold text-[#323130] mb-2">Capabilities:</p>
                    <ul className="space-y-2 pl-4 mb-2">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Perform CRUD-like operations through text (simulation)</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Suggest configuration steps</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Answer questions like a Dynamics consultant</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-[#323130] mb-2">Limitations:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Requires clear CRM context for deeper operations</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Best for guided exploration, not high-volume automation</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="what-s-next" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Once you're familiar with the models, you can explore each in detail. Use the navigation menu to dive deeper into individual features, input formats, and best practices.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    💬 Need help? Reach out at support@powermaker.ai or via the in-app chat.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: CRM Customizations 0.1 */}
            <section id="crm-customizations-0-1" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">CRM Customizations 0.1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#605E5C] leading-relaxed">
                    The CRM Customizations model allows you to define new entities and fields for Microsoft Dynamics 365 CRM using natural language or a visual interface. It simplifies the schema design process—whether you're prototyping or working on live project specifications.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    This model is ideal for CRM developers, functional consultants, and solution designers who want to quickly design or generate entity definitions without diving into complex forms or technical configurations.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Key Capabilities</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✅ Create custom entities from scratch.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✅ Add multiple fields (columns) using natural phrases.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✅ Choose from various field types: Text, Date, Number, Option Set, etc.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✅ Set field requirements (e.g., required, optional).</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✅ Visualize schema before exporting.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>🟡 Upcoming: Support for editing existing entities.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>🟡 Upcoming: Support for relationships (lookups, N:N, 1:N).</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">How It Works</h3>
                    <p className="text-[#605E5C] leading-relaxed mb-4">
                      You can interact with the model in two main ways:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#323130] mb-2">1. Natural Language Input</h4>
                        <p className="text-[#605E5C] leading-relaxed mb-2">
                          Just describe what you want to build.
                        </p>
                        <p className="font-semibold text-[#323130] mb-2">Example prompts:</p>
                        <ul className="space-y-2 pl-4 mb-2">
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>"Create an entity called Project with fields: Project Name (text), Start Date (date), Status (option set)."</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>"I need an entity for Event Registration with attendee name, event date, and participation status."</span>
                          </li>
                        </ul>
                        <p className="font-semibold text-[#323130] mb-2">The model will:</p>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Parse your intent.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Create a structured representation of the entity.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Suggest field types and requirement levels.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Let you fine-tune the result before generating output.</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#323130] mb-2">2. Visual Field Designer (UI Controls)</h4>
                        <p className="font-semibold text-[#323130] mb-2">For users who prefer structured input:</p>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Add or remove fields manually.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Select data types from a dropdown.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Set required/optional toggle.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Rename or reorder fields.</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>See a live preview of the entity schema.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Output</h3>
                    <p className="font-semibold text-[#323130] mb-2">Once your entity is designed, you can:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>View a clean schema summary.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>See suggested logical names for fields.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Copy the configuration for CRM deployment (XML/JSON – coming soon).</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Use the structure for documentation or mockups.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Limitations</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>❌ Currently does not support editing existing entities (coming soon).</span>
                      </li>
                      <li className="text-[#605E5C]">
                        <span>❌ Does not yet include:</span>
                        <ul className="ml-4 mt-2 space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-[#0078D4]">◦</span>
                            <span>Entity icons or color customization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#0078D4]">◦</span>
                            <span>Relationship definitions (N:1, 1:N, N:N)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#0078D4]">◦</span>
                            <span>Business Rules, Views, or Forms</span>
                          </li>
                        </ul>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>❌ No direct CRM deployment (manual export only).</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>❌ For Lookup customizations, use the exact entity name for accurate results.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Example Use Cases</h3>
                    <div className="overflow-x-auto my-4">
                      <table className="w-full border-collapse border border-[#EDEBE9]">
                        <thead>
                          <tr className="bg-[#F3F2F1]">
                            <th className="border border-[#EDEBE9] px-4 py-2 text-left font-semibold text-[#323130]">Scenario</th>
                            <th className="border border-[#EDEBE9] px-4 py-2 text-left font-semibold text-[#323130]">How CRM Customizations Helps</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-[#FAF9F8]">
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Starting a new solution</td>
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Quickly draft entity structures with minimal clicks</td>
                          </tr>
                          <tr className="hover:bg-[#FAF9F8]">
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Business discussions</td>
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Use schema preview to align requirements visually</td>
                          </tr>
                          <tr className="hover:bg-[#FAF9F8]">
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Functional documentation</td>
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Export configurations to include in requirement specs</td>
                          </tr>
                          <tr className="hover:bg-[#FAF9F8]">
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Pre-dev planning</td>
                            <td className="border border-[#EDEBE9] px-4 py-2 text-[#605E5C]">Save time by designing entities before going to PowerApps</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Best Practices</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Start with natural language if you're unsure what fields you need—Power Maker AI will assist with intelligent defaults.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Use the visual designer to fine-tune and validate your schema.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Always review field names and types before exporting or using in a live CRM system.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>Add entity descriptions for better context (future support coming).</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">Sample Prompt & Output</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#323130] mb-2">Prompt:</h4>
                        <p className="text-[#605E5C] leading-relaxed">
                          "Create an entity called 'Onboarding Task' with fields: Task Name (text), Due Date (date), Assigned To (lookup to user), Completed (boolean)"
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#323130] mb-2">Output Preview:</h4>
                        <p className="text-[#605E5C] leading-relaxed mb-2">Entity: Onboarding Task</p>
                        <p className="font-semibold text-[#323130] mb-2">Fields:</p>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Task Name (Text, Required)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Due Date (Date, Optional)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Assigned To (Lookup to User, Required)</span>
                          </li>
                          <li className="flex items-start gap-2 text-[#605E5C]">
                            <span className="text-[#0078D4] mt-1">•</span>
                            <span>Completed (Boolean, Optional)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#323130] mb-3">What's Next?</h3>
                    <p className="font-semibold text-[#323130] mb-2">We're working on additional features such as:</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✨ Update existing entity metadata.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✨ Relationships (Lookups, N:N, 1:N).</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✨ Direct deployment into CRM.</span>
                      </li>
                      <li className="flex items-start gap-2 text-[#605E5C]">
                        <span className="text-[#0078D4] mt-1">•</span>
                        <span>✨ Downloadable export formats for solution packaging.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Plugin Tracing 0.2 */}
            <section id="plugin-tracing-0-2" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">Plugin Tracing 0.2</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#605E5C] leading-relaxed">
                    The Plugin Tracing model in Power Maker AI helps you analyze Microsoft Dynamics 365 CRM plugin trace logs using natural language queries. Instead of manually inspecting complex trace logs, this model simplifies diagnostics by extracting meaningful summaries and exception insights from raw plugin data.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    It is designed for developers, testers, admins, and support teams to accelerate debugging, reduce analysis effort, and communicate issues more clearly.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: CRM Expert 0.3 */}
            <section id="crm-expert-0-3" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-3xl">CRM Expert 0.3</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#605E5C] leading-relaxed">
                    The CRM Expert model is an intelligent, chat-like assistant designed to perform a wide range of Microsoft Dynamics CRM tasks through natural language commands. It acts as your AI-powered CRM co-pilot—capable of handling data operations, entity customizations, and plugin trace analysis without needing to navigate complex UI or write FetchXML manually.
                  </p>
                  <p className="text-[#605E5C] leading-relaxed">
                    It's ideal for developers, analysts, managers, testers, and anyone seeking a conversational way to work with CRM.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-[#F3F2F1] border-t border-[#EDEBE9] py-8 px-8">
            <div className="max-w-[900px] mx-auto text-center">
              <p className="text-sm text-[#605E5C]">
                Powered by xAI
              </p>
              <p className="text-sm text-[#605E5C] mt-2">
                © 2025 Power Maker AI. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
