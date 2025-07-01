'use client';

import { Calculator, TrendingUp, Users, Target, Phone, CreditCard } from 'lucide-react';

export default function ROI() {
  return (
    <section id="roi" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Expected Return on Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on our proven conversion rates and industry averages, here&apos;s what you can expect from 100 FREE leads
          </p>
        </div>

        {/* ROI Calculation */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100 Leads to Prove It</h3>
              <p className="text-lg text-gray-600 mb-2">We work for free first</p>
              <p className="text-sm text-gray-500">+ £1,000 ad spend (your cost)</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20 New Members</h3>
              <p className="text-lg text-gray-600 mb-2">20% Conversion Rate</p>
              <p className="text-sm text-gray-500">Industry-leading performance</p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">£4,980 Revenue</h3>
              <p className="text-lg text-gray-600 mb-2">£249 average sale</p>
              <p className="text-sm text-gray-500">398% ROI in month 1</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-green-800 mb-2">
                Net Profit: £3,980 in Month 1
              </h4>
              <p className="text-green-700">
                That&apos;s nearly £4,000 profit from your £1,000 investment - and this is just the beginning. Each member typically stays 12+ months, creating recurring revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Process Breakdown */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Support You Through Each Stage
            </h3>
            <p className="text-xl text-gray-600">
              Our proven system guides prospects from lead to paying member with full support at every step
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stage 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Lead Generation</h4>
                  <p className="text-gray-600 mb-4">We create and manage high-converting Meta ad campaigns to generate 100+ qualified leads</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Our Support:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Campaign creation & optimization</li>
                      <li>• Ad creative development</li>
                      <li>• Landing page setup</li>
                      <li>• Lead capture system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Follow-Up System</h4>
                  <p className="text-gray-600 mb-4">Our 3-text sequence gets 30-50% of leads to book a sales call</p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-2">Our Support:</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Proven text templates</li>
                      <li>• Automated scheduling system</li>
                      <li>• Email nurture sequences</li>
                      <li>• Follow-up timing optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sales Calls</h4>
                  <p className="text-gray-600 mb-4">Convert 50-70% of calls into paying members with our proven sales system</p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Our Support:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Complete sales scripts</li>
                      <li>• Objection handling frameworks</li>
                      <li>• Call structure training</li>
                      <li>• 121 sales coaching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Payment & Onboarding</h4>
                  <p className="text-gray-600 mb-4">Secure payment processing and seamless member onboarding</p>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h5 className="font-semibold text-emerald-800 mb-2">Our Support:</h5>
                    <ul className="text-emerald-700 text-sm space-y-1">
                      <li>• Payment processing setup</li>
                      <li>• Member onboarding templates</li>
                      <li>• Retention strategies</li>
                      <li>• Ongoing implementation support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-700 text-sm font-bold mb-6">
              🎯 We Prove Ourselves First
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let Us Prove This System Works for You
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We know you've been burned before. That's why we prove our system works first. See nearly £4,000 profit from your first 100 leads - we work for free until we deliver results. You only cover your £1,000 ad spend.
            </p>
            <div className="bg-white border border-green-200 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 398% ROI in Month 1 Guaranteed<br/>
                ✅ We Work For Free Until We Prove Results<br/>
                ✅ Full System + Implementation Support
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Let Us Prove It Works - Start Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}