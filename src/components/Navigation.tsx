import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Only prevent default and scroll if we're on the homepage
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
    // If not on homepage, let the link navigate normally (href will handle it)
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ height: "60px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="PowerMaker AI - AI pair programmer for Dynamics 365 CRM" 
            className="w-10 h-10" 
            width="40" 
            height="40" 
          />
          <span className="text-lg sm:text-xl font-bold text-primary">PowerMaker AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Documentation
          </Link>
          <a
            href={isHomePage ? "#pricing" : "/#pricing"}
            onClick={(e) => handleSectionClick(e, "pricing")}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Pricing
          </a>
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleSectionClick(e, "contact")}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Contact Us
          </a>
          <ThemeToggle />
          <Button 
            variant="accent" 
            size="sm" 
            onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}
            asChild
          >
            <a href="https://chat.powermakerai.com/" target="_blank" rel="noopener noreferrer">
              Request Demo
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/docs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Documentation
                </Link>
                <a
                  href={isHomePage ? "#pricing" : "/#pricing"}
                  onClick={(e) => {
                    handleSectionClick(e, "pricing");
                    if (!isHomePage) setMobileMenuOpen(false);
                  }}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Pricing
                </a>
                <a
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={(e) => {
                    handleSectionClick(e, "contact");
                    if (!isHomePage) setMobileMenuOpen(false);
                  }}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full mt-4"
                  asChild
                >
                  <a href="https://chat.powermakerai.com/" target="_blank" rel="noopener noreferrer">
                    Request Demo
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
