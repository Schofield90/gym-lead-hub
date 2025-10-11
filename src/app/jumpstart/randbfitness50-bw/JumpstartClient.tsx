'use client';

import { useState, useEffect } from 'react';
import { GymConfig } from '@/config/gyms';
import styles from './jumpstart.module.css';

export default function JumpstartClient({ gym }: { gym: GymConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  // Countdown timer effect
  useEffect(() => {
    const COUNTDOWN_KEY = 'randbfitness_jumpstart_countdown';

    let endTime = localStorage.getItem(COUNTDOWN_KEY);
    if (!endTime) {
      const now = new Date().getTime();
      const eighteenHours = 18 * 60 * 60 * 1000;
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

      const script = document.createElement('script');
      script.src = 'https://link.leaddec.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
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

  return (
    <div className={styles.jumpstartPage}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.container}>
          <img src="/r-and-b-logo.png" alt={gym.name} className={styles.logo} />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.heroEyebrow}>CALLING ALL BUSY WOMEN OVER 50 IN BEDFORD WHO WANT TO LOSE 1-2 STONE BEFORE CHRISTMAS</p>
          <h1 className={styles.heroMainTitle}>
            DROP 12-30 LBS & 2 DRESS SIZES BEFORE THE FESTIVE SEASON<br />
            <span className={styles.highlight}>6 WEEK OCTOBER CHALLENGE - BEDFORD</span>
          </h1>
          <div className={styles.heroGrid}>
            <div className={styles.heroImage}>
              <img src="/training-image-2.jpg" alt="Transformation Results" />
            </div>
            <div className={styles.heroText}>
              <p className={styles.heroDescription}>
                Join our October Challenge starting October 20th - designed specifically for busy women over 50 in Bedford who want real results before Christmas!
              </p>

              {/* Anxiety Reducers */}
              <div className={styles.anxietyReducers}>
                <div className={styles.reducerItem}>❌ No Gym Intimidation</div>
                <div className={styles.reducerItem}>❌ No Boring Cardio</div>
                <div className={styles.reducerItem}>❌ No Restrictive Diets</div>
                <div className={styles.reducerItem}>✅ Fun, Supportive & Beginner-Friendly</div>
              </div>

              <button onClick={handleOpenModal} className={styles.btnPrimary}>
                RESERVE MY SPOT FOR OCTOBER 20TH
                <span className={styles.btnSubtext}>Only {gym.spotsAvailable} Spaces Left</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      {timeLeft && (
        <section className={styles.countdown}>
          <div className={styles.container}>
            <h2>October Challenge Registration Closes In:</h2>
            <div className={styles.timer}>
              <div className={styles.timerBox}>
                <span className={styles.timerNumber}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Hours</span>
              </div>
              <span className={styles.timerColon}>:</span>
              <div className={styles.timerBox}>
                <span className={styles.timerNumber}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Minutes</span>
              </div>
              <span className={styles.timerColon}>:</span>
              <div className={styles.timerBox}>
                <span className={styles.timerNumber}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Seconds</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES SECTION */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What You&apos;ll Get</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏋️</div>
              <h3>Expert Training</h3>
              <p>Personalized workout plans designed for your fitness level and goals</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🥗</div>
              <h3>Nutrition Guidance</h3>
              <p>Simple, sustainable eating plans that fit your lifestyle</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💪</div>
              <h3>Accountability</h3>
              <p>Daily check-ins and support from our expert coaching team</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Community Support</h3>
              <p>Join a motivated group of like-minded individuals</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className={styles.results}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Real Results From Real People</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.reviewImages}>
              <img src="/review-1.png" alt="Success story 1" />
              <img src="/review-2.png" alt="Success story 2" />
              <img src="/review-3.png" alt="Success story 3" />
              <img src="/review-4.png" alt="Success story 4" />
              <img src="/review-5.png" alt="Success story 5" />
              <img src="/review-6.png" alt="Success story 6" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.testimonialBox}>
            <p className={styles.testimonialQuote}>
              &ldquo;{gym.testimonials.long.quote}&rdquo;
            </p>
            <p className={styles.testimonialAuthor}>— {gym.testimonials.long.name}</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Register</h3>
              <p>Fill out the form and secure your spot in our next challenge</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Consultation</h3>
              <p>Meet with our team to discuss your goals and get started</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Transform</h3>
              <p>Follow your personalized plan and see results in just {gym.programDuration.toLowerCase()}</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Maintain</h3>
              <p>Keep your results with ongoing support and guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM BENEFITS */}
      <section className={styles.programBenefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Give Us Just 6 Weeks And We Will Give You Your Body Back!</h2>
          <div className={styles.benefitsLayout}>
            <div className={styles.benefitsImage}>
              <img src="/training-image-1.jpg" alt="Training session" />
            </div>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Training sessions</strong> 2-3 times a week
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Feel great about</strong> your accomplishments
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Assessments</strong> and coaching
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Increase</strong> confidence
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Nutrition plan</strong> that is personalised
                </div>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Master your metabolism</strong>, regardless of your age
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className={styles.whoIsThisFor}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who Is This For?</h2>
          <div className={styles.targetAudienceLayout}>
            <div className={styles.targetAudienceList}>
              <h3>Women Of All Ages Who Want Or Need Accountability, Support And Motivation In A FUN Atmosphere!</h3>
              <div className={styles.targetItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Busy professionals</strong> (Time crunched? Get in, get out, get fit!)
                </div>
              </div>
              <div className={styles.targetItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Beginner to exercise</strong> (We&apos;ll start slow, but you&apos;ll get results fast!)
                </div>
              </div>
              <div className={styles.targetItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>People of all ages</strong> who want to look and feel great!
                </div>
              </div>
              <div className={styles.targetItem}>
                <span className={styles.checkmark}>✓</span>
                <div>
                  <strong>Women who want</strong> a fitness kick start and results
                </div>
              </div>
            </div>
            <div className={styles.targetAudienceImage}>
              <img src="/training-image-2.jpg" alt="Fitness training" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to Drop 1-2 Stone Before Christmas?</h2>
          <p>Join our October 20th Challenge - Only {gym.spotsAvailable} spots remaining for women over 50 in Bedford!</p>
          <button onClick={handleOpenModal} className={styles.btnPrimary}>
            CLAIM MY SPOT FOR OCTOBER 20TH
          </button>
          <p className={styles.disclaimer}>
            * Results may vary. This is not a guarantee of results.
          </p>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <div className={styles.modalHeader}>
              <h2>REGISTER FOR 1 OF JUST {gym.spotsAvailable} SPACES ON OUR OCTOBER 20TH CHALLENGE</h2>
              <p>And one of the team will then be in touch shortly...</p>
            </div>
            <div className={styles.modalBody}>
              <iframe
                src="https://link.leaddec.com/widget/form/FZjJnhxNySc73P6gaRu5"
                style={{ width: '100%', height: '667px', border: 'none', borderRadius: '4px' }}
                id="inline-FZjJnhxNySc73P6gaRu5"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="🏋🏻‍♀️ Challenge Funnel: Opt-in Form"
                data-height="667"
                data-layout-iframe-id="inline-FZjJnhxNySc73P6gaRu5"
                data-form-id="FZjJnhxNySc73P6gaRu5"
                title="🏋🏻‍♀️ Challenge Funnel: Opt-in Form"
              />
            </div>
          </div>
        </div>
      )}

      {/* STICKY COUNTDOWN BANNER */}
      {timeLeft && (
        <div className={styles.stickyBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerText}>
              October Challenge closes in: {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <button onClick={handleOpenModal} className={styles.bannerBtn}>
              RESERVE MY SPOT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
