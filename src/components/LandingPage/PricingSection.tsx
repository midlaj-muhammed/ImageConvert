import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
{
  name: 'Free',
  description: 'Essential features for occasional use',
  price: '$0',
  period: 'forever',
  features: [
  'Convert images to popular formats',
  'Process up to 5 images per day',
  'Max file size: 5MB',
  'Standard quality conversion',
  'Browser-based processing only'],

  buttonText: 'Get Started',
  buttonVariant: 'outline',
  highlight: false
},
{
  name: 'Premium',
  description: 'Perfect for professionals and creatives',
  price: '$9.99',
  period: 'per month',
  features: [
  'All Free features included',
  'Unlimited conversions',
  'Max file size: 100MB',
  'High quality conversion settings',
  'Batch processing',
  'Conversion history saved',
  'Cloud storage integration',
  'Priority support'],

  buttonText: 'Upgrade to Premium',
  buttonVariant: 'default',
  highlight: true
},
{
  name: 'Enterprise',
  description: 'For teams and businesses',
  price: '$99',
  period: 'per month',
  features: [
  'All Premium features included',
  'Team management',
  'Shared conversion history',
  'API access for integration',
  'Custom format support',
  'Dedicated support',
  'Service level agreement',
  'Custom branding options'],

  buttonText: 'Contact Sales',
  buttonVariant: 'outline',
  highlight: false
}];


export const PricingSection = () => {
  return (
    <section className="py-24" id="pricing" data-id="b0bqvrvqp" data-path="src/components/LandingPage/PricingSection.tsx">
      <div className="container px-4 mx-auto" data-id="cojwprxjl" data-path="src/components/LandingPage/PricingSection.tsx">
        <div className="text-center max-w-3xl mx-auto mb-16" data-id="3wtqv17x3" data-path="src/components/LandingPage/PricingSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="nyceapdfq" data-path="src/components/LandingPage/PricingSection.tsx">
            Choose the <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text" data-id="d2s1jbb8a" data-path="src/components/LandingPage/PricingSection.tsx">Perfect Plan</span> for Your Needs
          </h2>
          <p className="text-xl text-gray-600" data-id="h9bn45nsu" data-path="src/components/LandingPage/PricingSection.tsx">
            Start with our free tier or upgrade for more powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="0ouzkek9a" data-path="src/components/LandingPage/PricingSection.tsx">
          {plans.map((plan, index) =>
          <Card
            key={index}
            className={`border ${plan.highlight ? 'border-purple-400 shadow-xl' : 'border-gray-200'} relative`}>

              {plan.highlight &&
            <div className="absolute top-0 inset-x-0 transform -translate-y-1/2" data-id="mfnjcho5i" data-path="src/components/LandingPage/PricingSection.tsx">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-1 px-4 rounded-full text-sm font-medium inline-block" data-id="1jyawfbl4" data-path="src/components/LandingPage/PricingSection.tsx">
                    Most Popular
                  </span>
                </div>
            }
              
              <CardHeader className={`pb-8 ${plan.highlight ? 'bg-gradient-to-br from-purple-50 to-indigo-50' : ''}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-3" data-id="9xiskbab4" data-path="src/components/LandingPage/PricingSection.tsx">
                  <span className="text-4xl font-bold" data-id="sv74q4wjr" data-path="src/components/LandingPage/PricingSection.tsx">{plan.price}</span>
                  <span className="text-gray-500 ml-2" data-id="9qvj1oaso" data-path="src/components/LandingPage/PricingSection.tsx">{plan.period}</span>
                </div>
                <p className="text-gray-500 mt-3" data-id="wj1uugulc" data-path="src/components/LandingPage/PricingSection.tsx">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-3" data-id="j5ddb1grh" data-path="src/components/LandingPage/PricingSection.tsx">
                  {plan.features.map((feature, featureIndex) =>
                <li key={featureIndex} className="flex items-start" data-id="3nvvh0784" data-path="src/components/LandingPage/PricingSection.tsx">
                      <Check className="text-green-500 h-5 w-5 mr-2 mt-0.5 shrink-0" />
                      <span data-id="2hy4s6hn7" data-path="src/components/LandingPage/PricingSection.tsx">{feature}</span>
                    </li>
                )}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button
                variant={plan.buttonVariant as 'default' | 'outline'}
                className={`w-full ${plan.highlight ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white' : ''}`}
                asChild>

                  <Link to={plan.name === 'Free' ? '/register' : '#contact'}>
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default PricingSection;