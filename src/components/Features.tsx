
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Global Network',
      description: 'Connect with teams and professionals from around the world on a single platform.',
      icon: '🌎',
    },
    {
      title: 'Data Analysis',
      description: 'Data-driven decisions with advanced insights on players and market trends.',
      icon: '📊',
    },
    {
      title: 'Secure Communication',
      description: 'Encrypted and secure messaging for confidential negotiations.',
      icon: '🔒',
    },
    {
      title: 'Contract Management',
      description: 'Tools to simplify the creation and management of contracts.',
      icon: '📝',
    },
    {
      title: 'Intelligent Scouting',
      description: 'Find talent that perfectly matches your team's criteria.',
      icon: '🔍',
    },
    {
      title: 'Video Analysis',
      description: 'Comprehensive video library to evaluate player performance.',
      icon: '🎥',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-hoopr-dark py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why choose <span className="gradient-text">Hoopr.app</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our platform is designed to meet the specific needs of the modern basketball transfer market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-hoopr-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-hoopr-blue/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-hoopr-blue/10 to-hoopr-purple/10 rounded-2xl p-8 border border-white/5">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Exclusive Member Benefits
              </h3>
              <p className="text-gray-300 mb-6">
                Access to premium resources and exclusive opportunities available only to registered Hoopr platform users.
              </p>
              <ul className="space-y-3">
                {['Priority access to emerging talent', 'Real-time market analysis', 'Dedicated 24/7 support', 'Exclusive events and webinars'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-hoopr-blue-light mr-2" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-hoopr flex items-center justify-center shadow-xl shadow-hoopr-blue/20">
                <img src="/hoopr-logo-icon.png" alt="Hoopr Benefits" className="w-16 h-16 md:w-24 md:h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
