'use client';

import { Target, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Meta (Facebook & Instagram) Lead Generation",
      description: "We start by generating 100+ qualified leads for your gym through high-converting Meta ad campaigns, then help you systematize everything that comes next. You only cover your ad spend - our programme is completely FREE until we deliver results.",
      features: [
        "High-converting Meta (Facebook & Instagram) campaigns",
        "100+ qualified leads delivered to you",
        "Proven landing pages & ad creatives",
        "Complete lead capture system setup"
      ]
    },
    {
      icon: TrendingUp,
      title: "3-Text Follow-Up System",
      description: "Our proven 3-text follow-up sequence gets 30-50% of your leads to book a sales call. We provide you with the exact texts and timing that work.",
      features: [
        "3 simple texts that get 30-50% to book calls",
        "Automated follow-up templates",
        "Optimal timing and scheduling system",
        "Lead nurturing email sequences"
      ]
    },
    {
      icon: Zap,
      title: "Complete Sales System + Ongoing Coaching",
      description: "Close 50-70% of calls into sales with our complete sales system and ongoing coaching. This is where the real business transformation begins - we help you systematize your entire operation.",
      features: [
        "Complete sales system + ongoing coaching (50-70% close rate)",
        "Payment processing over the phone",
        "Ongoing coaching to systematize your operation",
        "Objection handling frameworks"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Our Proven System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Transform Your Gym Business
          </h2>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-800 text-sm font-bold mb-6">
            🎯 We Prove Ourselves First - 100 Leads Before Payment
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the exact systems I used to scale my own 3 gyms to 6-figures each. I know gym owners have been burned by promises before. That&apos;s why we work differently - we prove our system works by delivering 100 leads first, then you decide if you want to continue.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">What You Get:</h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-700 text-sm font-bold mb-6">
              🎯 Complete Done-For-You System
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let Us Prove Our Programme Works First
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We know you&apos;ve heard promises before. That&apos;s why we prove ourselves first with 100 leads, then help you build a complete business transformation. We give you everything: Meta ads, 3-text follow-up (30-50% book calls), complete sales system + ongoing coaching (50-70% close rate), and systematization support. You only pay ad spend - we work for free until we deliver results.
            </p>
            <div className="bg-white border border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 100+ Meta Leads Delivered First (This Is Just The Beginning)<br/>
                ✅ 3-Text System (30-50% Book Calls)<br/>
                ✅ Complete Sales System + Ongoing Coaching (50-70% Close)<br/>
                ✅ Ongoing Support to Systematize Your Entire Operation
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Let Us Prove It Works - Start With 100 Leads
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}