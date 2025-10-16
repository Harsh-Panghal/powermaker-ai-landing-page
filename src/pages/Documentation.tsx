import { useState } from "react";
import { ChevronDown, ChevronRight, Settings, Zap, Database, MessageSquare, FileOutput, Cpu, Wrench, Activity, GraduationCap, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");

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
              onClick={() => scrollToSection("overview")}
              className={`w-full text-left px-3 py-2 rounded text-sm font-semibold transition-colors ${
                activeSection === "overview" ? "text-[#0078D4] bg-[#F3F2F1]" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("crm-connection")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "crm-connection" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
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
              Quickstart (Install App)
            </button>
            <button
              onClick={() => scrollToSection("sign-in")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "sign-in" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Sign in/Access Model
            </button>
            <button
              onClick={() => scrollToSection("interact")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "interact" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Interact and Generate Outputs
            </button>
            <button
              onClick={() => scrollToSection("export")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "export" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Export/Apply Outputs
            </button>
            <button
              onClick={() => scrollToSection("models")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "models" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              Available Models
            </button>
            
            <div className="pt-2">
              <div className="px-3 py-2 text-sm font-semibold text-[#323130]">CRM Customizations</div>
              <button
                onClick={() => scrollToSection("customizations")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "customizations" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.1 Customizations
              </button>
              <button
                onClick={() => scrollToSection("plugin-tracing")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "plugin-tracing" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.2 Plugin Tracing
              </button>
              <button
                onClick={() => scrollToSection("crm-expert")}
                className={`w-full text-left px-6 py-2 rounded text-sm transition-colors ${
                  activeSection === "crm-expert" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                }`}
              >
                0.3 CRM Expert
              </button>
            </div>
            
            <button
              onClick={() => scrollToSection("whats-next")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "whats-next" ? "text-[#0078D4] bg-[#F3F2F1] font-semibold" : "text-[#605E5C] hover:bg-[#F3F2F1]"
              }`}
            >
              What's Next?
            </button>
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
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-2xl">Overview</CardTitle>
                  <CardDescription className="text-[#605E5C]">
                    Power Maker AI is designed for Dynamics 365 CRM developers, consultants, testers, and business managers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    This AI assistant streamlines CRM development workflows by understanding natural language inputs and generating 
                    customizations, analyzing plugin traces, and providing expert guidance on CRM best practices.
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[#E3F2FD] border-l-4 border-[#0078D4] rounded">
                    <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#323130]">
                      <strong>Secure & Simulated Environment:</strong> All operations are simulated unless explicitly configured to connect to your CRM.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CRM Connection Setup */}
            <section id="crm-connection" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">CRM Connection Setup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Configure your CRM connection to enable direct integration with your Dynamics 365 environment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0078D4] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                      <p className="text-[#605E5C]">Navigate to <strong>Settings</strong> → <strong>CRM Connection Detail</strong></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0078D4] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                      <p className="text-[#605E5C]">Enter your CRM URL, authentication credentials, and API version</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0078D4] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                      <p className="text-[#605E5C]">Test the connection and save your configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-4 bg-[#FFF4E5] border-l-4 border-[#FF8C00] rounded">
                    <AlertCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#323130]">
                      Power Maker AI does not directly connect to your CRM environment unless explicitly configured. 
                      All data operations require manual export/import or API integration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quickstart */}
            <section id="quickstart" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">Quickstart (Install App)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Get up and running with Power Maker AI in minutes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]">Install the Power Maker AI app from your organization's app store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]">Complete the initial setup wizard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]">Configure your workspace preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]">Start creating customizations with natural language</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Sign in/Access Model */}
            <section id="sign-in" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0078D4] text-2xl">Sign in/Access Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Access Power Maker AI using your organization's credentials or Microsoft account.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border border-[#EDEBE9] rounded-lg">
                      <h4 className="font-semibold text-[#323130] mb-2">Single Sign-On (SSO)</h4>
                      <p className="text-sm text-[#605E5C]">Use your existing Microsoft 365 credentials for seamless access</p>
                    </div>
                    <div className="p-4 border border-[#EDEBE9] rounded-lg">
                      <h4 className="font-semibold text-[#323130] mb-2">Role-Based Access</h4>
                      <p className="text-sm text-[#605E5C]">Access features based on your assigned role and permissions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Interact and Generate */}
            <section id="interact" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">Interact and Generate Outputs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#605E5C] leading-relaxed">
                    Use natural language to describe what you want to build, and Power Maker AI will generate the necessary CRM customizations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#323130] font-semibold">
                        <MessageSquare className="h-5 w-5 text-[#0078D4]" />
                        <span>Natural Language Input</span>
                      </div>
                      <p className="text-sm text-[#605E5C]">
                        Describe your requirements in plain English. The AI understands context, intent, and CRM-specific terminology.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#323130] font-semibold">
                        <FileOutput className="h-5 w-5 text-[#0078D4]" />
                        <span>Generated Output</span>
                      </div>
                      <p className="text-sm text-[#605E5C]">
                        Receive ready-to-use CRM configurations, entity schemas, workflows, and plugin code.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F3F2F1] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#323130] mb-2">Sample Prompt:</p>
                    <code className="text-sm text-[#605E5C] block bg-white p-3 rounded border border-[#EDEBE9]">
                      "Create a custom entity called Project with fields for Name, Start Date, End Date, Budget, and Status. 
                      Add a lookup to the Account entity and create a 1:N relationship."
                    </code>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Export/Apply */}
            <section id="export" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileOutput className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">Export/Apply Outputs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Export generated configurations and apply them to your CRM environment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]"><strong>Export as Solution:</strong> Download as a Dynamics 365 solution file (.zip)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]"><strong>Export as JSON:</strong> Get raw configuration data for custom processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078D4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#605E5C]"><strong>Direct Apply:</strong> Push changes directly to connected CRM (when configured)</span>
                    </li>
                  </ul>
                  <div className="flex items-start gap-2 p-4 bg-[#E8F5E9] border-l-4 border-[#4CAF50] rounded">
                    <CheckCircle2 className="h-5 w-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#323130]">
                      <strong>Best Practice:</strong> Always test in a development environment before applying to production.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Available Models */}
            <section id="models" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cpu className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">Available Models</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Power Maker AI offers specialized models for different CRM tasks.
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 border-l-4 border-[#0078D4] bg-[#F3F2F1] rounded">
                      <h4 className="font-semibold text-[#323130] mb-1">0.1 CRM Customizations</h4>
                      <p className="text-sm text-[#605E5C]">Entity creation, field management, relationships, and UI customizations</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#605E5C] bg-[#F3F2F1] rounded opacity-60">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-[#323130]">0.2 Plugin Tracing</h4>
                        <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-[#605E5C]">Analyze plugin execution logs and identify performance issues</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#605E5C] bg-[#F3F2F1] rounded opacity-60">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-[#323130]">0.3 CRM Expert</h4>
                        <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                      </div>
                      <p className="text-sm text-[#605E5C]">Expert guidance on best practices, architecture, and troubleshooting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CRM Customizations 0.1 */}
            <section id="customizations" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">CRM Customizations 0.1</CardTitle>
                  </div>
                  <CardDescription className="text-[#605E5C]">
                    Generate comprehensive CRM customizations from natural language descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#323130] mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Create custom entities with full schema definitions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Define field types, validation rules, and default values</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Configure entity relationships (1:N, N:1, N:N)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Design forms, views, and dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Generate business rules and workflows</span>
                      </li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible className="border rounded-lg">
                    <AccordionItem value="use-cases">
                      <AccordionTrigger className="px-4 hover:no-underline">
                        <span className="font-semibold text-[#323130]">Example Use Cases</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <ol className="space-y-2 list-decimal list-inside text-[#605E5C]">
                          <li>Creating a Project Management module with tasks, milestones, and resource allocation</li>
                          <li>Building a custom Support Ticket system with SLA tracking</li>
                          <li>Designing a Sales Pipeline with custom stages and approval workflows</li>
                          <li>Implementing a Product Catalog with inventory management</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="bg-[#F3F2F1] p-4 rounded-lg space-y-3">
                    <p className="text-sm font-semibold text-[#323130]">Sample Interaction:</p>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border border-[#EDEBE9]">
                        <p className="text-xs text-[#605E5C] mb-1">User Input:</p>
                        <code className="text-sm text-[#323130]">
                          "I need a Training Management system. Create an entity for Training Sessions with fields for Title, Description, 
                          Start Date, End Date, Location, Max Attendees, and Status (Draft/Published/Completed). 
                          Link it to Contact entity for attendees with N:N relationship."
                        </code>
                      </div>
                      <div className="bg-[#E3F2FD] p-3 rounded border border-[#0078D4]">
                        <p className="text-xs text-[#605E5C] mb-1">AI Output Summary:</p>
                        <ul className="text-sm text-[#323130] space-y-1">
                          <li>✓ Created "Training Session" custom entity</li>
                          <li>✓ Added 7 fields with appropriate data types</li>
                          <li>✓ Configured N:N relationship with Contact</li>
                          <li>✓ Generated main form with sections</li>
                          <li>✓ Created Active Training Sessions view</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-4 bg-[#FFF4E5] border-l-4 border-[#FF8C00] rounded">
                    <AlertCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-[#323130]">
                      <p className="font-semibold mb-1">Limitations:</p>
                      <ul className="space-y-1">
                        <li>• Complex calculated fields may require manual JavaScript customization</li>
                        <li>• Advanced security roles must be configured separately</li>
                        <li>• Integration with external systems requires additional setup</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Plugin Tracing 0.2 */}
            <section id="plugin-tracing" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] opacity-75 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Activity className="h-6 w-6 text-[#605E5C]" />
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-[#605E5C] text-2xl">Plugin Tracing 0.2</CardTitle>
                        <Badge variant="secondary" className="bg-[#0078D4] text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </Badge>
                      </div>
                      <CardDescription className="text-[#605E5C]">
                        AI-powered plugin execution analysis and debugging
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Analyze plugin trace logs to identify performance bottlenecks, errors, and optimization opportunities.
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#323130] mb-3">Planned Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Automatic error detection and root cause analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Performance metrics and execution timeline visualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Recommendations for code optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Comparison of trace logs across multiple executions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CRM Expert 0.3 */}
            <section id="crm-expert" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] opacity-75 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-[#605E5C]" />
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-[#605E5C] text-2xl">CRM Expert 0.3</CardTitle>
                        <Badge variant="secondary" className="bg-[#0078D4] text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </Badge>
                      </div>
                      <CardDescription className="text-[#605E5C]">
                        Expert guidance and best practices consultation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Get expert advice on CRM architecture, design patterns, and troubleshooting complex scenarios.
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#323130] mb-3">Planned Capabilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Architecture review and recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Best practices for scalability and performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Security and compliance guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Troubleshooting complex integration issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#605E5C] mt-2 flex-shrink-0"></div>
                        <span className="text-[#605E5C]">Code review and optimization suggestions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What's Next */}
            <section id="whats-next" className="scroll-mt-24">
              <Card className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-6 w-6 text-[#0078D4]" />
                    <CardTitle className="text-[#0078D4] text-2xl">What's Next?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#605E5C] leading-relaxed">
                    Ready to accelerate your CRM development? Here are your next steps:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href="#crm-connection" 
                      className="p-4 border-2 border-[#EDEBE9] rounded-lg hover:border-[#0078D4] hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="h-5 w-5 text-[#0078D4]" />
                        <h4 className="font-semibold text-[#323130] group-hover:text-[#0078D4]">Configure CRM Connection</h4>
                      </div>
                      <p className="text-sm text-[#605E5C]">Set up your environment and connect to Dynamics 365</p>
                    </a>
                    <a 
                      href="#customizations" 
                      className="p-4 border-2 border-[#EDEBE9] rounded-lg hover:border-[#0078D4] hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench className="h-5 w-5 text-[#0078D4]" />
                        <h4 className="font-semibold text-[#323130] group-hover:text-[#0078D4]">Try CRM Customizations</h4>
                      </div>
                      <p className="text-sm text-[#605E5C]">Start building custom entities and workflows</p>
                    </a>
                  </div>
                  <div className="p-4 bg-[#F3F2F1] rounded-lg border border-[#EDEBE9]">
                    <h4 className="font-semibold text-[#323130] mb-2">Need Help?</h4>
                    <p className="text-sm text-[#605E5C] mb-3">
                      Our team is here to support your CRM development journey.
                    </p>
                    <Button variant="outline" className="border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4] hover:text-white">
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-[#EDEBE9] py-8 mt-16">
            <div className="max-w-[900px] mx-auto px-8 text-center">
              <p className="text-sm text-[#605E5C]">
                Powered by <span className="font-semibold">xAI</span> | © 2025 Power Maker AI
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Documentation;