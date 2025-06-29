'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      gymName: "FitCore Studio",
      location: "Manchester",
      image: "/social proof 1.png", // Real testimonial image
      revenue: "£3k → £18k/month",
      timeframe: "6 months",
      quote: "I was struggling to keep my classes full and barely breaking even. The lead generation system they built brought in 150+ qualified leads in the first month. Now I&apos;m consistently hitting £18k monthly revenue and have a waiting list for most classes."
    },
    {
      name: "James Thompson",
      gymName: "Strength & Conditioning Co",
      location: "Birmingham",
      image: "/testimonial2.jpg", // Placeholder
      revenue: "£5k → £22k/month",
      timeframe: "4 months",
      quote: "The sales training completely transformed how my team handles prospects. Our conversion rate went from 15% to 45% in just 8 weeks. We've had to hire 3 new trainers to keep up with demand."
    },
    {
      name: "Emma Roberts", 
      gymName: "Peak Performance Gym",
      location: "London",
      image: "/testimonial3.jpg", // Placeholder
      revenue: "£7k → £35k/month",
      timeframe: "8 months",
      quote: "I thought I&apos;d maxed out my local market, but their strategic approach helped me identify and tap into three new customer segments. We&apos;re now looking at opening our second location."
    }
  ];

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
            Don&apos;t just take our word for it. See how we&apos;ve helped boutique gym owners across the UK scale their businesses.
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  {testimonial.image === "/social proof 1.png" ? (
                    <Image
                      src="/social proof 1.png"
                      alt={`${testimonial.name} testimonial`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.gymName}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-green-600">{testimonial.revenue}</span> in {testimonial.timeframe}
                </div>
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
          ))}
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