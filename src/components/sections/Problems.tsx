'use client';

import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: Users,
      title: "Struggling to Fill Classes",
      description: "Your studio has capacity for 50+ members per class, but you're averaging 8-12 people. Empty spots mean lost revenue and higher per-member costs."
    },
    {
      icon: DollarSign,
      title: "Inconsistent Monthly Revenue",
      description: "One month you hit £8k, the next drops to £4k. Without predictable income, it's impossible to plan for growth, hire staff, or invest in equipment."
    },
    {
      icon: TrendingDown,
      title: "High Member Churn Rate",
      description: "New members join with enthusiasm but cancel within 3 months. You're constantly replacing members instead of growing your base."
    },
    {
      icon: AlertTriangle,
      title: "Competing on Price Alone",
      description: "Big box gyms and discount chains are forcing you to cut prices. You're stuck in a race to the bottom that's killing your profit margins."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Are These Challenges Holding Your Gym Back?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most boutique gym owners face the same roadblocks. The good news? These aren't permanent problems - they're growth opportunities waiting to be unlocked.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-bold mb-6">
            🎯 100 FREE Leads Guarantee
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            We'll Solve These Problems With 100 FREE Leads
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We've helped 500+ boutique gym owners transform these exact challenges into sustainable growth and 6-figure revenues. We're so confident, we'll generate your first 100 leads completely FREE.
          </p>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-6 max-w-lg mx-auto">
            <p className="text-white font-semibold">
              ✅ 100 Qualified Leads FREE<br/>
              ✅ No Upfront Payment<br/>
              ✅ You Only Pay After Results
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Claim Your 100 FREE Leads Now
          </button>
        </div>
      </div>
    </section>
  );
}