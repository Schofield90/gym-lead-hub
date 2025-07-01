'use client';

import { Clock, Heart, Zap, AlertTriangle } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: Clock,
      title: "Working 70+ Hours But Still Can&apos;t Pay Yourself",
      description: "You&apos;re first in, last out every single day. You&apos;re exhausted, your family barely sees you, but at the end of the month you&apos;re still wondering if you can make rent. The gym that was supposed to give you freedom has become your prison."
    },
    {
      icon: Heart,
      title: "You Got Into This to Train - Not Do Admin",
      description: "You became a trainer because you love transforming lives. But now you spend more time on spreadsheets, social media, and chasing payments than actually training. You feel like you&apos;ve lost touch with your passion - the thing that made you start this business."
    },
    {
      icon: Zap,
      title: "Your Gym Stops When You&apos;re Not There",
      description: "You can&apos;t take a holiday, you can&apos;t get sick, you can&apos;t even switch off for a weekend. If you&apos;re not there, nothing happens. You&apos;re not a business owner - you&apos;ve created a job that owns you completely."
    },
    {
      icon: AlertTriangle,
      title: "Amazing Results, Empty Classes",
      description: "Your members get incredible transformations. Your facilities are spot-on. Your knowledge is world-class. But your classes are half empty and you&apos;re constantly stressed about where the next member is coming from. You know you should be busier - but you don&apos;t know how."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I Know Exactly How You&apos;re Feeling Right Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The sleepless nights. The constant worry. The feeling that you&apos;re failing despite working harder than anyone you know. I&apos;ve been there too - 3 times. These aren&apos;t just business problems, they&apos;re emotional battles that eat away at you every single day.
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
            🎯 Let Me Prove It Works First
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            You Shouldn&apos;t Have to Figure This Out Alone
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I&apos;ve been where you are. The stress, the overwhelm, the feeling like you&apos;re drowning. That&apos;s why I don&apos;t ask you to trust me with money upfront. Let me prove this works by delivering 100 qualified leads to you completely FREE. Then we&apos;ll build your complete business transformation together.
          </p>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-6 max-w-lg mx-auto">
            <p className="text-white font-semibold">
              ✅ 100 Qualified Leads Delivered FREE<br/>
              ✅ We Work For Free Until We Prove Results<br/>
              ✅ Complete Business Transformation Programme
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Let Me Prove It Works - Start With 100 Leads
          </button>
        </div>
      </div>
    </section>
  );
}