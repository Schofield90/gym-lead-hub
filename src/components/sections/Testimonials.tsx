'use client';

import Image from 'next/image';

export default function Testimonials() {
  const stats = [
    { number: "500+", label: "Gyms Transformed" },
    { number: "£2.5M+", label: "Additional Revenue Generated" },
    { number: "89%", label: "Client Success Rate" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Gym Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the proven results we deliver for boutique gym owners across the UK.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Results Image */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl">
            <Image
              src="/social-proof-1.png"
              alt="Client results and testimonials"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Hundreds of Successful Gym Owners
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the same proven strategies that have generated over £2.5M in additional revenue for our clients.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Growth Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}