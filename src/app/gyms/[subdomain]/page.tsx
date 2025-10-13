import { notFound } from 'next/navigation';
import { getGymBySubdomain } from '@/config/gyms';
import Script from 'next/script';
import GymLandingPageClient from './GymLandingPageClient';
import './gym-landing-global.css';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export default async function GymLandingPage({ params }: PageProps) {
  const { subdomain } = await params;
  const gym = getGymBySubdomain(subdomain);

  if (!gym) {
    notFound();
  }

  // Meta Pixel IDs per gym
  const metaPixels: Record<string, string> = {
    aimeesplace: '754227894282620',
    randbfitness: '1401740624305789',
    'randbfitness50': '1401740624305789',
    'randbfitness-men': '1401740624305789',
  };

  const pixelId = metaPixels[subdomain];

  return (
    <>
      {pixelId && (
        <>
          {/* Meta Pixel Code */}
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
              fbq('init', '${pixelId}');
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
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
      <GymLandingPageClient gym={gym} />
    </>
  );
}
