import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col" data-id="51sdjjg3n" data-path="src/components/LandingPage/LandingPage.tsx">
      <Header />
      <main className="flex-grow" data-id="lufcn3uw9" data-path="src/components/LandingPage/LandingPage.tsx">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>);

};

export default LandingPage;