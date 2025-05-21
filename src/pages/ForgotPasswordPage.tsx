import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" data-id="pdj0djwuj" data-path="src/pages/ForgotPasswordPage.tsx">
      <header className="py-6 px-4 bg-white border-b" data-id="arsm85qip" data-path="src/pages/ForgotPasswordPage.tsx">
        <div className="container mx-auto" data-id="6oputzilf" data-path="src/pages/ForgotPasswordPage.tsx">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            ImageConvert
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4" data-id="t81xr2hm4" data-path="src/pages/ForgotPasswordPage.tsx">
        <ForgotPasswordForm />
      </main>
      
      <footer className="py-4 border-t bg-white" data-id="vaqun8k91" data-path="src/pages/ForgotPasswordPage.tsx">
        <div className="container mx-auto text-center text-sm text-gray-500" data-id="gwl8obq7b" data-path="src/pages/ForgotPasswordPage.tsx">
          © {new Date().getFullYear()} ImageConvert. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default ForgotPasswordPage;