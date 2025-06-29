import { Target, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Lead Generation Systems",
      description: "We build automated lead generation funnels that attract your ideal members 24/7. From Facebook ads to Google campaigns, we create a steady stream of qualified prospects.",
      features: [
        "High-converting Facebook & Instagram ad campaigns",
        "Local SEO optimization for Google searches",
        "Automated email nurture sequences",
        "Landing pages that convert at 25%+"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales Growth Optimization",
      description: "Transform your sales process from random to systematic. We implement proven scripts, objection handlers, and closing techniques that convert leads into paying members.",
      features: [
        "Sales scripts that close 40%+ of prospects",
        "Objection handling frameworks",
        "Follow-up automation systems",
        "Staff training and certification programs"
      ]
    },
    {
      icon: Zap,
      title: "Business Scaling Strategies",
      description: "Move beyond trading time for money. We help you build systems and processes that allow your gym to grow without you being involved in every decision.",
      features: [
        "Operational systems and SOPs",
        "Team training and management",
        "Multiple revenue stream development",
        "Franchise and expansion planning"
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach addresses every aspect of your gym's growth, from attracting new members to scaling operations.
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
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to 3x Your Gym Revenue?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our proven system has helped gym owners increase their monthly revenue from £3k to £15k+ in just 90 days.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}