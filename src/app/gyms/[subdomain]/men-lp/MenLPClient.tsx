'use client';

import { useState, useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './men-lp.module.css';

export default function MenLPClient({ gym }: { gym: GymConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileSticky, setShowMobileSticky] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';

      // Load LeadDec form script
      const script = document.createElement('script');
      script.src = 'https://link.leaddec.com/js/form_embed.js';
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

  // Fix LeadDec iframe height on mobile
  useEffect(() => {
    const heroIframeId = 'inline-MUQgZECmSWI8l5WJSN7M';
    const modalIframeId = 'modal-MUQgZECmSWI8l5WJSN7M';

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
          {/* Logo at top of hero */}
          <div className={styles.heroLogo}>
            <img src="/r-and-b-logo.png" alt={gym.name} className={styles.headerLogo} />
          </div>

          <div className={styles.heroCallout}>
            <h1 className={styles.mainHeadline}>
              Bedford Men Over 30: Drop 1-2 Stone in 6 Weeks & Look Your Best for Christmas
              <span className={styles.subheadlineHighlight}>Perfect for busy guys who struggle for time and self motivation</span>
            </h1>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.urgencyBanner}>
                ⚠️ Only 12 spots remaining for this intake
              </div>

              <h2 className={styles.subheadline}>
                Join 100+ Local Men Who&apos;ve Already Transformed This Year - October 20th Challenge Now Open
              </h2>

              <div className={styles.anxietyReducers}>
                <div className={styles.reducerItem}>❌ No Gym Intimidation</div>
                <div className={styles.reducerItem}>❌ No Boring Cardio</div>
                <div className={styles.reducerItem}>❌ No Restrictive Diets</div>
                <div className={styles.reducerItem}>✅ Fun, Supportive & Beginner-Friendly</div>
              </div>

              <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>
                Claim Your Spot - October 20th Start
              </button>
            </div>

            <div className={styles.heroFormContainer}>
              <h3>REGISTER FOR 1 OF 12 SPACES</h3>
              <p className={styles.octoberChallenge}>🍂 OCTOBER CHALLENGE 🍂</p>
              <div className={styles.iframeWrapper}>
                <iframe
                  src="https://link.leaddec.com/widget/form/MUQgZECmSWI8l5WJSN7M"
                  className={styles.heroFormIframe}
                  id="inline-MUQgZECmSWI8l5WJSN7M"
                  title="Mens Opt In"
                />
              </div>
              <p className={styles.urgency}>⏰ Challenge Starts Monday 20th October</p>
            </div>
          </div>

          {/* Social Proof Banner */}
          <div className={styles.socialProofBanner}>
            🔥 237 Bedford men transformed in 2024 | ⭐ 4.9/5 rating
          </div>

          {/* Review Images */}
          <div className={styles.reviewImages}>
            <img src="/review-men-1.png" alt="Customer review 1" />
            <img src="/review-men-2.png" alt="Customer review 2" />
            <img src="/review-men-3.png" alt="Customer review 3" />
            <img src="/review-men-4.png" alt="Customer review 4" />
            <img src="/review-men-5.png" alt="Customer review 5" />
            <img src="/review-men-6.png" alt="Customer review 6" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>
            The {gym.programDuration} Challenge Is <strong>SPECIFICALLY DESIGNED</strong> For Bedford Men Over 30 Who Want To:
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>🎯</div>
              <div className={styles.benefitContent}>
                <h3>Keep Your Social Life</h3>
                <p>Enjoy meals out, weekend pints, and family dinners without guilt or restrictions</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>💪</div>
              <div className={styles.benefitContent}>
                <h3>Train Smart, Not Long</h3>
                <p>Just 3 sessions per week, 45 minutes each - no boring cardio or wasted gym time</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>🎄</div>
              <div className={styles.benefitContent}>
                <h3>Build Your Christmas Body</h3>
                <p>Proven system to burn fat and build muscle so you look sharp in December and beyond</p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitEmoji}>✨</div>
              <div className={styles.benefitContent}>
                <h3>Feel Like Yourself Again</h3>
                <p>Boost energy, confidence, and mental clarity - be present with family and crush it at work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST/CREDIBILITY SECTION */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>Why R&B Fitness Gets Results:</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Coached by Level 4 Certified Trainers</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Proven 6-Week Blueprint (100+ success stories)</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Private Support Group & Accountability</p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <p>Flexible Nutrition Plan (Keep your favorite foods)</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className={`${styles.section} ${styles.sectionBlack}`}>
        <div className={styles.container}>
          <div className={styles.testimonialHero}>
            <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonialPullQuote}>&quot;Best investment I&apos;ve made in myself&quot;</p>

            <div className={styles.testimonialMetrics}>
              <div className={styles.metric}>Lost 2 stone in 6 weeks</div>
              <div className={styles.metric}>Gained muscle</div>
              <div className={styles.metric}>Energy through the roof</div>
            </div>

            <div className={styles.testimonialLong}>
              <div>
                <p className={styles.testimonialQuote}>
                  I was skeptical about group training at first, but the {gym.name} team made everything so easy and welcoming.
                  In just 6 weeks, I dropped 2 stone, gained muscle, and completely transformed how I feel about fitness.
                  The best part? I still enjoyed my weekend pints and family meals. This isn&apos;t a diet - it&apos;s a lifestyle change that actually works.
                </p>
                <p className={styles.testimonialAuthor}>— James T., 38, Bedford</p>
              </div>
              <div className={styles.testimonialImages}>
                <img src="/rob-1.jpg" alt="Transformation results" />
              </div>
            </div>

            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnSecondary}`}>
              Claim Your Spot - October 20th Start
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
              <p>Click below and fill out a quick form - takes less time than ordering a coffee</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Strategy Call (15 minutes)</h3>
              <p>Our team will call to discuss your goals and ensure the challenge is perfect for you</p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start Your Transformation (October 20th)</h3>
              <p>Show up, work hard, and watch the results happen - we&apos;ll guide you every step</p>
            </div>
          </div>

          <div className={styles.guaranteeBadge}>
            <div className={styles.badgeIcon}>💪</div>
            <div className={styles.badgeText}>
              <strong>Results Guaranteed or Your Money Back</strong>
            </div>
          </div>

          <div className={styles.centerCta}>
            <div className={styles.urgencyText}>⚠️ Only 12 spots left for this intake</div>
            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
              Claim Your Spot Now - Only 12 Left
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>
            BEDFORD MEN JUST LIKE YOU WHO TRANSFORMED THEIR LIVES IN 6 WEEKS:
          </h2>

          <div className={styles.videoTestimonials}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className={styles.videoCard}>
                <img src={`/review-men-${num}.png`} alt={`Men's review ${num}`} />
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
              <p>Just 3 sessions of 45 minutes each. That&apos;s 2.25 hours per week - less time than watching a movie.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I miss a session?</h3>
              <p>Life happens! We have multiple session times throughout the week, and you can make up missed sessions easily.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do I need experience?</h3>
              <p>Absolutely not. Our program is designed for beginners and intermediates. We&apos;ll teach you everything you need to know.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What&apos;s included in the challenge?</h3>
              <p>3 coached sessions per week, nutrition plan, private support group, progress tracking, and full access to our facilities.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I still eat my favorite foods?</h3>
              <p>Yes! We teach you how to enjoy the foods you love while still losing weight. No restrictive diets or meal prep required.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>What happens after the 6 weeks?</h3>
              <p>You&apos;ll have the knowledge and habits to continue on your own, plus options to continue with us if you&apos;d like ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className={`${styles.section} ${styles.sectionBlack}`}>
        <div className={styles.container}>
          <div className={styles.finalCta}>
            <h2>Ready to Transform Before Christmas?</h2>
            <p>Join 12 other Bedford men in this intake and finally get the results you deserve.</p>

            <div className={styles.urgencyText}>⚠️ Challenge starts October 20th - Don&apos;t miss your spot</div>

            <button onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
              Claim Your Spot Now - Only 12 Left
            </button>

            <div className={styles.guaranteeText}>
              💪 Results Guaranteed or Your Money Back
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
              <h2>REGISTER FOR 1 OF JUST 12 SPACES ON OUR NEXT 6 WEEK CHALLENGE</h2>
              <p>And one of the team will then be in touch shortly...</p>
            </div>
            <div className={styles.modalFormContainer}>
              <div className={styles.modalIframeWrapper}>
                <iframe
                  src="https://link.leaddec.com/widget/form/MUQgZECmSWI8l5WJSN7M"
                  className={styles.modalFormIframe}
                  id="modal-MUQgZECmSWI8l5WJSN7M"
                  title="🏋🏻‍♂️ Mens Challenge: Opt-in Form"
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
            Register Now - 12 Spots Left
          </button>
        </div>
      )}
    </div>
  );
}
