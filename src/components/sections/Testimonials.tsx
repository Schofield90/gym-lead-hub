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
            {/* Result 1 - Meta Campaign */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  138 Leads + 36K Reach in 30 Days
                </h4>
                <p className="text-blue-600 font-semibold">Meta Ads Dashboard Results</p>
              </div>
              <Image
                src="/social-proof-1.png"
                alt="138 leads and 36,930 reach from Meta ads campaign"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 2 - Campaign Performance */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  140 Leads + 20K Reach in 30 Days
                </h4>
                <p className="text-green-600 font-semibold">Meta Performance Data</p>
              </div>
              <Image
                src="/social-proof-2.png"
                alt="140 leads and 20,324 reach from Meta ads campaign"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 3 - Sales Calls */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  22 Sales Calls in 1 Day
                </h4>
                <p className="text-purple-600 font-semibold">Appointment Setting Success</p>
              </div>
              <Image
                src="/social-proof-3.png"
                alt="22 sales calls scheduled in one day"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg border border-gray-200 max-h-96 object-contain"
              />
            </div>

            {/* Result 4 - Premium Sale */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  £700 Couple Sale
                </h4>
                <p className="text-green-600 font-semibold">High-Value Client</p>
              </div>
              <Image
                src="/social-proof-4.png"
                alt="£700 couple membership sale"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 5 - Monthly Target */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  On Track for £10K Month
                </h4>
                <p className="text-blue-600 font-semibold">Monthly Revenue Goal</p>
              </div>
              <Image
                src="/social-proof-5.png"
                alt="On track for £10,000 monthly revenue"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 6 - Daily Sales Success */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  £549 Sales in 1 Hour
                </h4>
                <p className="text-green-600 font-semibold">Daily Performance</p>
              </div>
              <Image
                src="/social-proof-6.png"
                alt="£549 in sales within 1 hour of work"
                width={600}
                height={300}
                className="w-full h-auto rounded-lg border border-gray-200 max-h-80 object-contain"
              />
            </div>

            {/* Result 7 - Weekly Performance */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Smashing Weekly Targets
                </h4>
                <p className="text-purple-600 font-semibold">Consistent Performance</p>
              </div>
              <Image
                src="/social-proof-7.png"
                alt="Exceeding weekly sales targets"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 8 - Quick Sale */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Another Quick Sale
                </h4>
                <p className="text-green-600 font-semibold">Rapid Conversion</p>
              </div>
              <Image
                src="/social-proof-8.png"
                alt="Quick sale conversion"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 9 - Multiple Sales */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Multiple Sales & Confirmations
                </h4>
                <p className="text-blue-600 font-semibold">Consistent Results</p>
              </div>
              <Image
                src="/social-proof-9.png"
                alt="Multiple sales and confirmations"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 10 - Lead Generation */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  New Leads Converting Fast
                </h4>
                <p className="text-green-600 font-semibold">Lead Quality Success</p>
              </div>
              <Image
                src="/social-proof-10.png"
                alt="New leads converting quickly"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 11 - Fresh Leads */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Fresh Leads = Instant Sales
                </h4>
                <p className="text-purple-600 font-semibold">New Lead Success</p>
              </div>
              <Image
                src="/social-proof-11.png"
                alt="Fresh leads converting to sales"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 12 - Monthly Growth */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  9 Sales This Month & Growing
                </h4>
                <p className="text-green-600 font-semibold">Monthly Progress</p>
              </div>
              <Image
                src="/social-proof-12.png"
                alt="9 sales this month and growing"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            {/* Result 13 - Campaign Overview */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 md:col-span-2 lg:col-span-3">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Last 5 Campaigns: 758 Leads at £5.19 Average Cost
                </h4>
                <p className="text-emerald-600 font-semibold">Consistent High-Performance Results</p>
              </div>
              <Image
                src="/social-proof-13.png"
                alt="758 total leads over 3 years with £5.19 average cost per lead"
                width={1000}
                height={500}
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 italic">
              All results shown are real Meta Ads Manager data and client conversations
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
              We&apos;ll generate your first 100 qualified leads completely FREE. Our service costs nothing until we deliver - you only cover your ad spend.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 max-w-xl mx-auto">
              <p className="text-green-800 font-semibold">
                ✅ 100 Qualified Leads Guaranteed<br/>
                ✅ Our Service FREE Until Delivered<br/>
                ✅ You Only Cover Your Ad Spend
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