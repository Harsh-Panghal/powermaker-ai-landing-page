import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
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
            onClick={() => scrollToSection("blog")}
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
          <Button variant="accent" size="sm">
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
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
                onClick={() => scrollToSection("blog")}
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
              <Button variant="accent" size="lg" className="w-full mt-4">
                Request Demo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
