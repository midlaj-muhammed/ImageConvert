import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 px-4 border-b sticky top-0 z-50 bg-white/90 backdrop-blur-md" data-id="6s0enylx3" data-path="src/components/LandingPage/Header.tsx">
      <div className="container mx-auto" data-id="r489xrc4l" data-path="src/components/LandingPage/Header.tsx">
        <div className="flex justify-between items-center" data-id="sg8ztjz6u" data-path="src/components/LandingPage/Header.tsx">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            ImageConvert
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-id="s1ogmyzoy" data-path="src/components/LandingPage/Header.tsx">
            <Link to="/#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
            {isAuthenticated ?
            <>
                <Link to="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <Button
                variant="ghost"
                onClick={logout}
                className="text-red-600 hover:text-red-800 hover:bg-red-50">

                  Logout
                </Button>
              </> :

            <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                    Sign Up Free
                  </Button>
                </Link>
              </>
            }
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu} data-id="7fygq4xgs" data-path="src/components/LandingPage/Header.tsx">

            {isMobileMenuOpen ?
            <X size={24} /> :

            <Menu size={24} />
            }
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <div className="md:hidden pt-4 pb-2" data-id="1yapjyuki" data-path="src/components/LandingPage/Header.tsx">
            <div className="flex flex-col space-y-4" data-id="7z2qtu78u" data-path="src/components/LandingPage/Header.tsx">
              <Link
              to="/#features"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Features
              </Link>
              <Link
              to="/#pricing"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Pricing
              </Link>
              <Link
              to="/#testimonials"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Testimonials
              </Link>
              {isAuthenticated ?
            <>
                  <Link
                to="/dashboard"
                className="py-2"
                onClick={() => setIsMobileMenuOpen(false)}>

                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <Button
                variant="ghost"
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-red-600 hover:text-red-800 hover:bg-red-50 w-full">

                    Logout
                  </Button>
                </> :

            <>
                  <Link
                to="/login"
                className="py-2"
                onClick={() => setIsMobileMenuOpen(false)}>

                    <Button variant="ghost" className="w-full">Login</Button>
                  </Link>
                  <Link
                to="/register"
                className="py-2"
                onClick={() => setIsMobileMenuOpen(false)}>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                      Sign Up Free
                    </Button>
                  </Link>
                </>
            }
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Header;