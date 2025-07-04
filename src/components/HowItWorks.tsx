
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Get Verified',
      description: 'Create your HOOPR account as a verified agent or team staff member. Verification ensures all users are legitimate professionals ready to operate in the marketplace.',
      image: 'step-profile.png',
    },
    {
      number: '02',
      title: 'Set Up Your Profile',
      description: 'Teams post job openings and define roster needs. Agents edit player profiles by updating availability, salary expectations, and highlight videos — and can also claim unlisted players to add to their client list.',
      image: 'step-explore.png',
    },
    {
      number: '03',
      title: 'Explore the Market',
      description: 'Teams browse available players using advanced filters like position, nationality, experience, and salary. Agents explore active team openings to find the right fit for their players.',
      image: 'step-connect.png',
    },
    {
      number: '04',
      title: 'Connect Directly',
      description: 'Message verified agents or team staff instantly — no more searching for contacts or relying on third-party communication.',
      image: 'step-deal.png',
    },
    {
      number: '05',
      title: 'Organize Your Process',
      description: 'Use shortlists to track top players or jobs, tag key conversations, and keep your recruitment process organized in one place.',
      image: 'step-deal.png',
    },
    {
      number: '06',
      title: 'Finalize the Signing',
      description: 'Move faster with clear availability, verified representation, and direct communication — all designed to help you close signings efficiently and professionally.',
      image: 'step-deal.png',
    },
  ];

  return (
    <section className="bg-hoopr-dark py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How <span className="gradient-text">HOOPR.app</span> works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A streamlined platform for basketball teams and agents to connect, recruit, and sign players — efficiently and professionally.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-hoopr-blue via-hoopr-purple to-hoopr-blue-light transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-15">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 relative">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-hoopr z-10"></div>
                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
