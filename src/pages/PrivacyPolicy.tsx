import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronRight, Shield, Lock, Eye, FileText, Globe, Users, Clock, AlertCircle, Cookie, RefreshCw } from "lucide-react";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "info-collect", label: "Information We Collect", icon: FileText },
    { id: "how-use", label: "How We Use Your Information", icon: Eye },
    { id: "sharing", label: "Sharing Your Information", icon: Users },
    { id: "rights", label: "Your Rights and Choices", icon: Shield },
    { id: "retention", label: "Data Retention", icon: Clock },
    { id: "security", label: "Security", icon: Lock },
    { id: "transfers", label: "International Data Transfers", icon: Globe },
    { id: "children", label: "Children's Privacy", icon: AlertCircle },
    { id: "cookies", label: "Cookies", icon: Cookie },
    { id: "changes", label: "Changes to This Policy", icon: RefreshCw },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
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
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - PowerMaker AI</title>
        <meta name="description" content="Learn how PowerMaker AI collects, uses, and protects your personal information. Read our privacy policy for details on data handling practices." />
        <link rel="canonical" href="https://powermakerai.com/privacy-policy" />
      </Helmet>
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
              <img src="/logo.svg" alt="PowerMaker AI - AI pair programmer for Dynamics 365" className="w-10 h-10 transition-transform group-hover:scale-110" width="40" height="40" loading="lazy" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PowerMaker AI
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Privacy Policy
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
                        <Icon className={`w-4 h-4 transition-all ${
                          activeSection === section.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
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
                    Privacy Policy
                  </h1>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-primary">
                    Effective: January 1, 2025
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed text-foreground/90">
                  PowerMaker AI ("we", "our", or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect, use,
                  share, and protect your personal information when you use our
                  services, websites, and applications (collectively, the
                  "Services").
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
              {/* Information We Collect */}
              <AccordionItem
                value="info-collect"
                id="info-collect"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    Information We Collect
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      We collect the following types of information:
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Information You Provide
                  </h3>
                  <ul className="space-y-3 mb-8 ml-2">
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Account Information:</strong> name, email
                        address, company details, and password.
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Contact Details:</strong> when you contact us or
                        request support.
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Payment Information:</strong> processed securely
                        via third-party payment processors (we do not store your
                        credit card details).
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Content You Submit:</strong> including
                        customizations, CRM configurations, or AI queries
                        submitted via our platform.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-3 ml-2">
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Usage Data:</strong> such as pages visited,
                        features used, time spent, and interactions.
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Device And Log Data:</strong> IP address,
                        browser type, operating system, and error logs.
                      </span>
                    </li>
                    <li className="flex gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Cookies:</strong> to enhance functionality and
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
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    How We Use Your Information
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      PowerMaker AI is built to support CRM professionals with
                      smarter tools powered by AI. We use your information to:
                    </p>
                  </div>
                  <ul className="space-y-3 ml-2">
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">Provide, maintain, and improve our Services</span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Process transactions and send related information
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">Respond to your requests and provide support</span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Send updates, security alerts, and administrative
                        messages
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        Analyze usage patterns to enhance functionality
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
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
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    Sharing Your Information
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      We do not sell your personal information. We may share your
                      data only in the following circumstances:
                    </p>
                  </div>
                  <ul className="space-y-3 ml-2">
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Service Providers:</strong> trusted third parties
                        who assist with hosting, analytics, and payment
                        processing
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Business Transfers:</strong> in case of merger,
                        acquisition, or sale of assets
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Legal Requirements:</strong> when required by law
                        or to protect our rights and safety
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">With Your Consent:</strong> when you explicitly
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
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    Your Rights and Choices
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      Depending on your location, you may have the following
                      rights:
                    </p>
                  </div>
                  <ul className="space-y-3 ml-2 mb-6">
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Access:</strong> request a copy of your personal
                        data
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Correction:</strong> update or correct inaccurate
                        information
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Deletion:</strong> request deletion of your data
                        (subject to legal requirements)
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Opt-Out:</strong> unsubscribe from marketing
                        communications
                      </span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">
                        <strong className="text-primary">Data Portability:</strong> receive your data in a
                        structured format
                      </span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/20">
                    <p className="leading-relaxed">
                      To exercise these rights, contact us at{" "}
                      <a
                        href="mailto:privacy@powermaker.ai"
                        className="text-primary font-semibold hover:text-accent transition-colors underline decoration-2"
                      >
                        privacy@powermaker.ai
                      </a>
                      .
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Data Retention */}
              <AccordionItem
                value="retention"
                id="retention"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    Data Retention
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We retain your personal information for as long as necessary
                      to provide the Services, comply with legal obligations,
                      resolve disputes, and enforce our agreements. When data is no
                      longer needed, we securely delete or anonymize it.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Security */}
              <AccordionItem
                value="security"
                id="security"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    Security
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We implement industry-standard security measures, including
                      encryption, secure servers, and access controls, to protect
                      your data. However, no system is completely secure, and we
                      cannot guarantee absolute security. Please use strong
                      passwords and keep your account credentials confidential.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* International Data Transfers */}
              <AccordionItem
                value="transfers"
                id="transfers"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    International Data Transfers
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure appropriate
                      safeguards are in place, such as standard contractual clauses
                      or equivalent mechanisms, to protect your data in accordance
                      with applicable laws.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Children's Privacy */}
              <AccordionItem
                value="children"
                id="children"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertCircle className="w-5 h-5 text-primary" />
                    </div>
                    Children's Privacy
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      Our Services are not intended for individuals under the age
                      of 18. We do not knowingly collect personal information from
                      children. If we become aware that a child has provided us
                      with personal data, we will take steps to delete it promptly.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Cookies */}
              <AccordionItem
                value="cookies"
                id="cookies"
                className="border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AccordionTrigger className="relative text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:no-underline py-6 px-6 [&[data-state=open]]:pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    Cookies
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 mb-6 border border-border/30">
                    <p className="leading-relaxed">
                      We use cookies and similar technologies to:
                    </p>
                  </div>
                  <ul className="space-y-3 ml-2 mb-6">
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">Enhance user experience and functionality</span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">Analyze usage patterns and improve our Services</span>
                    </li>
                    <li className="flex gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">•</span>
                      <span className="bg-card/30 rounded-lg p-3 flex-1 border border-border/20">Remember your preferences and settings</span>
                    </li>
                  </ul>
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      You can manage cookie preferences through your browser
                      settings. Note that disabling cookies may affect the
                      functionality of our Services.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Changes to This Policy */}
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
                    Changes to This Policy
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6 px-6">
                  <div className="bg-gradient-to-br from-muted/30 to-transparent rounded-xl p-6 border border-border/30">
                    <p className="leading-relaxed">
                      We may update this Privacy Policy from time to time to
                      reflect changes in our practices or for legal, operational,
                      or regulatory reasons. We will notify you of significant
                      changes by posting the updated policy on our website and
                      updating the "Effective" date. Your continued use of the
                      Services after changes take effect constitutes acceptance of
                      the revised policy.
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
                    If you'd like to connect with us, partner, or give feedback —
                    reach out anytime. Let's build the future of CRM together.
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
    </>
  );
};

export default PrivacyPolicy;
