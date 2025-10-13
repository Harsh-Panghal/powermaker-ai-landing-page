import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-primary to-accent p-1 transition-all duration-500 hover:scale-105 hover:shadow-lg group"
      aria-label="Toggle theme"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500" />
      
      {/* Sliding Toggle */}
      <div
        className={`relative z-10 w-6 h-6 rounded-full bg-background shadow-lg transform transition-all duration-500 ease-out flex items-center justify-center ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {/* Icon Container with rotation */}
        <div
          className={`transform transition-all duration-500 ${
            isDark ? "rotate-180 scale-100" : "rotate-0 scale-100"
          }`}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-accent" />
          ) : (
            <Sun className="w-4 h-4 text-accent" />
          )}
        </div>
      </div>

      {/* Decorative Stars (only visible in dark mode) */}
      {isDark && (
        <>
          <div className="absolute top-1.5 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-1.5 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
