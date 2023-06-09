'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center text-3xl">
      <h1
        style={{
          fontFamily: 'Manrope',
          letterSpacing: '2%',
          fontSize: '64px',
        }}
      >
        Welcome to KVPaintings
      </h1>
    </div>
  );
}
