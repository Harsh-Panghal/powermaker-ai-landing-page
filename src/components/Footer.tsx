import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-xl font-bold">PowerMaker AI</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your AI pair programmer for Dynamics 365 customizations.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © 2025 PowerMaker AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
