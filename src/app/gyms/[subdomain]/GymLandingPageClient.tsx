'use client';

import { useState, useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './gym-landing.module.css'; // Force rebuild: margin-top -2050px, height 620px

export default function GymLandingPageClient({ gym }: { gym: GymConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileSticky, setShowMobileSticky] = useState(false);
  const currentYear = new Date().getFullYear();
  const isMenPage = gym.demographicAdjective === 'men';

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

      // Only show sticky on mobile (<768px) when form is not visible
      const isMobile = window.innerWidth < 768;
      setShowMobileSticky(isMobile && !isFormVisible);
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Fix LeadDec iframe height on mobile after script loads
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const iframeId = isMenPage ? 'inline-MUQgZECmSWI8l5WJSN7M' : 'inline-hero-form';

    const removeInlineStyles = () => {
      const heroIframe = document.getElementById(iframeId) as HTMLIFrameElement;
      if (heroIframe) {
        // Set height directly via inline styles (only way to override LeadDec's inline styles)
        heroIframe.style.setProperty('height', '4700px', 'important');
        heroIframe.style.setProperty('max-height', '4700px', 'important');
        heroIframe.style.setProperty('min-height', '4700px', 'important');
        heroIframe.style.setProperty('margin-top', '-2050px', 'important');
        heroIframe.setAttribute('data-mobile-fix-applied', 'true');
      }
    };

    // Run immediately
    removeInlineStyles();

    // Run after LeadDec script loads (multiple attempts to catch it)
    const intervals = [
      setTimeout(removeInlineStyles, 500),
      setTimeout(removeInlineStyles, 1000),
      setTimeout(removeInlineStyles, 1500),
      setTimeout(removeInlineStyles, 2000),
    ];

    // Watch for attribute changes and remove inline styles
    const observer = new MutationObserver(() => {
      removeInlineStyles();
    });

    const iframe = document.getElementById(iframeId);
    if (iframe) {
      observer.observe(iframe, {
        attributes: true,
        attributeFilter: ['style', 'height']
      });
    }

    return () => {
      intervals.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [isMenPage]);

  return (
    <div className={styles.gymLanding}>
      {/* HEADER */}
      <header className={styles.header}>
        <img src="/r-and-b-logo.png" alt={gym.name} className={styles.headerLogo} />
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.heroCallout}>CALLING ALL {gym.demographic.toUpperCase()} {gym.ageRange.toUpperCase()} IN {gym.location.toUpperCase()}<br />WHO WANT TO LOSE 1-2 STONE BEFORE CHRISTMAS</p>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                {isMenPage
                  ? `DROP 12-30 LBS & BUILD LEAN MUSCLE BEFORE THE FESTIVE SEASON`
                  : `DROP 12-30 LBS & 2 DRESS SIZES BEFORE THE FESTIVE SEASON`
                }
                <br />{gym.programDuration.toUpperCase()} OCTOBER CHALLENGE - {gym.location.toUpperCase()}
              </h1>

              <div className={styles.anxietyReducers}>
                <div className={styles.reducerItem}>❌ No Gym Intimidation</div>
                <div className={styles.reducerItem}>❌ No Boring Cardio</div>
                <div className={styles.reducerItem}>❌ No Restrictive Diets</div>
                <div className={styles.reducerItem}>✅ Fun, Supportive & Beginner-Friendly</div>
              </div>

              <p className={styles.heroSocialProof}>Register for our October 20th Challenge & join 100&apos;s of {gym.demographicAdjective} who have already transformed before the holidays</p>
              <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>YES! RESERVE MY SPOT NOW</a>
            </div>
            <div className={styles.heroFormContainer}>
              <h3>REGISTER FOR 1 OF 10 SPACES</h3>
              <p className={styles.octoberChallenge}>🍂 OCTOBER CHALLENGE 🍂</p>
              <div className={styles.iframeWrapper}>
                <iframe
                  src={isMenPage
                    ? "https://link.leaddec.com/widget/form/MUQgZECmSWI8l5WJSN7M"
                    : "https://link.leaddec.com/widget/form/FZjJnhxNySc73P6gaRu5"
                  }
                  className={styles.heroFormIframe}
                  id={isMenPage ? "inline-MUQgZECmSWI8l5WJSN7M" : "inline-hero-form"}
                  title={isMenPage ? "Mens Opt In" : "Register for October Challenge"}
                />
              </div>
              <p className={styles.urgency}>⏰ Challenge Starts Monday 20th October</p>
            </div>
          </div>

          {/* Review Images */}
          <div className={styles.reviewImages}>
            <img src="/review-1.png" alt="Customer review 1" />
            <img src="/review-2.png" alt="Customer review 2" />
            <img src="/review-3.png" alt="Customer review 3" />
            <img src="/review-4.png" alt="Customer review 4" />
            <img src="/review-5.png" alt="Customer review 5" />
            <img src="/review-6.png" alt="Customer review 6" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>The {gym.programDuration} Challenge Is <strong>SPECIFICALLY DESIGNED</strong> For {gym.demographic} {gym.ageRange} In {gym.location} Who Want To:</h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>{isMenPage ? '🎯' : '👗'}</div>
              <div className={styles.benefitContent}>
                <h3>
                  {isMenPage
                    ? 'Drop body fat and build lean muscle definition'
                    : 'Reduce their clothes size and tighten their waist'
                  }
                </h3>
                <p>without having to give up their favourite treats, miss out on social events or follow a crazy diet.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>💪</div>
              <div className={styles.benefitContent}>
                <h3>
                  {isMenPage
                    ? 'Build strength in chest, arms, shoulders & core'
                    : 'Tone up in all the right areas – particularly their legs, and arms'
                  }
                </h3>
                <p>without having to spend hours doing boring cardio or feeling lost in a gym.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>🥗</div>
              <div className={styles.benefitContent}>
                <h3>Learn how to change their nutrition habits for the better</h3>
                <p>
                  {isMenPage
                    ? 'so you can continue to build muscle and burn fat through the festive season while enjoying your favorite meals.'
                    : 'so you can continue to lose weight and KEEP it off through the festive season & also get the family involved.'
                  }
                </p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>✨</div>
              <div className={styles.benefitContent}>
                <h3>
                  {isMenPage
                    ? 'Get back your energy, strength & confidence'
                    : 'And finally get back their health, fitness & confidence'
                  }
                </h3>
                <p>to fully enjoy life again & feel like your best self</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG TESTIMONIAL SECTION */}
      <section className={`${styles.section} ${styles.sectionBlack}`}>
        <div className={styles.container}>
          <div className={styles.testimonialLong}>
            <div>
              <p className={styles.testimonialHeading}>&quot;Joining {gym.name} is the best decision I have ever made&quot;</p>
              <p className={styles.testimonialQuote}>{gym.testimonials.long.quote}</p>
              <p className={styles.testimonialAuthor}>— {gym.testimonials.long.name}</p>
            </div>
            <div className={styles.testimonialImages}>
              <img src="/rob-1.jpg" alt="Transformation results" />
            </div>
          </div>
          <div className={`${styles.textCenter} ${styles.mt40}`}>
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>CLAIM 1 OF 10 SPACES</a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>BY JOINING OUR &apos;TRIED & TESTED&apos; {gym.programDuration.toUpperCase()} CHALLENGE, YOU&apos;LL GET ACCESS TO:</h2>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📋</div>
              <div className={styles.featureContent}>
                <h3>{gym.programDuration.toUpperCase()} PROVEN PLAN</h3>
                <p>That has been &apos;Tried & Tested&apos; with hundreds of {gym.demographicAdjective} over {gym.age}, from busy working professionals to busy chasing grandparents!</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏃</div>
              <div className={styles.featureContent}>
                <h3>PT LED CLASSES</h3>
                <p>designed by our EXPERT Personal Trainers specifically designed to shift the stomach & drop inches without spending hours in the gym & eating boring food</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>👨‍🏫</div>
              <div className={styles.featureContent}>
                <h3>DEDICATED COACH</h3>
                <p>To give you increased confidence, motivation & accountability. They will be there to make sure you track & keep hitting your goals</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🍎</div>
              <div className={styles.featureContent}>
                <h3>NUTRITION SUPPORT</h3>
                <p>that won&apos;t make it boring when it comes to meal times, allow you to keep enjoying your favourite foods & even enjoy a glass of wine or beer on the weekend</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>❤️</div>
              <div className={styles.featureContent}>
                <h3>LIKE MINDED COMMUNITY</h3>
                <p>who will be on this journey with you, from the initial onboarding meeting, to supports groups & more</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏆</div>
              <div className={styles.featureContent}>
                <h3>AWARD WINNING STUDIO</h3>
                <p>providing everything you need to see results and a lifelong change</p>
              </div>
            </div>
          </div>

          <div className={`${styles.textCenter} ${styles.mt40}`}>
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>CLAIM 1 OF 10 SPACES</a>
            <span className={styles.scarcityMessage}>*WE ONLY HAVE 10 SPACES FOR THE OCTOBER 20TH CHALLENGE*</span>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>GETTING STARTED ON OUR NEXT {gym.programDuration.toUpperCase()} CHALLENGE COULDN&apos;T BE EASIER</h2>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processEmoji}>📝</div>
              <h3>1) Register Your Interest</h3>
              <p>It&apos;s as simple as clicking one of the &apos;Red&apos; buttons on this page to register</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processEmoji}>💬</div>
              <h3>2) Chat With The Team</h3>
              <p>A member of the team will give you a call to chat about your goals and make sure the challenge is right for you</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processEmoji}>🏋️</div>
              <h3>3) Start Your {gym.programDuration} Challenge</h3>
              <p>Your {gym.programDuration.toLowerCase()} challenge will then start working with our expert coaches & being pushed by your team mates</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processEmoji}>🎯</div>
              <h3>4) See Results In Just A Few Weeks</h3>
              <p>Not only will your friends & family start to see the changes, you will also start to look & feel it!</p>
            </div>
          </div>

          <div className={`${styles.textCenter} ${styles.mt40}`}>
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>CLAIM 1 OF 10 SPACES</a>
            <span className={styles.scarcityMessage}>*OCTOBER 20TH CHALLENGE - ONLY 10 SPACES AVAILABLE*</span>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>
            {isMenPage
              ? `${gym.location.toUpperCase()} MEN JUST LIKE YOU WHO TRANSFORMED THEIR LIVES IN 6 WEEKS:`
              : `${gym.location.toUpperCase()} WOMEN JUST LIKE YOU WHO TRANSFORMED THEIR LIVES IN 6 WEEKS:`
            }
          </h2>

          <div className={styles.videoTestimonials}>
            {gym.testimonials.video.map((testimonial, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoThumbnail}>
                  <img src={`/review-${index + 1}.png`} alt="Video testimonial" />
                  <div className={styles.playButton}>▶</div>
                </div>
                <div className={styles.videoContent}>
                  <h3>{testimonial.name}</h3>
                  <p>
                    {testimonial.name} dropped {testimonial.inches} inches and {testimonial.weight}
                    {testimonial.time && ` in ${testimonial.time}`}
                    {!isMenPage && testimonial.dressSizes && `, dropping ${testimonial.dressSizes} dress sizes`}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className={`${styles.section} ${styles.sectionBlack}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h1>
            {isMenPage
              ? `DROP 12-30 LBS & BUILD LEAN MUSCLE BEFORE THE FESTIVE SEASON`
              : `DROP 12-30 LBS & 2 DRESS SIZES BEFORE THE FESTIVE SEASON`
            }
            <br />{gym.programDuration.toUpperCase()} OCTOBER CHALLENGE - {gym.location.toUpperCase()}
          </h1>
          <div className={styles.mt40}>
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>YES! RESERVE MY SPOT NOW</a>
            <span className={styles.scarcityMessage}>*ONLY 10 SPACES AVAILABLE - CHALLENGE STARTS OCTOBER 20TH*</span>
          </div>

          <p className={styles.disclaimer}>
            Disclaimer: while you are a member here at {gym.name}, we will support, encourage & motivate you to help you achieve your goals. But we need to make you aware that results will vary depending on a number of factors that we can&apos;t always control.
            {' '}<a href="/privacy-policy" style={{ color: '#00C4CC' }}>Privacy Policy</a> | Copyright {currentYear} {gym.name}. All Rights Reserved.
          </p>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseModal}>×</button>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalHeading}>
                REGISTER FOR <span>1 OF JUST 10 SPACES</span> ON OUR OCTOBER 20TH {gym.programDuration.toUpperCase()} CHALLENGE
              </h2>
            </div>
            <p className={styles.modalSubheading}>🍂 Complete your transformation by December 1st - just in time to look and feel amazing for Christmas! 🍂</p>
            <div className={styles.modalFormContainer}>
              <iframe
                src={isMenPage
                  ? "https://link.leaddec.com/widget/form/MUQgZECmSWI8l5WJSN7M"
                  : "https://link.leaddec.com/widget/form/FZjJnhxNySc73P6gaRu5"
                }
                style={{ width: '100%', height: isMenPage ? '478px' : '667px', border: 'none', borderRadius: '4px' }}
                id={isMenPage ? "inline-MUQgZECmSWI8l5WJSN7M" : "inline-FZjJnhxNySc73P6gaRu5"}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={isMenPage ? "Mens Opt In" : "🏋🏻‍♀️ Challenge Funnel: Opt-in Form"}
                data-height={isMenPage ? "478" : "667"}
                data-layout-iframe-id={isMenPage ? "inline-MUQgZECmSWI8l5WJSN7M" : "inline-FZjJnhxNySc73P6gaRu5"}
                data-form-id={isMenPage ? "MUQgZECmSWI8l5WJSN7M" : "FZjJnhxNySc73P6gaRu5"}
                title={isMenPage ? "Mens Opt In" : "🏋🏻‍♀️ Challenge Funnel: Opt-in Form"}
              />
            </div>
          </div>
        </div>
      )}


      {/* MOBILE STICKY CTA */}
      {showMobileSticky && (
        <div className={styles.mobileStickyCta}>
          <button onClick={scrollToForm}>
            CLAIM MY SPOT - ONLY 10 LEFT - STARTS OCT 20TH
          </button>
        </div>
      )}
    </div>
  );
}
