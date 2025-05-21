import { ReactNode } from 'react';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" data-id="rd0cwfz76" data-path="src/components/Dashboard/DashboardLayout.tsx">
      <DashboardHeader />
      <main className="flex-grow py-8 px-4" data-id="ec1kjp228" data-path="src/components/Dashboard/DashboardLayout.tsx">
        <div className="container mx-auto" data-id="1o2xcv6t7" data-path="src/components/Dashboard/DashboardLayout.tsx">
          {children}
        </div>
      </main>
      <footer className="border-t bg-white py-4" data-id="q8l5ao3zm" data-path="src/components/Dashboard/DashboardLayout.tsx">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm" data-id="ujj73mdwz" data-path="src/components/Dashboard/DashboardLayout.tsx">
          © {new Date().getFullYear()} ImageConvert. All rights reserved.
        </div>
      </footer>
    </div>);

};

export default DashboardLayout;