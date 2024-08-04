import { Person } from '@/assets';
import { StaticImageData } from 'next/image';
import teamImages from '@/assets/team-images';

export type TeamMemberContent = {
  name: string;
  role: string;
  desc: string;
  image: StaticImageData;
  bg: string;
  link?: string;
};

const possibleTeamColors = ['#FDB845', '#72DA69', '#29B7F3', '#F96A6C'];
const getNextPossibleColor = (() => {
  let lastColorIndex: number | undefined = undefined;
  return () => {
    if (
      lastColorIndex === undefined ||
      lastColorIndex === possibleTeamColors.length - 1
    ) {
      lastColorIndex = 0;
    } else {
      lastColorIndex += 1;
    }
    return possibleTeamColors[lastColorIndex];
  };
})();

export const teamMembers: TeamMemberContent[] = [
  {
    name: 'Taylor',
    role: 'CEO/Founder',
    desc: `Growing up immersed in gaming, I witnessed firsthand the power of these digital worlds to captivate and connect people. From crafting entire universes to sharing countless hours of multiplayer with friends, gaming shaped my vision. I'm excited to bring those same feelings to life with this team.`,
    image: teamImages.Taylor,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Tyler',
    role: 'CTO/Co-founder',
    image: teamImages.Tyler,
    desc: `I’m driven by creating experiences that resonate with people. Our culture is at the heart of our brand, and we infuse it into every product. This approach allows us to build impactful solutions that sit at the intersections of art and technology.`,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Mark',
    role: 'Board member',
    image: teamImages.Mark,
    desc: `The opportunity to collaborate with such a talented and passionate team on a project with such immense potential was incredibly compelling. The company's vision aligns perfectly with how I view the future of entertainment, and I'm eager to contribute to its growth and success.`,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Mike',
    role: 'Founding Engineer',
    image: teamImages.Michael,
    desc: `I love working at at Destruction Labz as it offers a unique opportunity to contribute to the gaming space using next-gen technologies. Being part of a community of passionate gamers who love and support their community aligns perfectly with my passion for fostering growth within the competitive gaming scene.`,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Brandi',
    role: 'Public Relations',
    desc: `I'm excited to work for Destruction Labz for the opportunity to bring diverse perspectives and multi-faceted stories to a global audience in the gaming industry. I grew up playing the video game “Golden-eye 007”, so this really feels like a full circle moment. I now have the opportunity to collaborate to create an immersive gaming world where everyone can see themselves represented.`,
    image: teamImages.Brandi,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Lidia',
    role: 'Developer Relations',
    desc: `Thrilled to join Destruction Labz and lead the creation of a gaming ecosystem. It's exciting and humbling to be at the forefront of this gaming revolution. I’m eager to dive into a dynamic space, learn, experiment, and help shape the future of gaming.`,
    image: teamImages.Lidia,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Jon',
    role: 'Advisor',
    desc: `Destruction Labz is a unique blend of talent and ambition. I'm drawn to their ability to foster a creative environment where big ideas thrive. It's rare to find a place that so seamlessly combines skill, passion, and innovation. I'm excited to contribute to a team that turns concepts into reality.`,
    image: teamImages.Jon,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Tony',
    role: 'Technical Product Manger',
    desc: `I’m excited to be joining Destruction Labz as a part of the product team and leading the efforts to build a cohesive gaming ecosystem that players are thrilled about. I’m elated in the vision that Tyler and Taylor have for Destruction Labz and honored that they asked me to join the team and make it a reality.`,
    image: teamImages.Tony,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Sanjay',
    role: 'Sr. Backend Engineer',
    desc: `At Destruction Labz, I'm most excited about collaborating with talented developers to create innovative software solutions that push technological boundaries and make a tangible impact.`,
    image: teamImages.Sanjay,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Rakesh',
    role: 'Art Director',
    desc: `I'm thrilled by the creative freedom and collaborative spirit at Destruction Labz Game Studio. The opportunity to bring imaginative concepts to life and see them resonate with players around the world is what drives my passion every day.`,
    image: teamImages.Rakesh,
    bg: getNextPossibleColor(),
  },
  {
    name: 'Tomass',
    role: 'Lead Artist',
    desc: ` I enjoy the opportunities Destruction Labz offers to bring my creativity to a multitude of mediums. Combined with the company's exciting and colorful approach to gaming and competitive play I imagine a bright future ahead.`,
    image: teamImages.Tomass,
    bg: getNextPossibleColor(),
  },
];
