'use client';

import Image from 'next/image';
import { CheckCircle, Target, TrendingUp } from 'lucide-react';

export default function Founder() {
  const achievements = [
    { 
      icon: Target,
      title: "4 Gyms Scaled to 6-Figures",
      description: "Built each from struggling startup to profitable, systemised business"
    },
    {
      icon: TrendingUp, 
      title: "Fully Automated Operations",
      description: "Created systems so robust that all 4 gyms now run themselves"
    },
    {
      icon: CheckCircle,
      title: "Time Freedom Achieved", 
      description: "Stepped back from day-to-day operations to help other gym owners"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-800 text-sm font-bold mb-6">
              🎯 From Gym Owner to Gym Growth Expert
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m Sam - I&apos;ve Been Exactly Where You Are
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I know the sleepless nights worrying about cash flow. The frustration of empty classes despite having amazing facilities. 
              The feeling of being trapped in your own business instead of owning it.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              That&apos;s why I&apos;m so passionate about what I do now. I&apos;ve scaled 4 boutique gyms from struggling startups to profitable, 
              6-figure businesses that run themselves. Each one now operates with full teams, predictable revenue, and systems so solid 
              I can focus on helping other gym owners achieve the same freedom.
            </p>

            {/* Gym Showcase Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Here Are The 4 Gyms I Built From Scratch
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <Image
                    src="/gym1.jpg"
                    alt="Sam's first gym facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm font-medium text-gray-700 mt-2">Gym #1 - 0 to 200+ members</p>
                </div>
                
                <div className="text-center">
                  <Image
                    src="/gym2.jpg"
                    alt="Sam's second gym facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm font-medium text-gray-700 mt-2">Gym #2 - Now fully automated</p>
                </div>
                
                <div className="text-center">
                  <Image
                    src="/gym3.jpg"
                    alt="Sam's third gym facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm font-medium text-gray-700 mt-2">Gym #3 - 6-figure revenue</p>
                </div>
                
                <div className="text-center">
                  <Image
                    src="/gym4.jpg"
                    alt="Sam's fourth gym facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm font-medium text-gray-700 mt-2">Gym #4 - Runs without me</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 text-center font-medium">
                  These aren&apos;t stock photos or client gyms - these are MY facilities that I built using the exact systems I&apos;m sharing with you. 
                  Each one went from struggling startup to profitable, systematized business.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-semibold text-lg">
                &quot;I&apos;m not just teaching theory - I&apos;m sharing the exact systems that transformed my own 4 gyms. 
                That&apos;s why we prove ourselves first with 100 leads before you pay anything.&quot;
              </p>
              <p className="text-green-700 mt-2">- Sam, Founder</p>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Scale Your Gym?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get the exact same systems that built my 4 successful gyms. We&apos;ll prove ourselves first with 100 leads before you pay anything.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Let Us Prove It Works - Get 100 Leads First
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}