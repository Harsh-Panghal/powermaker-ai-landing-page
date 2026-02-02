import { Link, useLocation } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <img 
                  src="/logo.svg" 
                  alt="PowerMaker AI logo - Dynamics 365 AI automation tool" 
                  className="w-10 h-10" 
                  width="40" 
                  height="40" 
                  loading="lazy" 
                />
              </div>
              <span className="text-2xl font-bold">PowerMaker AI</span>
            </Link>
            <p className="text-primary-foreground/90 mb-6 max-w-md leading-relaxed">
              Your AI pair programmer for Dynamics 365 customizations. Build
              smarter, faster, and more efficiently with AI-powered development
              tools.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow PowerMaker AI on Instagram"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow PowerMaker AI on Facebook"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow PowerMaker AI on X (Twitter)"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-secondary rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={isHomePage ? "#current-features" : "/#current-features"}
                  onClick={(e) => handleSectionClick(e, "current-features")}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Features
                </a>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href={isHomePage ? "#pricing" : "/#pricing"}
                  onClick={(e) => handleSectionClick(e, "pricing")}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={(e) => handleSectionClick(e, "contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-secondary rounded-full" />
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/term-of-use"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2025 PowerMaker AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:support@powermaker.ai"
              className="hover:text-primary-foreground transition-colors"
            >
              support@powermaker.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
