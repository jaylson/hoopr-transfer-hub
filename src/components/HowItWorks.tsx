
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Set up your team, organization or player profile with all the relevant details for the market.',
      image: 'step-profile.png',
    },
    {
      number: '02',
      title: 'Explore Opportunities',
      description: 'Browse through our extensive network of teams, players and agents to find the best opportunities.',
      image: 'step-explore.png',
    },
    {
      number: '03',
      title: 'Connect Directly',
      description: 'Get in direct contact with decision-makers without unnecessary intermediaries.',
      image: 'step-connect.png',
    },
    {
      number: '04',
      title: 'Close Deals',
      description: 'Use our negotiation and contract tools to efficiently finalize transfers.',
      image: 'step-deal.png',
    },
  ];

  return (
    <section className="bg-hoopr-dark py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How <span className="gradient-text">Hoopr.app</span> works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A simple and efficient process to revolutionize how player transfers are conducted.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-hoopr-blue via-hoopr-purple to-hoopr-blue-light transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 relative">
                    <span className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-hoopr flex items-center justify-center text-white font-bold">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-hoopr z-10"></div>
                <div className="md:w-1/2 md:px-8">
                  <div className="h-48 md:h-64 rounded-lg bg-gradient-to-r from-hoopr-blue/10 to-hoopr-purple/10 flex items-center justify-center border border-white/5">
                    <div className="w-16 h-16 rounded-full bg-gradient-hoopr flex items-center justify-center">
                      <span className="text-2xl">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
