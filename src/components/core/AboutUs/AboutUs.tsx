import React from 'react';
import { AboutUsImage, AboutUsImageMb, AboutusImageMd, Grey } from '@/assets';
import Image from 'next/image';
import { Section } from '@/components/shared';
import { ISectionProps, sections } from '@/static/content/sections';

const AboutUs = () => {
  const sectionData = sections.aboutUs as ISectionProps;
  return (
    <Section {...sectionData}>
      <div className='flex overflow-hidden flex-col md:flex-row items-center justify-center rounded-lg relative bg-white z-50 mb-[100px] md:mb-[220px] mt-4 w-full shadow-2xl drop-shadow-2xl'>
        <div className='h-full  cxl:h-full cxl:block xl:w-[770px] hidden lg:hidden'>
          <Image
            src={AboutUsImage}
            alt='about-us'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='h-full md:h-[650px] cxl:hidden xl:w-[770px] hidden lg:block'>
          <Image
            src={AboutusImageMd}
            alt='about-us'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='w-full h-full block md:hidden'>
          <Image
            src={AboutUsImageMb}
            alt='about-us'
            className='w-[584px] object-cover'
          />
        </div>
        <Image
          src={Grey}
          alt='bg-image'
          className='absolute height-[200%] lg:height-[100%] bottom-0 z-[-10] xl:right-0'
        />
        <div className='p-5 flex items-start justify-start flex-col w-[90%] w-full'>
          <h2 className='uppercase md:tracking-tight text-4xl lg:text-[72px] leading-[60px] font-bold text-[#1A1A1A] mb-1'>
            Your brand, your assets
          </h2>
          <p className='uppercase text-[#AAABAD] text-3xl md:mt-3 lg:text-[40px] font-bold'>
            any game, any platform, any medium
          </p>
          <p className='text-[1A1A1A] md:mt-3 lg:text-[18px] font-bold'>
            We are creating the first true massive multiplayer agnostic
            transmedia platform.
          </p>
          <p className='text-[1A1A1A] md:mt-3 lg:text-[18px] font-bold'>
            Destruction Labz is an entertainment ecosystem centered around
            immersive, transmedia IP. By creating a bridge to onboard users, we
            are creating an ecosystem that allows users to seamlessly Interact
            with fan favorite IPs using a combination of cutting edge
            technology, gaming, and franchise opportunities such as
            merchandising and fan driven competition across gaming ecosystems.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
