import React from 'react';
import { Section, Slider } from '@/components/shared';
import { teamMembers } from '@/static/content/team';
import { ISectionProps, sections } from '@/static/content/sections';

const Team = () => {
  const sectionData = sections.team as ISectionProps;
  return (
    <Section {...sectionData}>
      <div className='mb-[100px] md:mb-[220px] mt-4 w-full'>
        <Slider slides={teamMembers} />
      </div>
    </Section>
  );
};

export default Team;
