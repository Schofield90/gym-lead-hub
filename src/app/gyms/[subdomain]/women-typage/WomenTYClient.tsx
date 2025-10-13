'use client';

import { useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './women-ty.module.css';

export default function WomenTYClient({ gym }: { gym: GymConfig }) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Load LeadConnector booking script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.thankYouPage}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.checkmark}>✓</div>
            <h1 className={styles.mainHeading}>
              Thank You For Registering!
            </h1>
            <p className={styles.subheading}>
              You&apos;re one step closer to transforming your body and feeling amazing this November
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <div className={styles.bookingContent}>
            <h2 className={styles.bookingHeading}>
              Next Step: Book Your Free Consultation Call
            </h2>
            <p className={styles.bookingText}>
              Choose a time that works best for you to chat with our team. We&apos;ll discuss your goals, answer any questions, and make sure the 28 Day Challenge is perfect for you.
            </p>

            <div className={styles.calendarWrapper}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/INV5khuOCZFWKMok132c"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="SPGm9w55Hnj1RDgG0Qss_1760362923008"
                title="Book Your Call"
              />
            </div>

            <div className={styles.whatToExpect}>
              <h3>What to Expect on Your Call:</h3>
              <ul>
                <li>🎯 We&apos;ll discuss your fitness goals and challenges</li>
                <li>💬 Answer any questions about the 28 Day Challenge</li>
                <li>📋 Explain how the program works and what&apos;s included</li>
                <li>🗓️ Confirm your spot for the November intake</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {currentYear} {gym.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
