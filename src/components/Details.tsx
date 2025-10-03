import { Calendar, TrendingUp, Code, Brain } from 'lucide-react';

export function Details() {
  const details = [
    {
      icon: Calendar,
      title: 'Event',
      value: '2025 NASA Space Apps Challenge',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Difficulty',
      value: 'Advanced',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Code,
      title: 'Skills',
      value: 'Coding & Development',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Brain,
      title: 'Focus',
      value: 'AI & Machine Learning',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="details" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Challenge Details
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            An advanced challenge combining artificial intelligence, machine learning, and astronomical data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className={`${detail.bgColor} ${detail.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  {detail.title}
                </h3>
                <p className="text-lg font-bold text-slate-900">{detail.value}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Challenge</h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The search for exoplanets has revolutionized our understanding of the universe. With thousands of confirmed planets orbiting distant stars, the next frontier is using artificial intelligence to analyze vast datasets and identify potential worlds beyond our solar system.
            </p>
            <p>
              In this challenge, you'll work with real astronomical data from NASA missions such as Kepler and TESS. Your mission is to develop AI models that can detect the subtle signals of exoplanets transiting across their host stars, filtering out noise and false positives to reveal new worlds.
            </p>
            <p>
              This is an advanced-level challenge requiring knowledge of machine learning algorithms, data preprocessing, and astronomical concepts. Teams will compete to build the most accurate and efficient exoplanet detection system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
