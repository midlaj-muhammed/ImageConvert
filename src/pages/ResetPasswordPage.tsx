import ResetPasswordForm from '@/components/Auth/ResetPasswordForm';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" data-id="18ac2ky0w" data-path="src/pages/ResetPasswordPage.tsx">
      <header className="py-6 px-4 bg-white border-b" data-id="h97lnedeb" data-path="src/pages/ResetPasswordPage.tsx">
        <div className="container mx-auto" data-id="3l2ud1mms" data-path="src/pages/ResetPasswordPage.tsx">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            ImageConvert
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4" data-id="ew3p1ll6x" data-path="src/pages/ResetPasswordPage.tsx">
        <ResetPasswordForm />
      </main>
      
      <footer className="py-4 border-t bg-white" data-id="7cgpmmj2y" data-path="src/pages/ResetPasswordPage.tsx">
        <div className="container mx-auto text-center text-sm text-gray-500" data-id="2i4st5mu0" data-path="src/pages/ResetPasswordPage.tsx">
          © {new Date().getFullYear()} ImageConvert. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default ResetPasswordPage;