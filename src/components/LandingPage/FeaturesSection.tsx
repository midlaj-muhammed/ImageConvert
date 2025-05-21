import {
  Zap,
  Shield,
  FileImage,
  Layout,
  UploadCloud,
  Download,
  Calendar,
  History } from
'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
{
  icon: <Zap size={40} className="text-purple-500" />,
  title: 'Fast Conversion',
  description: 'Transform your images in seconds with our lightning-fast conversion engine.'
},
{
  icon: <Shield size={40} className="text-purple-500" />,
  title: 'Secure & Private',
  description: 'Your images never leave your device. All processing happens directly in your browser.'
},
{
  icon: <FileImage size={40} className="text-purple-500" />,
  title: 'Multiple Formats',
  description: 'Convert to PNG, JPEG, WEBP, and more with a single click.'
},
{
  icon: <Layout size={40} className="text-purple-500" />,
  title: 'Batch Processing',
  description: 'Convert multiple images at once to save time when upgrading to premium.'
},
{
  icon: <UploadCloud size={40} className="text-purple-500" />,
  title: 'Cloud Storage',
  description: 'Premium users can save converted images directly to cloud storage platforms.'
},
{
  icon: <Download size={40} className="text-purple-500" />,
  title: 'Bulk Download',
  description: 'Quickly download your converted images in a ZIP file with our premium plan.'
},
{
  icon: <Calendar size={40} className="text-purple-500" />,
  title: 'Conversion History',
  description: 'Keep track of your past conversions to easily re-download files when needed.'
},
{
  icon: <History size={40} className="text-purple-500" />,
  title: 'Automatic Backup',
  description: 'Premium plans include automatic backups of your conversion history.'
}];


export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50" data-id="gj73eqokf" data-path="src/components/LandingPage/FeaturesSection.tsx">
      <div className="container px-4 mx-auto" data-id="yl3lqoo8g" data-path="src/components/LandingPage/FeaturesSection.tsx">
        <div className="text-center max-w-3xl mx-auto mb-16" data-id="6pecsom2a" data-path="src/components/LandingPage/FeaturesSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="dibof3yw8" data-path="src/components/LandingPage/FeaturesSection.tsx">
            Powerful Features for <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text" data-id="ihwxcg7ws" data-path="src/components/LandingPage/FeaturesSection.tsx">Every Image Need</span>
          </h2>
          <p className="text-xl text-gray-600" data-id="1xdwt603c" data-path="src/components/LandingPage/FeaturesSection.tsx">
            Our app provides everything you need to convert and manage your images effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="timhccw9n" data-path="src/components/LandingPage/FeaturesSection.tsx">
          {features.map((feature, index) =>
          <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="mb-4 p-3 rounded-full bg-purple-50" data-id="4p704442n" data-path="src/components/LandingPage/FeaturesSection.tsx">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" data-id="cf3no88xl" data-path="src/components/LandingPage/FeaturesSection.tsx">{feature.title}</h3>
                <p className="text-gray-500" data-id="uev5isgyz" data-path="src/components/LandingPage/FeaturesSection.tsx">{feature.description}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;