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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Growth Assessment
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover exactly how to double your gym&apos;s revenue in the next 90 days. 
            Book your free consultation with our gym growth specialists.
          </p>
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