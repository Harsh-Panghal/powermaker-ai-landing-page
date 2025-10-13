import { Sparkles, Instagram, Facebook, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 sm:mb-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
          <p className="text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Get the latest updates on PowerMaker AI features and Dynamics 365 tips
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto px-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold">PowerMaker AI</span>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md leading-relaxed">
              Your AI pair programmer for Dynamics 365 customizations. 
              Build smarter, faster, and more efficiently with AI-powered development tools.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
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
                <a href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
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
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">
                  Cookie Policy
                </a>
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
            <a href="mailto:contact@powermaker.ai" className="hover:text-primary-foreground transition-colors">
              contact@powermaker.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
