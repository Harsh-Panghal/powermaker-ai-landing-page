import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Shield,
  Lock,
  Eye,
  FileText,
  Globe,
  Users,
  Clock,
  AlertCircle,
  Cookie,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const TermOfUse = () => {
  const [activeSection, setActiveSection] = useState("info-collect");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "Your Use", label: "Your Use of the Services", icon: FileText },
    { id: "registration", label: "Registration and Access", icon: Eye },
    { id: "content", label: "Content", icon: Users },
    { id: "availability", label: "Service Availability", icon: Shield },
    { id: "fees", label: "Fees and Payment", icon: Clock },
    { id: "termination", label: "Termination", icon: Lock },
    {
      id: "disclaimers",
      label: "Disclaimers and Limitation of Liability",
      icon: Globe,
    },
    { id: "indemnity", label: "Indemnity", icon: AlertCircle },
    { id: "governing", label: "Governing Law", icon: Cookie },
    { id: "changes", label: "Changes to These Terms", icon: RefreshCw },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Adjust this value to match your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.svg"
                alt="PowerMaker AI"
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PowerMaker AI
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Terms of Use
              </h1>
            </div>

            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}
             >
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12 mt-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-base font-bold text-foreground">
                    Quick Navigation
                  </h2>
                </div>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold border border-primary/20 shadow-md"
                            : "text-muted-foreground hover:text-primary hover:bg-muted/50 hover:translate-x-1"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 transition-all ${
                            activeSection === section.id
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-primary"
                          }`}
                        />
                        <span className="flex-1">{section.label}</span>
                        {activeSection === section.id && (
                          <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Hero Intro */}
            <div className="relative mb-12 bg-gradient-to-br from-card via-card/80 to-primary/5 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 lg:hidden">
                  <Shield className="w-8 h-8 text-primary" />
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    Terms of Use
                  </h1>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-primary">
                    Effective: 1st August 2025
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-foreground/90">
                  These Terms of Use (“Terms”) govern your access to, and use of
                  the services, products, and applications (the “Services”)
                  provided by Power Maker AI ("we", "our", or "us"). By using
                  our Services, you agree to be bound by these Terms.
                </p>
              </div>
            </div>

            {/* Accordion Sections */}
            <Accordion
              type="single"
              collapsible
              className="space-y-6"
              defaultValue="info-collect"
            >
              {/* Your use of the Services */}
              <AccordionItem
                value="your-use"
                id="Your Use"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    Your Use of the Services
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      You must use our Services in compliance with all
                      applicable laws. You may not use the Services for any
                      illegal, harmful, or abusive activity. This includes, but
                      is not limited to:
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 ml-2">
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                        •
                      </span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Violating any law or regulation;
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                        •
                      </span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Violating the rights of any third party;
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                        •
                      </span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Violating the privacy or security of any person or
                        entity;
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Registeration and access */}
              <AccordionItem
                value="registration"
                id="registration"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    Registration and Access
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      To use certain features, you may need to register for an
                      account. You must provide accurate and complete
                      information during registration and keep it up to date.
                      You are responsible for any activity that occurs under
                      your account.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* content */}
              <AccordionItem
                value="content"
                id="content"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    Content
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      You retain ownership of the content you submit to the
                      Services. However, by submitting content, you grant us a
                      worldwide, royalty-free license to use, host, store,
                      reproduce, modify, and create derivative works as
                      necessary to provide and improve our Services.
                      <br />
                      <br />
                      We may remove content that violates these Terms or
                      applicable law.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* service availability */}
              <AccordionItem
                value="avilability"
                id="availability"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    Service Availability
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      We are constantly improving our Services. We may add,
                      modify, or remove features, and we may suspend or stop the
                      Services entirely. We will provide reasonable notice when
                      possible.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Fees and Payment */}
              <AccordionItem
                value="fees"
                id="fees"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    Fees and Payment
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      Some features of the Services may require payment. All
                      fees are clearly indicated at the time of purchase. You
                      are responsible for all applicable taxes and fees
                      associated with your use of the Services.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Termination */}
              <AccordionItem
                value="termination"
                id="termination"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    Termination
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We may suspend or terminate your access to the Services if
                      you violate these Terms, create risk or legal exposure for
                      us, or for any other reason, at our sole discretion. Upon
                      termination, your right to use the Services will end
                      immediately.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Disclaimers and Limitation of Liability */}
              <AccordionItem
                value="disclaimers"
                id="disclaimers"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    Disclaimers and Limitation of Liability
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We provide the Services “as is” and “as available” without
                      warranties of any kind. We disclaim all warranties,
                      express or implied, including the implied warranties of
                      merchantability, fitness for a particular purpose, and
                      non-infringement.
                      <br /> <br />
                      To the fullest extent permitted by law, we are not liable
                      for any indirect, incidental, special, or consequential
                      damages, or loss of profits, revenues, or data.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Indemnity */}
              <AccordionItem
                value="indemnity"
                id="indemnity"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertCircle className="w-5 h-5 text-primary" />
                    </div>
                    Indemnity
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      You agree to indemnify and hold harmless Power Maker AI
                      and its affiliates, officers, agents, and employees from
                      any claims, liabilities, damages, and expenses arising out
                      of your use of the Services or your violation of these
                      Terms.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Governing Law */}
              <AccordionItem
                value="governing"
                id="governing"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    Governing Law
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      These Terms are governed by and construed in accordance
                      with the laws of INDIA, without regard to conflict of law
                      principles.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Changes to These Terms */}
              <AccordionItem
                value="changes"
                id="changes"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    Changes to These Terms
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We may update these Terms from time to time. If we make material changes, we will notify you through the Services or by other means. Continued use of the Services after the changes become effective constitutes your acceptance of the new Terms.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Contact & CTA */}
            <div className="relative mt-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-xl" />

              <div className="relative p-8 md:p-12 bg-gradient-to-br from-card/90 via-card/95 to-card/90 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                      Ready to Build the Future of CRM?
                    </h2>
                  </div>

                  <p className="text-foreground/90 mb-8 leading-relaxed text-lg">
                    If you'd like to connect with us, partner, or give feedback
                    — reach out anytime. Let's build the future of CRM together.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                      Request a Demo Today
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
                      asChild
                    >
                      <a href="mailto:privacy@powermaker.ai">Contact Us</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermOfUse;
