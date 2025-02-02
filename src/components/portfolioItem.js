import webStudioImg from '../images/Web-studio-1.png';
import IceCreamImg from '../images/ice-cream-1.png';
import filmotekaImg from '../images/Filmoteka-1.png';
import delmiraImg from '../images/Delmira-beauty-1.png';

const portfolio = [
  {
    title: 'WebStudio',
    description:
      'Website of a WebStudio company with their services and portfolio',
    technologies: ['HTML', 'SCSS', 'JS'],
    gitLink: 'https://github.com/Iura-Radulov/web-studio.git',
    link: 'https://iura-radulov.github.io/web-studio/',
    image: webStudioImg,
  },
  {
    title: 'Ice Cream',
    description:
      'Adaptive one page website of ice cream company, making in collaboration with other developers.',
    technologies: ['HTML', 'SCSS', 'JS'],
    gitLink: 'https://github.com/SerhiiOnyshchenko/team-project.git',
    link: 'https://serhiionyshchenko.github.io/team-project/',
    image: IceCreamImg,
  },
  {
    title: 'Filmoteka',
    description:
      'Website for searching of movies with authentication and two languages.',
    technologies: ['HTML', 'JS', 'REST', 'Firebase'],
    gitLink: 'https://github.com/Iura-Radulov/teamproject-filmoteka.git',
    link: 'https://iura-radulov.github.io/teamproject-filmoteka/',
    image: filmotekaImg,
  },

  {
    title: 'Searching for movies',
    description:
      'Website about movies with searching and more details about movie.',
    technologies: ['HTML', 'CSS', 'React', 'REST'],
    gitLink: 'https://github.com/Iura-Radulov/search-movies.git',
    link: 'https://iura-radulov.github.io/search-movies/ ',
    image: delmiraImg,
  },

  {
    title: 'Vianorway tours',
    description: 'Website for ordering excursions in Norway',
    technologies: ['React', 'Redux', 'Bootstrap'],
    gitLink: 'https://github.com/Iura-Radulov/bergen-gid.git',
    link: 'https://iura-radulov.github.io/bergen-gid/',
    image: delmiraImg,
  },
  {
    title: 'Petly',
    description: 'Website which helps find pets and take care about them',
    technologies: ['React', 'Redux', 'Node.js', 'Formik'],
    gitLink: 'https://github.com/Finkons/pets-project-front ',
    link: 'https://pets-project.vercel.app/',
    image: delmiraImg,
  },
  {
    title: 'Artisan',
    description:
      'Web service that helps to find performers and customers to provide services ',
    technologies: ['NextJs', 'Tailwind', 'Flowbite React'],
    gitLink: '/',
    link: 'https://artisan-pl.onrender.com',
    image: delmiraImg,
  },
  {
    title: 'Avant company',
    description:
      'Avant company website in Moldova with mini tractors specialization',
    technologies: ['Wordpress'],
    gitLink: '#',
    link: 'https://avanttecno.md/',
    image: delmiraImg,
  },
  {
    title: 'Amid-auto',
    description:
      'Amid-auto company shop website in Moldova with selling auto accessories',
    technologies: ['Laravel', 'Vue'],
    gitLink: '#',
    link: 'https://amid-auto.md/',
    image: delmiraImg,
  },
  {
    title: 'Vitra',
    description: 'E-Commerce Website with Admin Panel for company Vitra.',
    technologies: ['PHP', 'JS', 'Laravel', 'SQL'],
    gitLink: 'https://github.com/Vitra-web/vitra.md',
    link: 'https://vitra.md',
    image: delmiraImg,
  },
];

export default portfolio;
