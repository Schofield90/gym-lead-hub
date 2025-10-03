'use client';

import { useState, useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './gym-landing.module.css';

export default function GymLandingPageClient({ gym }: { gym: GymConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const currentYear = new Date().getFullYear();

  // Countdown timer effect
  useEffect(() => {
    const COUNTDOWN_KEY = 'randbfitness_countdown_end';

    // Get or set the countdown end time (18 hours from first visit)
    let endTime = localStorage.getItem(COUNTDOWN_KEY);
    if (!endTime) {
      const now = new Date().getTime();
      const eighteenHours = 18 * 60 * 60 * 1000; // 18 hours in milliseconds
      endTime = (now + eighteenHours).toString();
      localStorage.setItem(COUNTDOWN_KEY, endTime);
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const end = parseInt(endTime!);
      const difference = end - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.gymLanding}>
      {/* HEADER */}
      <header className={styles.header}>
        <img src="/r-and-b-logo.png" alt={gym.name} className={styles.headerLogo} />
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.heroCallout}>CALLING ALL {gym.demographic.toUpperCase()} {gym.ageRange.toUpperCase()} In {gym.location.toUpperCase()}</p>
              <h1>TRANSFORM YOUR BODY, HEALTH & FITNESS<br />WITH OUR EXCLUSIVE {gym.programDuration.toUpperCase()} CHALLENGE</h1>
              <p className={styles.heroSubheadline}>No more boring cardio! No more restrictive diet! & Not another &quot;quick fix&quot; programme!</p>
              <p className={styles.heroSocialProof}>Register for our next {gym.programDuration} Challenge & join 100&apos;s of {gym.demographicAdjective} who have already achieved some amazing results</p>
              <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>SEND ME MORE INFO</a>
            </div>
            <div className={styles.heroImage}>
              <img src="/rob-1.jpg" alt="Transformation" />
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
              <div className={styles.benefitEmoji}>👗</div>
              <div className={styles.benefitContent}>
                <h3>Reduce their clothes size and tighten their waist</h3>
                <p>without having to give up their favourite treats, miss out on social events or follow a crazy diet.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>💪</div>
              <div className={styles.benefitContent}>
                <h3>Tone up in all the right areas – particularly their legs, and arms</h3>
                <p>without having to spend hours doing boring cardio or feeling lost in a gym.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>🥗</div>
              <div className={styles.benefitContent}>
                <h3>Learn how to change their nutrition habits for the better</h3>
                <p>so you can continue to lose weight even after the challenge finishes & also get the family involved.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitEmoji}>✨</div>
              <div className={styles.benefitContent}>
                <h3>And finally get back their health, fitness & confidence</h3>
                <p>to fully enjoy life again & feel like their best self</p>
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
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
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
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
            <span className={styles.scarcityMessage}>*WE ONLY HAVE {gym.spotsAvailable} SPACES FOR EACH {gym.programDuration.toUpperCase()} CHALLENGE*</span>
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
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
            <span className={styles.scarcityMessage}>*NEXT {gym.programDuration.toUpperCase()} CHALLENGE STARTING SOON, ONLY {gym.spotsAvailable} SPACES AVAILABLE*</span>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2 className={styles.textCenter}>THESE {gym.location.toUpperCase()} LOCALS STARTED ON THIS PAGE TOO...</h2>

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
                    {testimonial.dressSizes && `, dropping ${testimonial.dressSizes} dress sizes`}.
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
          <h1>TRANSFORM YOUR BODY, HEALTH & FITNESS<br />WITH OUR EXCLUSIVE {gym.programDuration.toUpperCase()} CHALLENGE</h1>
          <div className={styles.mt40}>
            <a href="#register" onClick={handleOpenModal} className={`${styles.btn} ${styles.btnPrimary}`}>YES! I WANT TO TRANSFORM MY BODY</a>
            <span className={styles.scarcityMessage}>*SPACES ARE LIMITED ON OUR NEXT {gym.programDuration.toUpperCase()} CHALLENGE*</span>
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
                REGISTER FOR <span>1 OF JUST 10 SPACES</span> ON OUR NEXT {gym.programDuration.toUpperCase()} CHALLENGE
              </h2>
            </div>
            <p className={styles.modalSubheading}>And one of the team will then be in touch shortly...</p>
            <div className={styles.modalFormContainer}>
              <iframe
                src="https://link.leaddec.com/widget/form/FZjJnhxNySc73P6gaRu5"
                style={{ width: '100%', height: '750px', border: 'none' }}
                id="inline-FZjJnhxNySc73P6gaRu5"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="🏋🏻‍♀️ Challenge Funnel: Opt-in Form"
                data-height="747"
                data-layout-iframe-id="inline-FZjJnhxNySc73P6gaRu5"
                data-form-id="FZjJnhxNySc73P6gaRu5"
                title="🏋🏻‍♀️ Challenge Funnel: Opt-in Form"
              />
            </div>
          </div>
        </div>
      )}

      {/* COUNTDOWN BANNER */}
      {timeLeft && (
        <div className={styles.countdownBanner}>
          <div className={styles.countdownContent}>
            <span className={styles.countdownText}>⏰ LIMITED TIME OFFER EXPIRES IN:</span>
            <div className={styles.countdownTimer}>
              <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.timeLabel}>Hours</span>
              </div>
              <span className={styles.timeSeparator}>:</span>
              <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.timeLabel}>Minutes</span>
              </div>
              <span className={styles.timeSeparator}>:</span>
              <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.timeLabel}>Seconds</span>
              </div>
            </div>
            <button onClick={handleOpenModal} className={styles.countdownButton}>CLAIM YOUR SPOT NOW!</button>
          </div>
        </div>
      )}
    </div>
  );
}
