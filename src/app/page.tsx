import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import Founder from '@/components/sections/Founder';
import Services from '@/components/sections/Services';
import ROI from '@/components/sections/ROI';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <Problems />
      <Founder />
      <Services />
      <ROI />
      <ContactForm />
      <Footer />
    </main>
  );
}