import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
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
      { label: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { label: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
      { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { label: 'PHP', icon: SiPhp, color: '#777BB4' },
      { label: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { label: 'Git', icon: SiGit, color: '#F05032' },
      { label: 'GitHub', icon: SiGithub, color: '#E5E7EB' },
      { label: 'REST API', icon: TbApi, color: '#22D3EE' },
      { label: 'WordPress', icon: SiWordpress, color: '#21759B' },
    ],
  },
];
