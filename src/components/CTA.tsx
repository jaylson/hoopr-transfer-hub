
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoopr-dark to-black"></div>
      
      {/* Gradient orbs for visual effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hoopr-blue rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-hoopr-purple rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your <span className="gradient-text">future in basketball</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and teams already leveraging the power of the world's largest transfer network.
          </p>
          
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-white/10 shadow-xl">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Premium Plan</h3>
              <p className="text-gray-400 mb-6">
                Complete access to all advanced features and priority support for your team.
              </p>
              <Button className="bg-gradient-hoopr hover:bg-hoopr-blue text-white w-full md:w-auto px-8">
                View Premium Plans
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Over 2,000 teams and 10,000 professionals already trust Hoopr.app.
                <br />
                Join the largest basketball transfer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
