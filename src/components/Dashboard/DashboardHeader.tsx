import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from
'@/components/ui/dropdown-menu';

export const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 border-b sticky top-0 z-50 bg-white/90 backdrop-blur-md" data-id="lv8syr01n" data-path="src/components/Dashboard/DashboardHeader.tsx">
      <div className="container mx-auto" data-id="uayqgnslr" data-path="src/components/Dashboard/DashboardHeader.tsx">
        <div className="flex justify-between items-center" data-id="wqokubmli" data-path="src/components/Dashboard/DashboardHeader.tsx">
          <div className="flex items-center space-x-8" data-id="smc327ygc" data-path="src/components/Dashboard/DashboardHeader.tsx">
            <Link to="/dashboard" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              ImageConvert
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6" data-id="4hbi1w4w1" data-path="src/components/Dashboard/DashboardHeader.tsx">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link to="/dashboard/history" className="text-gray-600 hover:text-gray-900">History</Link>
              <Link to="/dashboard/settings" className="text-gray-600 hover:text-gray-900">Settings</Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4" data-id="wotju7z1n" data-path="src/components/Dashboard/DashboardHeader.tsx">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user?.Name || user?.Email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span data-id="ekovgus2b" data-path="src/components/Dashboard/DashboardHeader.tsx">Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span data-id="4xdxtrr3v" data-path="src/components/Dashboard/DashboardHeader.tsx">Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span data-id="lvllmqpvt" data-path="src/components/Dashboard/DashboardHeader.tsx">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-id="0o8ylbtkv" data-path="src/components/Dashboard/DashboardHeader.tsx">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <div className="md:hidden pt-4 pb-2" data-id="5eehc7g2z" data-path="src/components/Dashboard/DashboardHeader.tsx">
            <div className="flex flex-col space-y-4" data-id="k4y0j9svl" data-path="src/components/Dashboard/DashboardHeader.tsx">
              <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Dashboard
              </Link>
              <Link
              to="/dashboard/history"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                History
              </Link>
              <Link
              to="/dashboard/settings"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Settings
              </Link>
              <Link
              to="/dashboard/profile"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsMobileMenuOpen(false)}>

                Profile
              </Link>
              <Button
              variant="ghost"
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }}
              className="text-red-600 hover:text-red-800 hover:bg-red-50 justify-start px-2">

                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        }
      </div>
    </header>);

};

export default DashboardHeader;