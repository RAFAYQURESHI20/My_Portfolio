import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Education from "./pages/Education.tsx";
import Certificates from "./pages/Certificates.tsx";
import Experience from "./pages/Experience.tsx";
import NotFound from "./pages/NotFound.tsx";
import KhedmaAI from "./pages/KhedmaAI.tsx";
import AuraStrategy from "./pages/AuraStrategy.tsx";
import Chatbot from "./components/Chatbot.tsx";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToHash />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/khedma-ai" element={<KhedmaAI />} />
        <Route path="/aura-strategy" element={<AuraStrategy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Chatbot />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
