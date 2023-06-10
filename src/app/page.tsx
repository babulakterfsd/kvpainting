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
import { useEffect, useState } from 'react';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* scroll to top */}
      {windowHeight && (
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="scrollToTop"
        />
      )}
      <Footer />
    </div>
  );
}
