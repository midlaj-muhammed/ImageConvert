import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";

// Landing Page
import LandingPage from "./components/LandingPage/LandingPage";

// Auth Pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AuthSuccessPage from "./pages/AuthSuccessPage";

// Dashboard Pages
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";

// Other Pages
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/resetpassword" element={<ResetPasswordPage />} />
            <Route path="/onauthsuccess" element={<AuthSuccessPage />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
          <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
          } />
            <Route path="/dashboard/history" element={
          <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
          } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;