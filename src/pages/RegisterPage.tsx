import RegisterForm from '@/components/Auth/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" data-id="djlttusc3" data-path="src/pages/RegisterPage.tsx">
      <header className="py-6 px-4 bg-white border-b" data-id="dghsohk2q" data-path="src/pages/RegisterPage.tsx">
        <div className="container mx-auto" data-id="49chz7tpc" data-path="src/pages/RegisterPage.tsx">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            ImageConvert
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4" data-id="6286h09dq" data-path="src/pages/RegisterPage.tsx">
        <RegisterForm />
      </main>
      
      <footer className="py-4 border-t bg-white" data-id="l3fb016k0" data-path="src/pages/RegisterPage.tsx">
        <div className="container mx-auto text-center text-sm text-gray-500" data-id="3n6lvt4d0" data-path="src/pages/RegisterPage.tsx">
          © {new Date().getFullYear()} ImageConvert. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default RegisterPage;