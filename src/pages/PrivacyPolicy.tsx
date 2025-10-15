import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("info-collect");

  const sections = [
    { id: "info-collect", label: "Information We Collect" },
    { id: "how-use", label: "How We Use Your Information" },
    { id: "sharing", label: "Sharing Your Information" },
    { id: "rights", label: "Your Rights and Choices" },
    { id: "retention", label: "Data Retention" },
    { id: "security", label: "Security" },
    { id: "transfers", label: "International Data Transfers" },
    { id: "children", label: "Children's Privacy" },
    { id: "cookies", label: "Cookies" },
    { id: "changes", label: "Changes to This Policy" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="PowerMaker AI" className="w-10 h-10" />
              <span className="text-xl font-bold text-primary">
                PowerMaker AI
              </span>
            </Link>

            <h1 className="hidden md:block text-2xl font-bold text-primary">
              Privacy Policy
            </h1>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-foreground mb-4 px-4">
                Get Into PowerMaker
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {activeSection === section.id ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <div className="w-4" />
                    )}
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Hero Intro */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 lg:hidden">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground italic mb-6">
                Effective: January 1, 2025
              </p>
              <p className="text-base leading-relaxed text-foreground">
                PowerMaker AI ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                share, and protect your personal information when you use our
                services, websites, and applications (collectively, the
                "Services").
              </p>
            </div>

            {/* Accordion Sections */}
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              defaultValue="info-collect"
            >
              {/* Information We Collect */}
              <AccordionItem
                value="info-collect"
                id="info-collect"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Information We Collect
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="mb-4 leading-relaxed">
                    We collect the following types of information:
                  </p>

                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Information You Provide
                  </h3>
                  <ul className="space-y-2 mb-6 ml-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Account Information:</strong> name, email
                        address, company details, and password.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Contact Details:</strong> when you contact us or
                        request support.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Payment Information:</strong> processed securely
                        via third-party payment processors (we do not store your
                        credit card details).
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Content You Submit:</strong> including
                        customizations, CRM configurations, or AI queries
                        submitted via our platform.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Usage Data:</strong> such as pages visited,
                        features used, time spent, and interactions.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Device And Log Data:</strong> IP address,
                        browser type, operating system, and error logs.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Cookies:</strong> to enhance functionality and
                        user experience (see "Cookies" below).
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* How We Use Your Information */}
              <AccordionItem
                value="how-use"
                id="how-use"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  How We Use Your Information
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed mb-4">
                    PowerMaker AI is built to support CRM professionals with
                    smarter tools powered by AI. We use your information to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Provide, maintain, and improve our Services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        Process transactions and send related information
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Respond to your requests and provide support</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        Send updates, security alerts, and administrative
                        messages
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        Analyze usage patterns to enhance functionality
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        Comply with legal obligations and enforce our terms
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Sharing Your Information */}
              <AccordionItem
                value="sharing"
                id="sharing"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Sharing Your Information
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed mb-4">
                    We do not sell your personal information. We may share your
                    data only in the following circumstances:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Service Providers:</strong> trusted third parties
                        who assist with hosting, analytics, and payment
                        processing
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Business Transfers:</strong> in case of merger,
                        acquisition, or sale of assets
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Legal Requirements:</strong> when required by law
                        or to protect our rights and safety
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>With Your Consent:</strong> when you explicitly
                        authorize us to share your information
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Your Rights and Choices */}
              <AccordionItem
                value="rights"
                id="rights"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Your Rights and Choices
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed mb-4">
                    Depending on your location, you may have the following
                    rights:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Access:</strong> request a copy of your personal
                        data
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Correction:</strong> update or correct inaccurate
                        information
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Deletion:</strong> request deletion of your data
                        (subject to legal requirements)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Opt-Out:</strong> unsubscribe from marketing
                        communications
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>
                        <strong>Data Portability:</strong> receive your data in a
                        structured format
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 leading-relaxed">
                    To exercise these rights, contact us at{" "}
                    <a
                      href="mailto:privacy@powermaker.ai"
                      className="text-accent hover:underline"
                    >
                      privacy@powermaker.ai
                    </a>
                    .
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Data Retention */}
              <AccordionItem
                value="retention"
                id="retention"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Data Retention
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed">
                    We retain your personal information for as long as necessary
                    to provide the Services, comply with legal obligations,
                    resolve disputes, and enforce our agreements. When data is no
                    longer needed, we securely delete or anonymize it.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Security */}
              <AccordionItem
                value="security"
                id="security"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Security
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed">
                    We implement industry-standard security measures, including
                    encryption, secure servers, and access controls, to protect
                    your data. However, no system is completely secure, and we
                    cannot guarantee absolute security. Please use strong
                    passwords and keep your account credentials confidential.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* International Data Transfers */}
              <AccordionItem
                value="transfers"
                id="transfers"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  International Data Transfers
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure appropriate
                    safeguards are in place, such as standard contractual clauses
                    or equivalent mechanisms, to protect your data in accordance
                    with applicable laws.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Children's Privacy */}
              <AccordionItem
                value="children"
                id="children"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Children's Privacy
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed">
                    Our Services are not intended for individuals under the age
                    of 18. We do not knowingly collect personal information from
                    children. If we become aware that a child has provided us
                    with personal data, we will take steps to delete it promptly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Cookies */}
              <AccordionItem
                value="cookies"
                id="cookies"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Cookies
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="space-y-2 ml-4 mb-4">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Enhance user experience and functionality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Analyze usage patterns and improve our Services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Remember your preferences and settings</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed">
                    You can manage cookie preferences through your browser
                    settings. Note that disabling cookies may affect the
                    functionality of our Services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Changes to This Policy */}
              <AccordionItem
                value="changes"
                id="changes"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-6">
                  Changes to This Policy
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for legal, operational,
                    or regulatory reasons. We will notify you of significant
                    changes by posting the updated policy on our website and
                    updating the "Effective" date. Your continued use of the
                    Services after changes take effect constitutes acceptance of
                    the revised policy.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Contact & CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-primary mb-3">
                Ready to Build the Future of CRM?
              </h2>
              <p className="text-foreground mb-6 leading-relaxed">
                If you'd like to connect with us, partner, or give feedback —
                reach out anytime. Let's build the future of CRM together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Request a Demo Today
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:privacy@powermaker.ai">Contact Us</a>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
