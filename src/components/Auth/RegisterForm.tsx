import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();

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

    setIsSubmitting(true);

    try {
      await register(email, password);
    } catch (error) {

      // Error handling is done in the AuthContext
    } finally {setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
        <CardDescription className="text-center">
          Register to save your conversion history and preferences
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} data-id="qzx17sj6h" data-path="src/components/Auth/RegisterForm.tsx">
        <CardContent className="space-y-4">
          <div className="space-y-2" data-id="zwaytng8o" data-path="src/components/Auth/RegisterForm.tsx">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />

          </div>
          <div className="space-y-2" data-id="mmj8lpykl" data-path="src/components/Auth/RegisterForm.tsx">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />

            <p className="text-xs text-gray-500" data-id="8vslj08nf" data-path="src/components/Auth/RegisterForm.tsx">
              Password must be at least 8 characters
            </p>
          </div>
          <div className="space-y-2" data-id="jtcwy9fcj" data-path="src/components/Auth/RegisterForm.tsx">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />

            {passwordError &&
            <p className="text-xs text-red-500" data-id="bvlttpo0o" data-path="src/components/Auth/RegisterForm.tsx">{passwordError}</p>
            }
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            disabled={isSubmitting}>

            {isSubmitting ?
            <span className="flex items-center justify-center" data-id="1paqd7xz2" data-path="src/components/Auth/RegisterForm.tsx">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="2ujaqm91d" data-path="src/components/Auth/RegisterForm.tsx">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="c7873ciuf" data-path="src/components/Auth/RegisterForm.tsx"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="93hqpgn7j" data-path="src/components/Auth/RegisterForm.tsx"></path>
                </svg>
                Registering...
              </span> :
            'Register'}
          </Button>
          <p className="text-center text-sm" data-id="oj5j9vznm" data-path="src/components/Auth/RegisterForm.tsx">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>);

};

export default RegisterForm;