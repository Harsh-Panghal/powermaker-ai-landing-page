import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ height: "60px" }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-xl font-bold text-primary">PowerMaker AI</span>
        </div>

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
      </div>
    </nav>
  );
};

export default Navigation;
