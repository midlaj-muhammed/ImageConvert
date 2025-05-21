import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen" data-id="2o62n6tkv" data-path="src/components/Auth/ProtectedRoute.tsx">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" data-id="wyp0mdk4v" data-path="src/components/Auth/ProtectedRoute.tsx"></div>
      </div>);

  }

  if (!isAuthenticated) {
    // Redirect to login page and pass the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;