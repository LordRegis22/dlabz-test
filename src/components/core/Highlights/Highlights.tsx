import React from 'react';
import { Section, Slider } from '@/components/shared';
import { highlightsContent } from '@/static/content/highlights';
import { ISectionProps, sections } from '@/static/content/sections';

const Highlights = () => {
  const sectionData = sections.highlights as ISectionProps;
  return (
    <Section {...sectionData}>
      <div className='mb-[100px] md:mb-[220px] mt-4 w-full'>
        <Slider slides={highlightsContent} discover={true} />
      </div>
    </Section>
  );
};

export default Highlights;
