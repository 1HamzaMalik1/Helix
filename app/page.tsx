import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Process from '@/components/Process';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <Process/>
      <Team />
      <Contact />
    </>
  );
}