import { Project } from './types';
import songbird from '@/assets/img/songbird.png';
import trello from '@/assets/img/trello.png';

export const projects: Project[] = [
  {
    id: 'XoLwRQWDT5awhQ2OJe2SYtmXCaS0Jt',
    name: 'Trello-clone',
    src: trello,
    desc: 'project management tool',
    deploy: 'https://trello-clone-appl.netlify.app/welcome',
    repo: 'https://github.com/Veronchi/trello-clone-api'
  },
  {
    id: '8iZF1YbQjHNRXhIhv7yShdyxDKWlGa',
    name: 'Songbird',
    src: songbird,
    desc: 'quiz',
    deploy: 'https://rolling-scopes-school.github.io/veronchi-JSFE2022Q3/songbird/',
    repo: 'https://github.com/rolling-scopes-school/veronchi-JSFE2022Q3/tree/songbird'
  },
]