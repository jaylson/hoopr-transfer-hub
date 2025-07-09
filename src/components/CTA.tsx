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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6 lg:whitespace-nowrap">
            Smarter scouting.<br />
            Easier signings.<br />
            Better connections.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of teams and agents using HOOPR to simplify signings, discover talent, and connect with verified professionals worldwide.
          </p>
          
          </div>
        </div>
    </section>
  );
};

export default CTA;
