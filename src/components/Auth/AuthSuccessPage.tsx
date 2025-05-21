import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const AuthSuccessPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4" data-id="qlumvqq2i" data-path="src/components/Auth/AuthSuccessPage.tsx">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <div className="flex justify-center mb-6" data-id="dwzdvp5xr" data-path="src/components/Auth/AuthSuccessPage.tsx">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-center">Registration Verified!</CardTitle>
          <CardDescription className="text-center">
            Your account has been successfully verified.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600" data-id="3qtbezdgx" data-path="src/components/Auth/AuthSuccessPage.tsx">
            You will be redirected to the login page in {countdown} seconds.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">

            Login Now
          </Button>
        </CardFooter>
      </Card>
    </div>);

};

export default AuthSuccessPage;