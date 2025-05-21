import { Button } from "@/components/ui/button";
import { ImageConversionApp } from "@/components/ImageConverter/ImageConversionApp";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col" data-id="et79xek7b" data-path="src/pages/HomePage.tsx">
      <header className="py-6 px-8 border-b sticky top-0 z-10 bg-white/80 backdrop-blur-sm" data-id="t0kcfoz48" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto flex justify-between items-center" data-id="939lyffck" data-path="src/pages/HomePage.tsx">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text" data-id="y06awsit9" data-path="src/pages/HomePage.tsx">ImageConvert</h1>
          <nav className="space-x-4" data-id="pnzhmernq" data-path="src/pages/HomePage.tsx">
            <Button variant="link">Home</Button>
            <Button variant="link">About</Button>
            <Button variant="link">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 flex-1" data-id="iejpma4b5" data-path="src/pages/HomePage.tsx">
        <section className="text-center max-w-3xl mx-auto mb-12" data-id="ciz132uag" data-path="src/pages/HomePage.tsx">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-transparent bg-clip-text" data-id="811ao3im0" data-path="src/pages/HomePage.tsx">
            Transform Your Images Instantly
          </h2>
          <p className="text-lg text-gray-600 mb-8" data-id="y1rm93oy1" data-path="src/pages/HomePage.tsx">
            Easy, fast, and secure image conversion between popular formats.
            No registration required, completely free to use.
          </p>
        </section>

        <section className="py-8" data-id="iip9e5x17" data-path="src/pages/HomePage.tsx">
          <ImageConversionApp />
        </section>
      </main>

      <footer className="border-t py-8 mt-auto bg-gray-50" data-id="spm4etu4u" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 text-center text-gray-500" data-id="9yliza8kf" data-path="src/pages/HomePage.tsx">
          <p className="mb-2" data-id="pcee4o470" data-path="src/pages/HomePage.tsx">© {new Date().getFullYear()} ImageConvert. All rights reserved.</p>
          <p className="text-sm" data-id="oqvui5brv" data-path="src/pages/HomePage.tsx">Your images are processed locally in your browser. We don't store or share your data.</p>
        </div>
      </footer>
    </div>);

};

export default HomePage;