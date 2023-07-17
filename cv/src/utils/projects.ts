import { Project } from './types';
import songbird from '@/assets/img/songbird.png';
import trello from '@/assets/img/trello.png';
import onlineZoo from '@/assets/img/online-zoo.png';
import puzzle from '@/assets/img/puzzle.png';
import tours from '@/assets/img/tours.png';
import zoo from '@/assets/img/zoo.png';
import rickAndMorty from '@/assets/img/rickMorty.png';
import graphiql from '@/assets/img/graphiql.png';
import colors from '@/assets/img/colors.png';

export const projects: Project[] = [
  {
    id: '87FklCGrSyqGRC1Ycgeh3YqNCbPYCF',
    name: 'GraphiQL',
    src: graphiql,
    deploy: 'https://graphiql-app-rss.netlify.app/',
  },
  {
    id: 'XoLwRQWDT5awhQ2OJe2SYtmXCaS0Jt',
    name: 'Trello-clone',
    src: trello,
    deploy: 'https://trello-clone-appl.netlify.app/welcome',
    repo: 'https://github.com/Veronchi/trello-clone-api'
  },
  {
    id: '8iZF1YbQjHNRXhIhv7yShdyxDKWlGa',
    name: 'Songbird',
    src: songbird,
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/songbird/',
  },
  {
    id: 'JPJ9zIBg9e999MDseMXpom9ZhrL8Xa',
    name: 'Online zoo',
    src: onlineZoo,
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/online-zoo/index.html',
  },
  {
    id: 'AHKNTIHSNOOVDWc2BOEdLTnxFbAsYz',
    name: 'Rick and Morty',
    src: rickAndMorty,
    deploy: 'https://effervescent-seahorse-d339e3.netlify.app/home',
    repo: 'https://github.com/Veronchi/Veronchi-React2023Q1/tree/React.Redux',
  },
  {
    id: 'f2aHDDmb1eMlD648LwrvFX8GKQjmjX',
    name: 'Zoo project',
    src: zoo,
    deploy: 'https://veronchi.github.io/tours/build/',
    repo: 'https://github.com/Veronchi/zoo-project',
  },
  {
    id: 'BmXV0Ae7CGOdprahKxihrzmsvJ4xMu',
    name: 'Puzzle',
    src: puzzle,
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/rss-gem-puzzle/',
  },
  {
    id: 'uJmDrNj0L8MazMrYXvwYnN5CTS2E7A',
    name: 'Tours',
    src: tours,
    deploy: 'https://veronchi.github.io/tours/build/',
  },
  {
    id: 'Q73P5Xdp0BYqr2kVUVvyrpeByqeqU4',
    name: 'Color Generator',
    src: colors,
    deploy: 'https://veronchi.github.io/color-generator/build/',
    repo: 'https://github.com/Veronchi/color-generator',
  },
]