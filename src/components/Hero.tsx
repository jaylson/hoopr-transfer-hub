
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-hoopr-dark to-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 md:py-24" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/5 mb-12 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionizing the <span className="gradient-text">basketball recruitment</span> market
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              HOOPR brings the global basketball market into one platform—giving teams and agents real-time insights, player data, and a direct line to top decision-makers
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-hoopr-blue-light text-hoopr-blue-light hover:bg-hoopr-blue/10 px-8 py-6 text-lg"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) {
                    const yOffset = 80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Schedule live demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-hoopr-dark flex items-center justify-center overflow-hidden">
                    <span className="text-xs">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-400">
                Over <span className="font-bold text-white">2,000+</span> teams already using
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/5 relative md:ml-8 max-w-2xl">
            <div className="relative">
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-hoopr-blue/20 to-hoopr-purple/20 backdrop-blur-sm border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ArU8xSZcf7k?autoplay=1&mute=0&loop=1&playlist=ArU8xSZcf7k&controls=1&enablejsapi=1&showinfo=0&rel=0&modestbranding=1&origin=http://localhost:5173"
                  title="Platform Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-medium">Platform Demo</h3>
                  <p className="text-gray-300 text-sm">See how Hoopr works in action</p>
                </div>
              </AspectRatio>
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-hoopr rounded-lg opacity-50 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-hoopr-purple rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
