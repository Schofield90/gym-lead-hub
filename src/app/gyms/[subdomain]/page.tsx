import { notFound } from 'next/navigation';
import { getGymBySubdomain } from '@/config/gyms';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const gym = getGymBySubdomain(subdomain);

  if (!gym) {
    return {
      title: 'Gym Not Found',
    };
  }

  return {
    title: `${gym.programDuration} Fitness Challenge - ${gym.name} ${gym.location}`,
    description: `Transform your body with our exclusive ${gym.programDuration.toLowerCase()} fitness challenge for ${gym.demographic.toLowerCase()} ${gym.ageRange.toLowerCase()} in ${gym.location}`,
  };
}

export default async function GymLandingPage({ params }: PageProps) {
  const { subdomain } = await params;
  const gym = getGymBySubdomain(subdomain);

  if (!gym) {
    notFound();
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', 'Helvetica', sans-serif;
          line-height: 1.6;
          color: #333;
          font-size: 16px;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        h1 {
          font-size: 42px;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        p {
          margin-bottom: 15px;
        }

        .section {
          width: 100%;
          padding: 60px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-white {
          background-color: #ffffff;
          color: #333;
        }

        .section-black {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .section-gray {
          background-color: #4a4a4a;
          color: #ffffff;
        }

        .header {
          padding: 20px;
          text-align: center;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .logo {
          font-family: 'Brush Script MT', cursive;
          font-size: 48px;
          color: #00C4CC;
          margin: 0;
        }

        .logo-subtitle {
          font-size: 14px;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: -10px;
        }

        .hero {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-gym-background.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          text-align: center;
          padding: 80px 20px;
        }

        .hero-callout {
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          text-decoration: underline;
        }

        .hero h1 {
          text-transform: uppercase;
          font-size: 48px;
          color: #ffffff;
          max-width: 900px;
          margin: 0 auto 20px;
        }

        .hero-subheadline {
          font-size: 20px;
          font-style: italic;
          margin-bottom: 20px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-social-proof {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .reviews-badge {
          display: inline-block;
          margin-top: 20px;
          font-size: 14px;
          color: #FFD700;
        }

        .stars {
          color: #FFD700;
          font-size: 20px;
        }

        .btn {
          display: inline-block;
          padding: 18px 40px;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 5px;
          text-align: center;
        }

        .btn-primary {
          background-color: #FF0000;
          color: #ffffff;
        }

        .btn-primary:hover {
          background-color: #CC0000;
          transform: scale(1.05);
        }

        .scarcity-message {
          display: block;
          margin-top: 15px;
          font-size: 14px;
          font-style: italic;
          color: #FF0000;
        }

        .section-white .scarcity-message {
          color: #FF0000;
        }

        .section-black .scarcity-message,
        .section-gray .scarcity-message {
          color: #FFD700;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 40px;
        }

        .benefit-item {
          display: flex;
          gap: 20px;
        }

        .benefit-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 5px;
          flex-shrink: 0;
        }

        .benefit-content h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .benefit-content p {
          font-size: 16px;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .feature-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .feature-content p {
          font-size: 16px;
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .process-step {
          text-align: center;
        }

        .process-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .process-step h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .process-step p {
          font-size: 16px;
          line-height: 1.6;
        }

        .testimonial-long {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .testimonial-quote {
          font-size: 20px;
          line-height: 1.8;
          font-style: italic;
        }

        .testimonial-heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          font-style: italic;
        }

        .testimonial-author {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .testimonial-images {
          display: flex;
          gap: 10px;
        }

        .testimonial-images img {
          width: 100%;
          border-radius: 5px;
        }

        .video-testimonials {
          max-width: 800px;
          margin: 40px auto 0;
        }

        .video-card {
          background-color: #000000;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .video-thumbnail {
          position: relative;
          width: 250px;
          flex-shrink: 0;
        }

        .video-thumbnail img {
          width: 100%;
          border-radius: 5px;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .video-content h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .video-content p {
          font-size: 16px;
          line-height: 1.6;
        }

        .disclaimer {
          font-size: 12px;
          line-height: 1.4;
          color: #999;
          margin-top: 30px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 26px;
          }

          h3 {
            font-size: 20px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .section {
            padding: 40px 20px;
          }

          .benefits-grid,
          .features-grid,
          .process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .testimonial-long {
            grid-template-columns: 1fr;
          }

          .testimonial-images {
            justify-content: center;
          }

          .video-card {
            flex-direction: column;
            text-align: center;
          }

          .video-thumbnail {
            width: 100%;
          }

          .benefit-item {
            flex-direction: column;
          }

          .benefit-image {
            width: 100%;
            height: 200px;
          }

          .btn {
            padding: 15px 30px;
            font-size: 16px;
          }
        }

        .text-center {
          text-align: center;
        }

        .mt-40 {
          margin-top: 40px;
        }

        .mb-40 {
          margin-bottom: 40px;
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <h1 className="logo">{gym.name}</h1>
        <p className="logo-subtitle">Total Health</p>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <p className="hero-callout">CALLING ALL {gym.demographic.toUpperCase()} {gym.ageRange.toUpperCase()} In {gym.location.toUpperCase()}</p>
          <h1>TRANSFORM YOUR BODY, HEALTH & FITNESS<br />WITH OUR EXCLUSIVE {gym.programDuration.toUpperCase()} CHALLENGE</h1>
          <p className="hero-subheadline">No more boring cardio! No more restrictive diet! & Not another &quot;quick fix&quot; programme!</p>
          <p className="hero-social-proof">Register for our next {gym.programDuration} Challenge & join 100&apos;s of {gym.demographicAdjective} who have already achieved some amazing results</p>
          <a href="#register" className="btn btn-primary">SEND ME MORE INFO</a>
          <div className="reviews-badge">
            <div className="stars">★★★★★</div>
            REVIEWS ON FACEBOOK
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-center">The {gym.programDuration} Challenge Is <strong>SPECIFICALLY DESIGNED</strong> For {gym.demographic} {gym.ageRange} In {gym.location} Who Want To:</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <img src="/benefit-1.jpg" alt="Fitness benefit" className="benefit-image" />
              <div className="benefit-content">
                <h3>Reduce their clothes size and tighten their waist</h3>
                <p>👗 without having to give up their favourite treats, miss out on social events or follow a crazy diet.</p>
              </div>
            </div>

            <div className="benefit-item">
              <img src="/benefit-2.jpg" alt="Toning benefit" className="benefit-image" />
              <div className="benefit-content">
                <h3>Tone up in all the right areas – particularly their legs, and arms</h3>
                <p>💪 without having to spend hours doing boring cardio or feeling lost in a gym.</p>
              </div>
            </div>

            <div className="benefit-item">
              <img src="/benefit-3.jpg" alt="Nutrition benefit" className="benefit-image" />
              <div className="benefit-content">
                <h3>Learn how to change their nutrition habits for the better</h3>
                <p>so you can continue to lose weight even after the challenge finishes & also get the family involved.</p>
              </div>
            </div>

            <div className="benefit-item">
              <img src="/benefit-4.jpg" alt="Confidence benefit" className="benefit-image" />
              <div className="benefit-content">
                <h3>And finally get back their health, fitness & confidence</h3>
                <p>to fully enjoy life again & feel like their best self</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG TESTIMONIAL SECTION */}
      <section className="section section-black">
        <div className="container">
          <div className="testimonial-long">
            <div>
              <p className="testimonial-heading">&quot;Joining {gym.name} is the best decision I have ever made&quot;</p>
              <p className="testimonial-quote">{gym.testimonials.long.quote}</p>
              <p className="testimonial-author">— {gym.testimonials.long.name}</p>
            </div>
            <div className="testimonial-images">
              <img src="/testimonial-before-after.jpg" alt="Transformation results" />
            </div>
          </div>
          <div className="text-center mt-40">
            <a href="#register" className="btn btn-primary">SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-center">BY JOINING OUR &apos;TRIED & TESTED&apos; {gym.programDuration.toUpperCase()} CHALLENGE, YOU&apos;LL GET ACCESS TO:</h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <div className="feature-content">
                <h3>{gym.programDuration.toUpperCase()} PROVEN PLAN</h3>
                <p>That has been &apos;Tried & Tested&apos; with hundreds of {gym.demographicAdjective} over {gym.age}, from busy working professionals to busy chasing grandparents!</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🏃</div>
              <div className="feature-content">
                <h3>PT LED CLASSES</h3>
                <p>designed by our EXPERT Personal Trainers specifically designed to shift the stomach & drop inches without spending hours in the gym & eating boring food</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">👨‍🏫</div>
              <div className="feature-content">
                <h3>DEDICATED COACH</h3>
                <p>To give you increased confidence, motivation & accountability. They will be there to make sure you track & keep hitting your goals</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🍎</div>
              <div className="feature-content">
                <h3>NUTRITION SUPPORT</h3>
                <p>that won&apos;t make it boring when it comes to meal times, allow you to keep enjoying your favourite foods & even enjoy a glass of wine or beer on the weekend</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">❤️</div>
              <div className="feature-content">
                <h3>LIKE MINDED COMMUNITY</h3>
                <p>who will be on this journey with you, from the initial onboarding meeting, to supports groups & more</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <div className="feature-content">
                <h3>AWARD WINNING STUDIO</h3>
                <p>providing everything you need to see results and a lifelong change</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-40">
            <a href="#register" className="btn btn-primary">SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
            <span className="scarcity-message">*WE ONLY HAVE {gym.spotsAvailable} SPACES FOR EACH {gym.programDuration.toUpperCase()} CHALLENGE*</span>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section section-white">
        <div className="container">
          <h2 className="text-center">GETTING STARTED ON OUR NEXT {gym.programDuration.toUpperCase()} CHALLENGE COULDN&apos;T BE EASIER</h2>

          <div className="process-grid">
            <div className="process-step">
              <img src="/step-1.jpg" alt="Step 1" className="process-image" />
              <h3>1) Register Your Interest</h3>
              <p>It&apos;s as simple as clicking one of the &apos;Red&apos; buttons on this page to register</p>
            </div>

            <div className="process-step">
              <img src="/step-2.jpg" alt="Step 2" className="process-image" />
              <h3>2) Chat With The Team</h3>
              <p>A member of the team will give you a call to chat about your goals and make sure the challenge is right for you</p>
            </div>

            <div className="process-step">
              <img src="/step-3.jpg" alt="Step 3" className="process-image" />
              <h3>3) Start Your {gym.programDuration} Challenge</h3>
              <p>Your {gym.programDuration.toLowerCase()} challenge will then start working with our expert coaches & being pushed by your team mates</p>
            </div>

            <div className="process-step">
              <img src="/step-4.jpg" alt="Step 4" className="process-image" />
              <h3>4) See Results In Just A Few Weeks</h3>
              <p>Not only will your friends & family start to see the changes, you will also start to look & feel it!</p>
            </div>
          </div>

          <div className="text-center mt-40">
            <a href="#register" className="btn btn-primary">SEND ME MORE INFO ON THE NEXT CHALLENGE</a>
            <span className="scarcity-message">*NEXT {gym.programDuration.toUpperCase()} CHALLENGE STARTING SOON, ONLY {gym.spotsAvailable} SPACES AVAILABLE*</span>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center">THESE {gym.location.toUpperCase()} LOCALS STARTED ON THIS PAGE TOO...</h2>

          <div className="video-testimonials">
            {gym.testimonials.video.map((testimonial, index) => (
              <div key={index} className="video-card">
                <div className="video-thumbnail">
                  <img src={`/testimonial-video-${index + 1}.jpg`} alt="Video testimonial" />
                  <div className="play-button">▶</div>
                </div>
                <div className="video-content">
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
      <section className="section section-black">
        <div className="container text-center">
          <h1>TRANSFORM YOUR BODY, HEALTH & FITNESS<br />WITH OUR EXCLUSIVE {gym.programDuration.toUpperCase()} CHALLENGE</h1>
          <div className="mt-40">
            <a href="#register" className="btn btn-primary">YES! I WANT TO TRANSFORM MY BODY</a>
            <span className="scarcity-message">*SPACES ARE LIMITED ON OUR NEXT {gym.programDuration.toUpperCase()} CHALLENGE*</span>
          </div>

          <p className="disclaimer">
            Disclaimer: while you are a member here at {gym.name}, we will support, encourage & motivate you to help you achieve your goals. But we need to make you aware that results will vary depending on a number of factors that we can&apos;t always control.
            {' '}<a href="/privacy-policy" style={{ color: '#00C4CC' }}>Privacy Policy</a> | Copyright {currentYear} {gym.name}. All Rights Reserved.
          </p>
        </div>
      </section>

      {/* TRACKING SCRIPT */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });

          document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', function() {
              console.log('CTA clicked:', this.textContent);
            });
          });
        `
      }} />
    </>
  );
}
