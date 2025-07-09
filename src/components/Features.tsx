import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Live Market Insights',
      description: 'Stay updated with real-time data on player availability, team needs, and market movement — all in one place.',
      icon: '🌎',
    },
    {
      title: 'Instant Deal Tools',
      description: 'Take action quickly with features designed to shortlist, recommend, and communicate — no delays, no missed opportunities.',
      icon: '📊',
    },
    {
      title: 'Trusted Global Network',
      description: 'Connect directly with verified teams, agents, and professionals across the world — no guesswork, no gatekeepers.',
      icon: '🔒',
    },
    {
      title: 'Protect Your Representation',
      description: 'Claim, manage, and monitor your clients securely — ensuring transparency, accuracy, and control over your player relationships.',
      icon: '📝',
    },
    {
      title: 'Streamlined Recruitment Workflow',
      description: 'Centralize your scouting, communication, and decision-making — no more juggling emails, spreadsheets, and social media.',
      icon: '🔍',
    },
    {
      title: 'Smarter Player Discovery',
      description: 'Filter by position, nationality, salary expectation, and more — so you find the right talent, faster.',
      icon: '🎥',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-hoopr-dark py-16 md:py-24" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="container mx-auto px-6" >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why choose <span className="gradient-text">HOOPR</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            HOOPR is changing the game. We’re bringing clarity, speed, and structure to the chaotic world of basketball signings and recruitment
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
                Exclusive Member Benefits for Teams
              </h3>
              <p className="text-gray-300 mb-6">
                Unlock access to premium recruitment tools, verified agent contacts, and real-time player availability — available only to registered HOOPR teams.
              </p>
              <ul className="space-y-3">
                {['Discover available players from all over the world in real time','Filter by position, nationality, experience, salary expectation, and more','Post job openings and attract relevant, verified agents','Shortlist and compare players side-by-side to streamline decision-making','Track interest, conversations, and signings in one organized dashboard','Eliminate time wasted chasing outdated contacts or inactive agents'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-hoopr-blue-light mr-2" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-2/3 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Exclusive Member Benefits for Agents
              </h3>
              <p className="text-gray-300 mb-6">
                Gain direct access to team openings, showcase your players to decision-makers, and manage your client roster — all within HOOPR’s verified network.
              </p>
              <ul className="space-y-3">
                {['Showcase your players to active teams looking to sign','Update player availability, salary expectations, and video highlights','Claim players and manage your client list in one secure place','Discover real job openings posted directly by verified teams','Connect with team decision-makers instantly — no middlemen','Track team interest, manage outreach, and close deals faster'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-hoopr-blue-light mr-2" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
      
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
