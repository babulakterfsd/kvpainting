'use client';

import Navbar from '@/components/shared/Navbar';
import About from '@/components/ui/About';
import Banner from '@/components/ui/Banner';
import Companies from '@/components/ui/Companies';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import Projects from '@/components/ui/Projects';
import Services from '@/components/ui/Services';
import Whatwedo from '@/components/ui/Whatwedo';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Whatwedo />
      <Companies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
