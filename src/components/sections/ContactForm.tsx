'use client';

import { useEffect } from 'react';

export default function ContactForm() {
  useEffect(() => {
    // Load the GoHighLevel form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-600/20 border border-green-500/30 rounded-full text-green-200 text-sm font-bold mb-6">
            🎯 100 Qualified Leads FREE - No Payment Until Delivered
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Claim Your 100 FREE Leads
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            We'll generate 100 qualified leads for your gym completely FREE. You only pay after we deliver your first 100 leads - no upfront costs, no risk.
          </p>
          <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-green-200">
              ✅ 100 Leads Guaranteed<br/>
              ✅ No Upfront Payment<br/>
              ✅ You Only Pay After Results
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/On765kpbQtjJWQ9kdmwd"
            style={{
              width: '100%',
              height: '695px',
              border: 'none',
              borderRadius: '3px'
            }}
            id="inline-On765kpbQtjJWQ9kdmwd"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Gym Lead Hub"
            data-height="695"
            data-layout-iframe-id="inline-On765kpbQtjJWQ9kdmwd"
            data-form-id="On765kpbQtjJWQ9kdmwd"
            title="Gym Lead Hub"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-blue-100">
            🔒 Your information is secure and will never be shared. 
            We typically respond within 2 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  );
}