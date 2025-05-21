import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
{
  name: 'Sarah Johnson',
  role: 'Marketing Director',
  company: 'Creative Solutions',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  content: 'ImageConvert has been a game-changer for our marketing team. We need to quickly optimize images for various platforms, and this tool does it perfectly every time. The batch processing feature saves us hours each week.',
  stars: 5
},
{
  name: 'Michael Chen',
  role: 'Web Developer',
  company: 'TechFirm Inc.',
  image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  content: "As a developer, I need to optimize images for web performance. ImageConvert's local processing means I don't have to worry about uploading client assets to third-party servers. It's fast, reliable, and the results are excellent.",
  stars: 5
},
{
  name: 'Emma Rodriguez',
  role: 'Graphic Designer',
  company: 'Design Studio',
  image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  content: 'I work with different file formats daily, and ImageConvert handles them all perfectly. The interface is intuitive, and I love that I can see a preview before finalizing the conversion. It\'s become an essential tool in my workflow.',
  stars: 4
},
{
  name: 'David Kim',
  role: 'E-commerce Manager',
  company: 'Retail Brands',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  content: 'Our product images need consistent formatting for our online store. ImageConvert\'s batch processing capability has made managing thousands of product images so much easier. Well worth the premium subscription!',
  stars: 5
}];


export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white" data-id="sj4aiq8u7" data-path="src/components/LandingPage/TestimonialsSection.tsx">
      <div className="container px-4 mx-auto" data-id="fuvaznspc" data-path="src/components/LandingPage/TestimonialsSection.tsx">
        <div className="text-center max-w-3xl mx-auto mb-16" data-id="9gq0fska2" data-path="src/components/LandingPage/TestimonialsSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="0gtd7uu60" data-path="src/components/LandingPage/TestimonialsSection.tsx">
            Trusted by <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text" data-id="zhk76zzc6" data-path="src/components/LandingPage/TestimonialsSection.tsx">Thousands</span> of Professionals
          </h2>
          <p className="text-xl text-gray-600" data-id="d3xek2186" data-path="src/components/LandingPage/TestimonialsSection.tsx">
            See what our users are saying about their experience with ImageConvert.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="cc07epk30" data-path="src/components/LandingPage/TestimonialsSection.tsx">
          {testimonials.map((testimonial, index) =>
          <Card key={index} className="border border-gray-200 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6" data-id="0pvamjdn3" data-path="src/components/LandingPage/TestimonialsSection.tsx">
                  <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover" data-id="7mj9kog4h" data-path="src/components/LandingPage/TestimonialsSection.tsx" />

                  <div data-id="wgto9qroa" data-path="src/components/LandingPage/TestimonialsSection.tsx">
                    <h4 className="font-semibold text-lg" data-id="48rvmp37e" data-path="src/components/LandingPage/TestimonialsSection.tsx">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm" data-id="9ji43pznh" data-path="src/components/LandingPage/TestimonialsSection.tsx">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4" data-id="kog14zl2f" data-path="src/components/LandingPage/TestimonialsSection.tsx">
                  {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  fill={i < testimonial.stars ? 'currentColor' : 'none'}
                  className={i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}
                  size={18} />

                )}
                </div>
                
                <p className="text-gray-700 italic" data-id="d11oj12rs" data-path="src/components/LandingPage/TestimonialsSection.tsx">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;