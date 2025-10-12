import { gyms } from '@/config/gyms';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import MenLPClient from './MenLPClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return Object.keys(gyms).map((subdomain) => ({
    subdomain,
  }));
}

export default async function MenLPPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const gym = gyms[subdomain];

  if (!gym) {
    notFound();
  }

  return (
    <>
      {/* Meta Pixel Script */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1401740624305789');
          fbq('track', 'PageView');

          // Track Lead event when LeadDec form is submitted
          window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'leaddec_form_submit') {
              fbq('track', 'Lead');
            }
          });

          // Fallback: Listen for form submissions in iframes
          setInterval(function() {
            var iframes = document.querySelectorAll('iframe[src*="leaddec"]');
            iframes.forEach(function(iframe) {
              try {
                var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                var forms = iframeDoc.querySelectorAll('form');
                forms.forEach(function(form) {
                  if (!form.dataset.fbqListenerAdded) {
                    form.addEventListener('submit', function() {
                      fbq('track', 'Lead');
                    });
                    form.dataset.fbqListenerAdded = 'true';
                  }
                });
              } catch(e) {
                // Cross-origin iframe, can't access
              }
            });
          }, 2000);
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1401740624305789&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <MenLPClient gym={gym} />
    </>
  );
}
