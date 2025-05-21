import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { sendResetPasswordEmail } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendResetPasswordEmail(email);
      setIsSubmitted(true);
    } catch (error) {

      // Error handling is done in the AuthContext
    } finally {setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
          <CardDescription className="text-center">
            We've sent password reset instructions to your email address if an account exists.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-gray-600 mb-4" data-id="awvi05e9o" data-path="src/components/Auth/ForgotPasswordForm.tsx">
            If you don't receive an email within a few minutes, please check your spam folder or try again.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/login">
            <Button variant="outline">Back to Login</Button>
          </Link>
        </CardFooter>
      </Card>);

  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
        <CardDescription className="text-center">
          Enter your email address and we'll send you instructions to reset your password
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} data-id="4lxpb0qun" data-path="src/components/Auth/ForgotPasswordForm.tsx">
        <CardContent className="space-y-4">
          <div className="space-y-2" data-id="pbbzw3dj4" data-path="src/components/Auth/ForgotPasswordForm.tsx">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />

          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            disabled={isSubmitting}>

            {isSubmitting ?
            <span className="flex items-center justify-center" data-id="7yibbz2qz" data-path="src/components/Auth/ForgotPasswordForm.tsx">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="pr7brl8c4" data-path="src/components/Auth/ForgotPasswordForm.tsx">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="gbaz2rkr5" data-path="src/components/Auth/ForgotPasswordForm.tsx"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="i1ggs6rbm" data-path="src/components/Auth/ForgotPasswordForm.tsx"></path>
                </svg>
                Sending...
              </span> :
            'Send Reset Instructions'}
          </Button>
          <p className="text-center text-sm" data-id="6wusigzzf" data-path="src/components/Auth/ForgotPasswordForm.tsx">
            Remember your password?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>);

};

export default ForgotPasswordForm;