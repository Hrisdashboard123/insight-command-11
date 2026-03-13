import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import InsightOverview from "./pages/dashboard/InsightOverview";
import DataSources from "./pages/dashboard/DataSources";
import AIGenerator from "./pages/dashboard/AIGenerator";
import AnalyticsDashboard from "./pages/dashboard/AnalyticsDashboard";
import StrategicReports from "./pages/dashboard/StrategicReports";
import PredictiveIntelligence from "./pages/dashboard/PredictiveIntelligence";
import BIFeed from "./pages/dashboard/BIFeed";
import DataExports from "./pages/dashboard/DataExports";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<InsightOverview />} />
            <Route path="data-sources" element={<DataSources />} />
            <Route path="ai-generator" element={<AIGenerator />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
            <Route path="reports" element={<StrategicReports />} />
            <Route path="predictive" element={<PredictiveIntelligence />} />
            <Route path="feed" element={<BIFeed />} />
            <Route path="exports" element={<DataExports />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
