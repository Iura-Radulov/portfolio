import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiStripe,
  SiGit,
  SiGithub,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandReactNative, TbApi } from 'react-icons/tb';

export const skillGroups = [
  {
    title: 'Languages & Markup',
    skills: [
      { label: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { label: 'CSS', icon: SiCss, color: '#1572B6' },
      { label: 'SCSS', icon: SiSass, color: '#CC6699' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { label: 'React', icon: SiReact, color: '#61DAFB' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#E5E7EB' },
      { label: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { label: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
      { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { label: 'PHP', icon: SiPhp, color: '#777BB4' },
      { label: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { label: 'Python', icon: SiPython, color: '#3776AB' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { label: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { label: 'Prisma', icon: SiPrisma, color: '#E5E7EB' },
      { label: 'Redis', icon: SiRedis, color: '#FF4438' },
      { label: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { label: 'REST API', icon: TbApi, color: '#22D3EE' },
    ],
  },
  {
    title: 'Tools & Integrations',
    skills: [
      { label: 'Stripe', icon: SiStripe, color: '#635BFF' },
      { label: 'Docker', icon: SiDocker, color: '#2496ED' },
      { label: 'Git', icon: SiGit, color: '#F05032' },
      { label: 'GitHub', icon: SiGithub, color: '#E5E7EB' },
      { label: 'WordPress', icon: SiWordpress, color: '#21759B' },
    ],
  },
];
