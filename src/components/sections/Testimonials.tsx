'use client';

import Image from 'next/image';

export default function Testimonials() {
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

        {/* Client Results Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results That Speak for Themselves
            </h3>
            <p className="text-xl text-gray-600">
              See the actual data and conversations from our successful campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Result 1 - Original Facebook Ads */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  131 Qualified Leads in Just 29 Days
                </h4>
                <p className="text-blue-600 font-semibold">Facebook Ads Manager Results</p>
              </div>
              <Image
                src="/social-proof-1.png"
                alt="131 leads from Facebook ads campaign"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 2 - Improved Results */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  140 Leads + 20K Reach
                </h4>
                <p className="text-green-600 font-semibold">Optimized Campaign</p>
              </div>
              <Image
                src="/social-proof-2.png"
                alt="140 leads and 20,324 reach from optimized campaign"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 3 - Sales Calls */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  22 Sales Calls in 1 Day
                </h4>
                <p className="text-purple-600 font-semibold">Appointment Setting System</p>
              </div>
              <Image
                src="/social-proof-3.png"
                alt="22 sales calls scheduled in one day"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 4 - Scale Results */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 md:col-span-2">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  744 Total Leads from 28 Ads
                </h4>
                <p className="text-blue-600 font-semibold">316,897 Total Reach - Scaled Campaign Results</p>
              </div>
              <Image
                src="/social-proof-4.png"
                alt="744 leads from 28 ads with 316,897 total reach"
                width={600}
                height={350}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 5 - ROI Success */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  £611 Spent → £10K Profit
                </h4>
                <p className="text-green-600 font-semibold">1,640% ROI in 6 Weeks</p>
              </div>
              <Image
                src="/social-proof-5.png"
                alt="£611 ad spend generated £10k profit with 123 leads and 60-80 sales"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 italic">
              All results shown are real Facebook Ads Manager data and client conversations
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-800 text-sm font-bold mb-6">
              🎯 100 FREE Leads Guarantee
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get These Same Results - 100 Leads FREE
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We'll generate your first 100 qualified leads completely FREE. You only pay after we deliver results - just like we did for the gym owners above.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 max-w-xl mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 100 Qualified Leads Guaranteed<br/>
                ✅ No Upfront Payment Required<br/>
                ✅ Pay Only After We Deliver Results
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Claim Your 100 FREE Leads Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}