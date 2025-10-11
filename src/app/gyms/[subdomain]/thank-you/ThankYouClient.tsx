'use client';

import { useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from '../gym-landing.module.css';

export default function ThankYouClient({ gym }: { gym: GymConfig }) {
  const currentYear = new Date().getFullYear();

  // Load LeadDec booking script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.leaddec.com/js/form_embed.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Load Meta Pixel
  useEffect(() => {
    const w = window as typeof window & { fbq?: (...args: unknown[]) => void; _fbq?: unknown };

    if (!w.fbq) {
      const fbq = function(...args: unknown[]) {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [] as unknown[][];
      fbq.callMethod = null as unknown as (...args: unknown[]) => void;

      w.fbq = fbq;
      w._fbq = fbq;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }

    if (w.fbq) {
      w.fbq('init', '1401740624305789');
      w.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className={styles.gymLanding}>
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1401740624305789&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* HEADER */}
      <header className={styles.header}>
        <img src="/r-and-b-logo.png" alt={gym.name} className={styles.headerLogo} />
      </header>

      {/* THANK YOU HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.thankYouHeadline}>
            Thank you for registering your interest in the {gym.programDuration} Challenge at {gym.name}!
          </h1>

          <p className={styles.thankYouSubheadline}>
            We are receiving about 6-9 applications per day, skip the queue and book a quick call.
          </p>

          {/* Two Column Layout */}
          <div className={styles.thankYouGrid}>
            {/* Left Column - Purple Message Box */}
            <div className={styles.thankYouMessage}>
              <h2>What Happens Next?</h2>
              <p>
                <strong>Book your FREE consultation call</strong> to discuss your goals and see if the {gym.programDuration} Challenge is right for you.
              </p>
              <p>
                One of our experienced coaches will:
              </p>
              <ul>
                <li>✅ Understand your current situation and goals</li>
                <li>✅ Show you exactly how our program works</li>
                <li>✅ Answer any questions you have</li>
                <li>✅ Help you decide if this is the right fit for you</li>
              </ul>
            </div>

            {/* Right Column - Booking Calendar */}
            <div className={styles.bookingWrapper}>
              <iframe
                src="https://link.leaddec.com/widget/booking/fOIQTKzKtvlsSROzRWQM"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="fOIQTKzKtvlsSROzRWQM_1760194907504"
                title="Book Your Call"
              />
            </div>
          </div>

          <div className={styles.thankYouFooter}>
            <p>
              <strong>Can&apos;t find a suitable time?</strong>
            </p>
            <p>
              No problem! One of our team will be in touch with you shortly via email or phone to arrange a convenient time to chat.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            © {currentYear} {gym.name}. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Results may vary. Individual results will depend on personal commitment and effort.
          </p>
        </div>
      </footer>
    </div>
  );
}
