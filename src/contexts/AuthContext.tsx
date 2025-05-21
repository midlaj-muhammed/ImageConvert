import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

type User = {
  ID: string;
  Name: string;
  Email: string;
  CreateTime: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  sendResetPasswordEmail: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode;}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        const { data, error } = await window.ezsite.apis.getUserInfo();
        if (error) {
          // User is not logged in
          setUser(null);
          setIsLoading(false);
          return;
        }

        // User is logged in
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error checking auth status:", error);
        setUser(null);
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { error } = await window.ezsite.apis.login({ email, password });
      if (error) throw error;

      // Get user info after successful login
      const { data, error: userError } = await window.ezsite.apis.getUserInfo();
      if (userError) throw userError;

      setUser(data);
      navigate('/dashboard');
      toast({
        title: "Login successful",
        description: `Welcome back, ${data.Name || data.Email}!`
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Invalid email or password",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { error } = await window.ezsite.apis.register({ email, password });
      if (error) throw error;

      toast({
        title: "Registration successful",
        description: "Please check your email to verify your account."
      });
      navigate('/login');
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Could not create account",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await window.ezsite.apis.logout();
      if (error) throw error;

      setUser(null);
      navigate('/');
      toast({
        title: "Logged out",
        description: "You have been successfully logged out."
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout failed",
        description: error instanceof Error ? error.message : "Could not log out",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    setIsLoading(true);
    try {
      const { error } = await window.ezsite.apis.resetPassword({ token, password });
      if (error) throw error;

      toast({
        title: "Password reset successful",
        description: "Your password has been updated. You can now log in with your new password."
      });
      navigate('/login');
    } catch (error) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed",
        description: error instanceof Error ? error.message : "Could not reset password",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const sendResetPasswordEmail = async (email: string) => {
    setIsLoading(true);
    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({ email });
      if (error) throw error;

      toast({
        title: "Reset email sent",
        description: "If an account exists with that email, you will receive password reset instructions."
      });
    } catch (error) {
      console.error("Send reset email error:", error);
      toast({
        title: "Failed to send reset email",
        description: error instanceof Error ? error.message : "Could not send reset email",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        resetPassword,
        sendResetPasswordEmail
      }}>

      {children}
    </AuthContext.Provider>);

};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};