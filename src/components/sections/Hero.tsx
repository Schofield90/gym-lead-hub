'use client';

import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {  
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Gym Growth Consultancy Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto"
            />
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-200 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              🎯 We Prove Ourselves First - 100 Leads Before You Pay
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Scale Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Boutique Gym
            </span>{' '}
            to 6-Figures
          </h1>
          
          <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-green-300 mb-4">
              🚀 We&apos;ll Prove It Works - Complete Business Transformation Starts With 100 Leads
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-green-200">
              <div>
                ✅ 100+ Meta Leads Delivered (This Is Just The Beginning)<br/>
                ✅ 3-Text Follow-Up (30-50% Book Calls)
              </div>
              <div>
                ✅ Complete Sales System + Ongoing Coaching (50-70% Close)<br/>
                ✅ Ongoing Support to Systematize Your Entire Operation
              </div>
            </div>
            <p className="text-lg text-green-200 mt-4">
              We know you&apos;ve been burnt before. That&apos;s why we prove ourselves first with 100 leads, then help you build a complete business transformation. You only cover ad spend - we don&apos;t get paid until you see results.
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Hi, I&apos;m Sam. I&apos;ve scaled 3 boutique gyms to 6-figures each - they&apos;re now fully staffed and run themselves. 
            Now I help other gym owners achieve the same freedom and success.
          </p>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-blue-200">
              🏆 <strong>Proven Track Record:</strong> I&apos;ve built the exact systems I&apos;m sharing with you. My gyms went from struggle to 6-figures, giving me the time freedom to help others do the same.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let Us Prove It Works - Get 100 Leads First
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-green-300 text-sm mt-2 font-medium">
                🤝 We work for free until we prove results
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}