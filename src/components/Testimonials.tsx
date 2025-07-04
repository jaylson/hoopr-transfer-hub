
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HOOPR is exactly what the basketball world needed. I’ve been working internationally for 12 years and I’ve never seen a platform bring everything — player listings, job openings, verified contacts — into one place like this. Total gamechanger.",
      author: "Florian Collet",
      position: "FIBA Agent",
      club: "France"
    },
    {
      quote: "The idea behind HOOPR is so obvious in hindsight — a clean, professional space for recruitment. No more chasing agents on WhatsApp or guessing who actually represents a player. It’s going to save us so much time this offseason.",
      author: "Santi Sanchez",
      position: "GM",
      club: "Club Atlético Peñarol (Israel)"
    },
    {
      quote: "Before HOOPR, I was using spreadsheets, email chains, and notes to track player availability and team interest. Now it’s all right here. Efficient, transparent, and built for how we actually work.",
      author: "Zach Charles",
      position: "FIBA Agent",
      club: "USA"
    },
    {
      quote: "I’ve already found two new players and posted three job openings in the first week. The filters, shortlists, and direct messaging — it just works. This isn’t another social network, it’s a serious business tool.",
      author: "Yair Guartz",
      position: "Head Coach",
      club: "Elitzur Yavne (Israel)"
    },
    {
      quote: "HOOPR makes me feel like I’m not operating in the dark anymore. You can actually see which teams are hiring, which players are available, and connect without the usual runaround. It’s about time.",
      author: "Mike Silverman",
      position: "FIBA Agent",
      club: "USA"
    },
    {
      quote: "I used to waste hours trying to figure out who to contact for each team. With HOOPR, I can filter by league, country, or role and message the right people instantly. This will completely change how we work.",
      author: "Pascal Beiruty",
      position: "FIBA Agent",
      club: "Lebanon"
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
