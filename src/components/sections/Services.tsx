'use client';

import { Target, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Facebook Lead Generation",
      description: "We generate 100+ qualified leads for your gym through high-converting Facebook ad campaigns, delivering them directly to you with zero upfront cost.",
      features: [
        "High-converting Facebook & Instagram ad campaigns",
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
      title: "Phone Sales System + Support",
      description: "Close 50-70% of calls into sales with our proven phone sales system. Includes scripts, training, and 121 implementation support to guarantee results.",
      features: [
        "Phone sales scripts (50-70% close rate)",
        "Payment processing over the phone",
        "Full 121 implementation support",
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
            🎯 100 FREE Leads - No Payment Until Delivered
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the exact systems I used to scale my own 3 gyms to 6-figures each. My comprehensive approach addresses every aspect of your gym&apos;s growth, from attracting new members to scaling operations. I&apos;m so confident in these proven methods, I&apos;ll generate your first 100 leads completely FREE.
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
              Get 100 FREE Leads + The Complete System
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We don&apos;t just give you leads - we give you the complete system: Facebook ads, 3-text follow-up (30-50% book calls), phone sales scripts (50-70% close rate), and full 121 support.
            </p>
            <div className="bg-white border border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 100+ Facebook Leads Delivered<br/>
                ✅ 3-Text System (30-50% Book Calls)<br/>
                ✅ Phone Sales Scripts (50-70% Close)<br/>
                ✅ Full 121 Implementation Support
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get My Complete System + 100 FREE Leads
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}