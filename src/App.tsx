import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Masomo from "./pages/Masomo";
import Pakua from "./pages/Pakua";
import Ratiba from "./pages/Ratiba";
import Muundo from "./pages/Muundo";
import Wasiliana from "./pages/Wasiliana";
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
          <Route path="/masomo" element={<Masomo />} />
          <Route path="/pakua" element={<Pakua />} />
          <Route path="/ratiba" element={<Ratiba />} />
          <Route path="/muundo" element={<Muundo />} />
          <Route path="/wasiliana" element={<Wasiliana />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
