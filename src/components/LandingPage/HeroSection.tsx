import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative py-20 overflow-hidden" data-id="jrgdcezdj" data-path="src/components/LandingPage/HeroSection.tsx">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0" data-id="868sn17gp" data-path="src/components/LandingPage/HeroSection.tsx">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" data-id="1mgb6ul3t" data-path="src/components/LandingPage/HeroSection.tsx"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" data-id="swqvoouhs" data-path="src/components/LandingPage/HeroSection.tsx"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" data-id="zm1gfvq5q" data-path="src/components/LandingPage/HeroSection.tsx"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10" data-id="o9os7tksl" data-path="src/components/LandingPage/HeroSection.tsx">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center" data-id="h1vw5zq58" data-path="src/components/LandingPage/HeroSection.tsx">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" data-id="vcv0hwx5c" data-path="src/components/LandingPage/HeroSection.tsx">
            <span className="block" data-id="61j9hjxlj" data-path="src/components/LandingPage/HeroSection.tsx">Transform Your Images</span>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text block" data-id="u052hy4ip" data-path="src/components/LandingPage/HeroSection.tsx">
              Instantly & Effortlessly
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl" data-id="yg9c4q0su" data-path="src/components/LandingPage/HeroSection.tsx">
            The fastest way to convert your images to any format. Free, secure, and no software to install.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center" data-id="qx9yxz3sq" data-path="src/components/LandingPage/HeroSection.tsx">
            {isAuthenticated ?
            <Link to="/dashboard">
                <Button className="text-lg py-6 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                  Go to Dashboard
                </Button>
              </Link> :

            <>
                <Link to="/register">
                  <Button className="text-lg py-6 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                    Get Started — It's Free
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="text-lg py-6 px-8">
                    Log In
                  </Button>
                </Link>
              </>
            }
          </div>
          
          <div className="mt-12 p-5 bg-white/30 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm" data-id="9sjxqyouw" data-path="src/components/LandingPage/HeroSection.tsx">
            <p className="text-sm text-gray-500" data-id="pkq9bg86n" data-path="src/components/LandingPage/HeroSection.tsx">
              Your images are processed locally in your browser. 
              <span className="block mt-1 font-medium" data-id="7rpwtvo3g" data-path="src/components/LandingPage/HeroSection.tsx">We never store or access your files.</span>
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;