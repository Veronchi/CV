import { ReactElement } from 'react';
import songbird from '@/assets/img/songbird.png';
import trello from '@/assets/img/trello.png';
import onlineZoo from '@/assets/img/online-zoo.png';
import puzzle from '@/assets/img/puzzle.png';
import zoo from '@/assets/img/zoo.png';
import rickAndMorty from '@/assets/img/rickMorty.png';
import graphiql from '@/assets/img/graphiql.png';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { ReactIcon } from '@/assets/icons/react-icon';

interface IconTypeProps {
  fontSize: string;
  color: string;
}

type IconType = ReactElement<IconTypeProps>;

export type Project = {
  id: string;
  name: string;
  src: string;
  desc: string;
  deploy: string;
  repo?: string;
  backend?: string;
  icon?: IconType;
  iconColor?: string;
};

export const projects: Project[] = [
  {
    id: '87FklCGrSyqGRC1Ycgeh3YqNCbPYCF',
    name: 'GraphiQL',
    src: graphiql,
    desc: 'React, TypeScript, React Router, Redux Toolkit, Firebase, Material UI, React Hook Form, Zod, Eslint, Prettier, Vite, yarn',
    deploy: 'https://graphiql-app-rss.netlify.app/',
    repo: 'https://github.com/MarinaKovel/graphiql-app/tree/develop',
    icon: <ReactIcon />,
    iconColor: '#00dbfc',
  },
  {
    id: 'AHKNTIHSNOOVDWc2BOEdLTnxFbAsYz',
    name: 'Rick and Morty',
    src: rickAndMorty,
    desc: 'React, TypeScript, React Router, Redux Toolkit, RTK Query, React Hook Form, React Testing Library, SSR, Cypress, Eslint, Vite',
    deploy: 'https://effervescent-seahorse-d339e3.netlify.app/home',
    repo: 'https://github.com/Veronchi/Veronchi-React2023Q1/tree/React.Redux',
    icon: <ReactIcon />,
    iconColor: '#00dbfc',
  },
  {
    id: 'XoLwRQWDT5awhQ2OJe2SYtmXCaS0Jt',
    name: 'Trello-clone',
    src: trello,
    desc: 'React, TypeScript, React Router, Redux Toolkit, Axios, PostgreSQL, NodeJS, Express, Sequelize, SCSS, React Bootstrap, Eslint',
    deploy: 'https://trello-clone-appl.netlify.app/welcome',
    repo: 'https://github.com/Veronchi/Rs-Clone/tree/develop',
    backend: 'https://github.com/Veronchi/trello-clone-api/tree/develop',
    icon: <ReactIcon />,
    iconColor: '#00dbfc',
  },
  {
    id: '8iZF1YbQjHNRXhIhv7yShdyxDKWlGa',
    name: 'Songbird',
    src: songbird,
    desc: 'HTML, CSS, JavaScript, Webpack',
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/songbird/',
    icon: <JavascriptIcon />,
    iconColor: '#f9d509',
  },
  {
    id: 'BmXV0Ae7CGOdprahKxihrzmsvJ4xMu',
    name: 'Puzzle',
    src: puzzle,
    desc: 'JavaScript, CSS, Webpack',
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/rss-gem-puzzle/',
    icon: <JavascriptIcon />,
    iconColor: '#f9d509',
  },
  {
    id: 'JPJ9zIBg9e999MDseMXpom9ZhrL8Xa',
    name: 'Online zoo',
    src: onlineZoo,
    desc: 'HTML, SCSS, JavaScript, Webpack, Swiper, Figma',
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/online-zoo/index.html',
    icon: <JavascriptIcon />,
    iconColor: '#f9d509',
  },
  {
    id: 'f2aHDDmb1eMlD648LwrvFX8GKQjmjX',
    name: 'Zoo project',
    src: zoo,
    desc: 'HTML, CSS, JavaScript, Webpack, Figma',
    deploy: 'https://veronchi.github.io/zoo-project/dist/',
    repo: 'https://github.com/Veronchi/zoo-project',
    icon: <HtmlIcon />,
    iconColor: '#e54c20',
  },
];
