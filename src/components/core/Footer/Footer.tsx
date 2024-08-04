import React from 'react';
import Image from 'next/image';
import { LogoFooter } from '@/assets';

import { TwitterIcon } from '@/components/shared';

const Footer = () => {
  return (
    <div className='bg-footer-pattern pt-16 bottom-0 flex flex-col absolute justify-center w-full bg-no-repeat bg-top md:min-h-[250px] min-h-[90px] z-50'>
      <div className='bg-dark w-full flex items-center justify-center mt-4'>
        <Image
          src={LogoFooter}
          alt='desturction-labs-logo'
          className='w-[20px] h-[40px] md:w-[35px] md:h-[60px]'
        />{' '}
      </div>
      <div className='flex md:flex-row flex-col items-center gap-4 mb-6 mt-5 justify-around w-full'>
        <div className='text-white text-sm text-center flex w-full items-center justify-center'>
          © {new Date().getFullYear()} Destruction Labz, All rights reserved.
        </div>
        <div className='flex w-full mt-2 md:mt-0 text-white items-center justify-center gap-4'>
          {/* <FacebookIcon />
          <InstaIcon /> */}
          <a
            href='https://twitter.com/destructionlabz'
            target='_blank'
            aria-label='Twitter'
          >
            <TwitterIcon />
          </a>
        </div>
        <div className='flex w-full text-sm mt-2 md:mt-0 items-center justify-center gap-2 text-white'>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
