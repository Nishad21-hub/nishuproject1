import { Shield, Sparkles, Headphones, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Advanced driver assistance systems and cutting-edge safety technology to protect what matters most.',
    },
    {
      icon: Sparkles,
      title: 'Innovative Design',
      description: 'Award-winning aesthetics that turn heads. Form and function in perfect harmony.',
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: '24/7 concierge service and lifetime maintenance support for peace of mind.',
    },
    {
      icon: Award,
      title: 'Excellence Guaranteed',
      description: 'Each vehicle undergoes rigorous testing to meet our uncompromising standards.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-red-600">VelocityX</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            More than machines. We craft experiences that inspire and empower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <feature.icon size={32} className="text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
