import LoginForm from '@/components/Auth/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" data-id="2f24j0zt0" data-path="src/pages/LoginPage.tsx">
      <header className="py-6 px-4 bg-white border-b" data-id="m2z3or1x7" data-path="src/pages/LoginPage.tsx">
        <div className="container mx-auto" data-id="9kozeld16" data-path="src/pages/LoginPage.tsx">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            ImageConvert
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4" data-id="b7wwj3dym" data-path="src/pages/LoginPage.tsx">
        <LoginForm />
      </main>
      
      <footer className="py-4 border-t bg-white" data-id="bbbuvjzn3" data-path="src/pages/LoginPage.tsx">
        <div className="container mx-auto text-center text-sm text-gray-500" data-id="ce52e4prh" data-path="src/pages/LoginPage.tsx">
          © {new Date().getFullYear()} ImageConvert. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default LoginPage;