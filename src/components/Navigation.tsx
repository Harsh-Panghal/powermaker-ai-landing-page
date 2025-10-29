import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ height: "60px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" /> */}
          <img src="logo.svg" alt="PowerMaker AI Logo" className="w-10 h-10" />
          <span className="text-lg sm:text-xl font-bold text-primary">PowerMaker AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {window.open("/docs", "_blank")}}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Documentation
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Contact Us
          </button>
          <ThemeToggle />
          <Button variant="accent" size="sm" onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}>
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => {window.open("/docs", "_blank")}}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Documentation
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-lg text-primary hover:text-accent transition-colors"
                >
                  Contact Us
                </button>
                <Button variant="accent" size="lg" className="w-full mt-4" onClick={() => window.open('https://chat.powermakerai.com/', '_blank')}>
                  Request Demo
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
