import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermOfUse from "./pages/TermOfUse";
import NotFound from "./pages/NotFound";
import ScrollToTop from './components/ScrollToTop';
import Snowfall from "react-snowfall";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* <Snowfall
            snowflakeCount={100} // Thoda zyada for fuller look, but not too much
            color="#ffffff" // Pure white
            radius={[0.5, 4.0]} // Chhote-bade variation (natural lage)
            speed={[0.5, 3.0]} // Slow se medium falling – gentle
            wind={[-0.5, 1.0]} // Halka sa sway (jaise real snow)
            rotationSpeed={[-1.0, 1.0]} // Thodi rotation for life-like feel
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 50, // Navigation ke neeche ya upar adjust kar lo
              opacity: 0.9, // Thoda transparent for subtle effect (optional)
            }}
          /> */}
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/term-of-use" element={<TermOfUse />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
