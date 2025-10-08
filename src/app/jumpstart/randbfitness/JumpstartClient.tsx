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
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Transform Your Body in Just {gym.programDuration}
              </h1>
              <p className={styles.heroSubtitle}>
                Join our proven {gym.programDuration} Challenge designed specifically for {gym.demographic.toLowerCase()} {gym.ageRange.toLowerCase()} in {gym.location}
              </p>
              <ul className={styles.heroBullets}>
                <li>No restrictive diets or boring cardio</li>
                <li>Proven results with 100+ success stories</li>
                <li>Expert coaching and support every step</li>
                <li>Only {gym.spotsAvailable} spots available this month</li>
              </ul>
              <button onClick={handleOpenModal} className={styles.btnPrimary}>
                Claim Your Spot Now
              </button>
            </div>
            <div className={styles.heroImage}>
              <img src="/rob-1.jpg" alt="Transformation Results" />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      {timeLeft && (
        <section className={styles.countdown}>
          <div className={styles.container}>
            <h2>Limited Time Offer Expires In:</h2>
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

      {/* VIDEO TESTIMONIALS */}
      <section className={styles.videos}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.videosGrid}>
            {gym.testimonials.video.map((testimonial, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoPlaceholder}>
                  <span>▶</span>
                </div>
                <h4>{testimonial.name}</h4>
                <p>Lost {testimonial.weight} & {testimonial.inches} inches</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Body?</h2>
          <p>Join our next {gym.programDuration} Challenge starting soon. Only {gym.spotsAvailable} spots remaining!</p>
          <button onClick={handleOpenModal} className={styles.btnPrimary}>
            Register Now
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
              <h2>Claim Your Spot in Our Next {gym.programDuration} Challenge</h2>
              <p>Fill out the form below and our team will be in touch shortly</p>
            </div>
            <div className={styles.modalBody}>
              <div
                data-leaddec-form-id="FZjJnhxNySc73P6gaRu5"
                data-leaddec-form-version="1"
                style={{ width: '100%', height: '667px' }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY COUNTDOWN BANNER */}
      {timeLeft && (
        <div className={styles.stickyBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerText}>
              Offer expires in: {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <button onClick={handleOpenModal} className={styles.bannerBtn}>
              Claim Your Spot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
