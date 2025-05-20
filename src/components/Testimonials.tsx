
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hoopr.app completely transformed our approach to the transfer market. We found talent that we wouldn't have discovered otherwise.",
      author: "Michael Johnson",
      position: "Sports Director",
      club: "Chicago Bulls"
    },
    {
      quote: "The most innovative platform I've ever used in basketball. It simplified our scouting process and transfer negotiations.",
      author: "Sarah Williams",
      position: "Head Scout",
      club: "Boston Celtics"
    },
    {
      quote: "As an agent, Hoopr.app allowed me to connect my clients directly with interested teams, eliminating unnecessary intermediaries.",
      author: "David Thompson",
      position: "NBA Agent",
      club: "Elite Sports Management"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What our <span className="gradient-text">clients</span> say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how Hoopr.app is transforming the transfer market for basketball teams and professionals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-lg border border-gray-800 shadow-lg shadow-hoopr-blue/5">
                    <svg className="w-12 h-12 text-hoopr-blue/30 mb-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-hoopr flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author[0]}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.club}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-gradient-hoopr' : 'bg-gray-700'
                } focus:outline-none`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
