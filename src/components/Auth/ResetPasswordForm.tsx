import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

export const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { resetPassword } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, [location]);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    if (!token) {
      setPasswordError('Invalid or missing reset token');
      return;
    }

    setIsSubmitting(true);

    try {
      await resetPassword(token, password);
    } catch (error) {

      // Error handling is done in the AuthContext
    } finally {setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Set New Password</CardTitle>
        <CardDescription className="text-center">
          Enter your new password below
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} data-id="0to032pjh" data-path="src/components/Auth/ResetPasswordForm.tsx">
        <CardContent className="space-y-4">
          <div className="space-y-2" data-id="quovl87cs" data-path="src/components/Auth/ResetPasswordForm.tsx">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />

            <p className="text-xs text-gray-500" data-id="golp2tudy" data-path="src/components/Auth/ResetPasswordForm.tsx">
              Password must be at least 8 characters
            </p>
          </div>
          <div className="space-y-2" data-id="2poqka07z" data-path="src/components/Auth/ResetPasswordForm.tsx">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />

            {passwordError &&
            <p className="text-xs text-red-500" data-id="eb34ptwhz" data-path="src/components/Auth/ResetPasswordForm.tsx">{passwordError}</p>
            }
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            disabled={isSubmitting || !token}>

            {isSubmitting ?
            <span className="flex items-center justify-center" data-id="jtsg5v0q0" data-path="src/components/Auth/ResetPasswordForm.tsx">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="n303re9jk" data-path="src/components/Auth/ResetPasswordForm.tsx">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="iricchxqy" data-path="src/components/Auth/ResetPasswordForm.tsx"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="c6w317f0c" data-path="src/components/Auth/ResetPasswordForm.tsx"></path>
                </svg>
                Resetting...
              </span> :
            'Reset Password'}
          </Button>
          <p className="text-center text-sm" data-id="85zhwrvq1" data-path="src/components/Auth/ResetPasswordForm.tsx">
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
              Back to Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>);

};

export default ResetPasswordForm;