'use client';

import { useState, useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './women-lp.module.css';

export default function WomenLPClient({ gym }: { gym: GymConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileSticky, setShowMobileSticky] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';

      // Load form script
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        document.body.removeChild(script);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleOpenModal = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e?.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('inline-hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Mobile sticky CTA detection
  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.getElementById('inline-hero-form');
      if (!formElement) return;

      const rect = formElement.getBoundingClientRect();
      const isFormVisible = rect.top < window.innerHeight && rect.bottom > 0;

      const isMobile = window.innerWidth < 768;
      setShowMobileSticky(isMobile && !isFormVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Fix iframe height on mobile
  useEffect(() => {
    const heroIframeId = 'inline-f6lfpHUJagZlVtctdMit';
    const modalIframeId = 'modal-f6lfpHUJagZlVtctdMit';

    const applyMobileFix = (iframeId: string) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
      if (iframe) {
        iframe.style.setProperty('height', '4700px', 'important');
        iframe.style.setProperty('max-height', '4700px', 'important');
        iframe.style.setProperty('min-height', '4700px', 'important');
        iframe.style.setProperty('margin-top', '-2050px', 'important');
        iframe.setAttribute('data-mobile-fix-applied', 'true');
      }
    };

    const removeMobileFix = (iframeId: string) => {
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
      if (iframe) {
        iframe.style.removeProperty('height');
        iframe.style.removeProperty('max-height');
        iframe.style.removeProperty('min-height');
        iframe.style.removeProperty('margin-top');
        iframe.removeAttribute('data-mobile-fix-applied');
      }
    };

    const applyOrRemoveFix = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        applyMobileFix(heroIframeId);
        applyMobileFix(modalIframeId);
      } else {
        removeMobileFix(heroIframeId);
        removeMobileFix(modalIframeId);
      }
    };

    const intervals: NodeJS.Timeout[] = [];
    for (let i = 0; i < 10; i++) {
      intervals.push(setTimeout(() => {
        applyOrRemoveFix();
      }, i * 500));
    }

    const heroObserver = new MutationObserver(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) applyMobileFix(heroIframeId);
    });

    const modalObserver = new MutationObserver(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) applyMobileFix(modalIframeId);
    });

    const heroIframe = document.getElementById(heroIframeId);
    const modalIframe = document.getElementById(modalIframeId);

    if (heroIframe) {
      heroObserver.observe(heroIframe, { attributes: true, attributeFilter: ['style'] });
    }
    if (modalIframe) {
      modalObserver.observe(modalIframe, { attributes: true, attributeFilter: ['style'] });
    }

    const handleResize = () => {
      applyOrRemoveFix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      intervals.forEach(clearTimeout);
      heroObserver.disconnect();
      modalObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.gymLanding}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroCallout}>
            <h1 className={styles.mainHeadline}>
              York Women Over 30: Transform Your Body in Just 28 Days & Feel Confident This November
              <span className={styles.subheadlineHighlight}>(No Crash Diets or Endless Gym Sessions)</span>
            </h1>
          </div>

          <div className={styles.heroContent}>
            {/* Gym Action Images Grid */}
            <div className={styles.gymActionGrid}>
              <img src="/aimees-mural.jpg" alt="Aimee's Place gym" />
              <img src="/aimees-action-2.jpg" alt="Gym workout 2" />
              <img src="/aimees-action-3.jpg" alt="Gym workout 3" />
              <img src="/aimees-action-1.jpg" alt="Gym workout 4" />
            </div>

            <div className={styles.heroFormContainer} id="inline-hero-form">
              <h3>REGISTER FOR 1 OF {gym.spotsAvailable} SPACES</h3>
              <p className={styles.novemberChallenge}>🍂 NOVEMBER CHALLENGE 🍂</p>
              <div className={styles.iframeWrapper}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/f6lfpHUJagZlVtctdMit"
                  className={styles.heroFormIframe}
                  id="inline-f6lfpHUJagZlVtctdMit"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="28 day transformation nurture"
                  data-height="400"
                  data-layout-iframe-id="inline-f6lfpHUJagZlVtctdMit"
                  data-form-id="f6lfpHUJagZlVtctdMit"
                  title="28 day transformation nurture"
                />
              </div>
              <p className={styles.urgency}>⏰ Challenge Starts First Week of November</p>
            </div>
          </div>

          {/* Hero Bottom Images - 4 Google reviews */}
          <div className={styles.heroBottomImages}>
            <img src="/aimees-hero-2.jpg" alt="Review 1" />
            <img src="/aimees-hero-3.jpg" alt="Review 2" />
            <img src="/aimees-hero-4.jpg" alt="Review 3" />
            <img src="/aimees-hero-5.jpg" alt="Review 4" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>
            The {gym.programDuration} Challenge Is <strong>SPECIFICALLY DESIGNED</strong> For {gym.location} Women {gym.ageRange} Who Want To:
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>👗</div>
              <div className={styles.benefitContent}>
                <h3>Feel Confident in Your Clothes</h3>
                <p>Drop a dress size and feel amazing in your favorite outfits without restrictive dieting</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>💪</div>
              <div className={styles.benefitContent}>
                <h3>Build Strength & Energy</h3>
                <p>Just 3 sessions per week - tone your body while boosting your daily energy levels</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>🌸</div>
              <div className={styles.benefitContent}>
                <h3>Enjoy a Supportive Community</h3>
                <p>Train with like-minded women who understand your challenges and celebrate your wins</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>✨</div>
              <div className={styles.benefitContent}>
                <h3>Prioritize Your Wellbeing</h3>
                <p>Finally put yourself first and feel healthier, happier, and more confident in just 28 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST/CREDIBILITY SECTION */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>Why {gym.name} Gets Results:</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Women-Only Environment (Safe & Supportive)</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Proven 28-Day Blueprint (100+ success stories)</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Private Support Group & Daily Accountability</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Flexible Nutrition (Designed for Real Life)</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className={`${styles.section} ${styles.sectionPurple}`}>
        <div className={styles.container}>
          <div className={styles.testimonialHero}>
            <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonialPullQuote}>&quot;This program gave me my energy and confidence back&quot;</p>

            <div className={styles.testimonialMetrics}>
              <div className={styles.metric}>Lost over a stone in 28 days</div>
              <div className={styles.metric}>Gained confidence</div>
              <div className={styles.metric}>Changed relationship with exercise</div>
            </div>

            <div className={styles.testimonialLong}>
              <div>
                <p className={styles.testimonialQuote}>
                  {gym.testimonials.long.quote}
                </p>
                <p className={styles.testimonialAuthor}>— {gym.testimonials.long.name}</p>
              </div>
              <div className={styles.testimonialImages}>
                <img src="/aimees-transformation.jpg" alt="Transformation results" />
              </div>
            </div>

            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnSecondary}`}>
              Claim Your Spot - November Start
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>Get Started in 3 Simple Steps:</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Claim Your Spot (2 minutes)</h3>
              <p>Fill out the quick form above - it takes less time than making a cup of tea</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Chat with Our Team (15 minutes)</h3>
              <p>We&apos;ll call to discuss your goals and make sure the challenge is perfect for you</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start Your Journey (November)</h3>
              <p>Show up, be supported, and watch your transformation happen - we&apos;ll guide you every step</p>
            </div>
          </div>

          <div className={styles.guaranteeBadge}>
            <div className={styles.badgeIcon}>💖</div>
            <div className={styles.badgeText}>
              <strong>Results Guaranteed or Your Money Back</strong>
            </div>
          </div>

          <div className={styles.centerCta}>
            <div className={styles.urgencyText}>⚠️ Only {gym.spotsAvailable} spots left for this intake</div>
            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
              Claim Your Spot Now - Only {gym.spotsAvailable} Left
            </button>
          </div>
        </div>
      </section>

      {/* WRITTEN TESTIMONIALS */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>
            {gym.location.toUpperCase()} WOMEN JUST LIKE YOU WHO TRANSFORMED IN {gym.programDuration.toUpperCase()}:
          </h2>

          <div className={styles.videoTestimonials}>
            {gym.testimonials.video.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
                <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                <div className={styles.testimonialStats}>
                  <p><strong>{testimonial.inches} inches</strong> lost</p>
                  <p><strong>{testimonial.weight}</strong> weight loss</p>
                  {testimonial.dressSizes && <p><strong>{testimonial.dressSizes} dress size(s)</strong> down</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>Frequently Asked Questions</h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How much time per week?</h3>
              <p>Just 3 sessions of 45 minutes each. That&apos;s 2.25 hours per week - easily fits around work and family.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is it women-only?</h3>
              <p>Yes! All our sessions are women-only, creating a comfortable, supportive environment where you can focus on yourself.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do I need fitness experience?</h3>
              <p>Absolutely not. Our program welcomes complete beginners. We&apos;ll teach you everything and support you throughout.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What&apos;s included?</h3>
              <p>3 coached sessions per week, personalized nutrition plan, private WhatsApp support group, progress tracking, and full facility access.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I have dietary restrictions?</h3>
              <p>Our nutrition plan is fully flexible and can be adapted to any dietary needs - vegetarian, vegan, gluten-free, you name it!</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What happens after 28 days?</h3>
              <p>You&apos;ll have the knowledge and confidence to continue, plus options to join our ongoing community if you want continued support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className={`${styles.section} ${styles.sectionPurple}`}>
        <div className={styles.container}>
          <div className={styles.finalCta}>
            <h2>Ready to Transform Before the Holidays?</h2>
            <p>Join {gym.spotsAvailable} other {gym.location} women in this intake and finally get the results you deserve.</p>

            <div className={styles.urgencyText}>⚠️ Challenge starts first week of November - Don&apos;t miss your spot</div>

            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
              Claim Your Spot Now - Only {gym.spotsAvailable} Left
            </button>

            <div className={styles.guaranteeText}>
              💖 Results Guaranteed or Your Money Back
            </div>
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
            Results may vary. Individual results will depend on personal commitment and effort. The testimonials shown are real results from past participants.
          </p>
        </div>
      </footer>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseModal}>
              ✕
            </button>
            <div className={styles.modalHeader}>
              <h2>REGISTER FOR 1 OF JUST {gym.spotsAvailable} SPACES ON OUR NEXT {gym.programDuration} CHALLENGE</h2>
              <p>And one of the team will then be in touch shortly...</p>
            </div>
            <div className={styles.modalFormContainer}>
              <div className={styles.modalIframeWrapper}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/f6lfpHUJagZlVtctdMit"
                  className={styles.modalFormIframe}
                  id="modal-f6lfpHUJagZlVtctdMit"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="28 day transformation nurture"
                  data-height="400"
                  data-layout-iframe-id="modal-f6lfpHUJagZlVtctdMit"
                  data-form-id="f6lfpHUJagZlVtctdMit"
                  title="28 day transformation nurture"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE STICKY CTA */}
      {showMobileSticky && (
        <div className={styles.mobileStickyCta}>
          <button onClick={scrollToForm} className={`${styles.btn} ${styles.btnPrimary}`}>
            Register Now - {gym.spotsAvailable} Spots Left
          </button>
        </div>
      )}
    </div>
  );
}
