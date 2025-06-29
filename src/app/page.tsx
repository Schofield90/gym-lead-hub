import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problems />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}