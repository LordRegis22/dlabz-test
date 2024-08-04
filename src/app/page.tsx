import {
  AboutUs,
  Contact,
  Highlights,
  Hero,
  Team,
  Footer,
} from '@/components/core';
import React from 'react';

import { ComingSoon } from '../assets';
import Image from 'next/image';

const App = () => {
  return (
    <>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <div className='relative max-w-[1920px] w-full mx-auto'>
        <div className='section' id='#'>
          <Hero />
        </div>
        <div className='section' id='about-us'>
          <AboutUs />
        </div>
        <div className='section' id='team'>
          <Team />
        </div>
        <div className='section' id='highlights'>
          <Highlights />
        </div>
        <div className='section' id='contact'>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
