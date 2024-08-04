import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { SquareIcon } from '../svgs';

type SliderPanelProps = {
  discover: boolean;
  desc?: string;
  link?: string;
  image: StaticImageData;
  name: string;
  optionalProps: any;
};
const SliderPanel = ({
  discover,
  desc,
  link,
  image,
  name,
  optionalProps,
}: SliderPanelProps) => {
  return (
    <>
      <Image
        src={image as StaticImageData}
        style={{
          objectPosition: 'top',
          height: '270px',
          width: '100%',
          aspectRatio: '286/267',
        }}
        className='rounded-t-lg'
        alt={`Image of ${name}`}
      />

      <div className='px-4'>
        <h2
          className={`pr-2 ${
            discover ? 'text-start pt-10' : 'text-center'
          } font-bold text-2xl my-2`}
        >
          {name}
        </h2>
        {optionalProps.role && (
          <p
            className={`text-[15px] flex items-center justify-center gap-2 ${
              discover ? 'text-left' : 'text-center'
            } text-black text-bold`}
          >
            <SquareIcon /> {optionalProps.role}
          </p>
        )}
      </div>

      <div
        className={`mt-1 text-[16px] tracking-wide ${
          discover ? 'text-[#52525B]' : 'text-black'
        } px-4 py-2 ${discover ? 'text-left' : 'text-center'}`}
      >
        {discover ? desc : `"${desc}"`}
      </div>
      {link && (
        <a
          href={link}
          className='text-lg font-extrabold md:mt-5 px-4 py-2 text-hyperlink'
        >
          Read More
        </a>
      )}
    </>
  );
};

export default SliderPanel;
