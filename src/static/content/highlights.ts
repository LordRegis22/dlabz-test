import { D } from '@/assets';
import { StaticImageData } from 'next/image';

export type HighlightsArticleContent = {
  name: string;
  image: StaticImageData;
  bg: string;
  link?: string;
  desc?: string;
};

export const COMING_SOON = 'COMING SOON';

const highlightsContent: HighlightsArticleContent[] = [
  {
    name: 'A new era of gaming',
    image: D,
    bg: '#FFFFFF',
    link: 'https://medium.com/@destructionlabz/afed79d13c04',
    desc: `The gaming landscape is on the cusp of a revolution. As blockchain technology disrupts traditional models, we’re witnessing a shift from a “crawling phase” to a “walking phase” for web3 gaming. One transformative aspect — asset ownership — is poised to fundamentally change the way players interact with the games and the ecosystems they love.`,
  },
];

export { highlightsContent };
