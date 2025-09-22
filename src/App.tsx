import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Internships from "./pages/Internships";
import Roadmaps from "./pages/Roadmaps";
import FrontendRoadmap from "./pages/FrontendRoadmap";
import BackendRoadmap from "./pages/BackendRoadmap";
import AIMLRoadmap from "./pages/AIMLRoadmap";
import ARVRRoadmap from "./pages/ARVRRoadmap";
import DSARoadmap from "./pages/DSARoadmap";
import BlockchainRoadmap from "./pages/BlockchainRoadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmaps/frontend" element={<FrontendRoadmap />} />
          <Route path="/roadmaps/backend" element={<BackendRoadmap />} />
          <Route path="/roadmaps/aiml" element={<AIMLRoadmap />} />
          <Route path="/roadmaps/arvr" element={<ARVRRoadmap />} />
          <Route path="/roadmaps/dsa" element={<DSARoadmap />} />
          <Route path="/roadmaps/blockchain" element={<BlockchainRoadmap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
