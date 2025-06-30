'use client';

import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: Users,
      title: "No Consistent Lead Generation",
      description: "You're relying on word-of-mouth and hoping people find you. You need a steady stream of qualified prospects but don't know how to consistently generate leads online."
    },
    {
      icon: TrendingDown,
      title: "Enquiries Don't Convert to Sales",
      description: "When people do enquire, most don't sign up. You're great at training but don't have a proven sales system to convert interested prospects into paying members."
    },
    {
      icon: AlertTriangle,
      title: "Don't Know What to Say on Sales Calls",
      description: "You feel uncomfortable 'selling' and don't have scripts or systems. You know your service is amazing but struggle to communicate the value effectively."
    },
    {
      icon: DollarSign,
      title: "Marketing Feels Like a Mystery",
      description: "Facebook ads, funnels, follow-up sequences - it all feels overwhelming. You're an expert trainer, not a marketer, but you need both skills to succeed."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You&apos;re Great at Transforming Bodies... But Struggle Getting Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You can deliver incredible results for your members. You have amazing facilities, expert knowledge, and genuine passion. But you&apos;re struggling with the one thing that&apos;s not your expertise: getting consistent leads and converting them into sales.
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
            You Focus on Training - We&apos;ll Handle the Marketing & Sales
          </h3>
          <p className="text-lg mb-6 opacity-90">
            You shouldn&apos;t have to become a marketing expert to succeed. I&apos;ll give you the complete done-for-you system: 100+ Facebook leads delivered, 3-text follow-up sequence (30-50% book calls), phone sales scripts (50-70% close), plus full support. You focus on what you do best - transforming lives.
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