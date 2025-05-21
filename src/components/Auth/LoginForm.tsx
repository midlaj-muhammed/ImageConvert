import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await login(email, password);
    } catch (error) {

      // Error handling is done in the AuthContext
    } finally {setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login to ImageConvert</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} data-id="3gm7bwufe" data-path="src/components/Auth/LoginForm.tsx">
        <CardContent className="space-y-4">
          <div className="space-y-2" data-id="wvm2jikiw" data-path="src/components/Auth/LoginForm.tsx">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />

          </div>
          <div className="space-y-2" data-id="cdcybpl5r" data-path="src/components/Auth/LoginForm.tsx">
            <div className="flex items-center justify-between" data-id="5dhtct1dq" data-path="src/components/Auth/LoginForm.tsx">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-800">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />

          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            disabled={isSubmitting}>

            {isSubmitting ?
            <span className="flex items-center justify-center" data-id="089ayjeng" data-path="src/components/Auth/LoginForm.tsx">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="zc2dl5j0q" data-path="src/components/Auth/LoginForm.tsx">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="y82yks1h7" data-path="src/components/Auth/LoginForm.tsx"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="frvf63z6w" data-path="src/components/Auth/LoginForm.tsx"></path>
                </svg>
                Logging in...
              </span> :
            'Log in'}
          </Button>
          <p className="text-center text-sm" data-id="dmon0wno6" data-path="src/components/Auth/LoginForm.tsx">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-600 hover:text-purple-800 font-semibold">
              Register
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>);

};

export default LoginForm;