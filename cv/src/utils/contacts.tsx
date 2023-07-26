import { ReactElement } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export type Contact = {
  id: string;
  link?: string;
  text: string;
  icon: ReactElement;
  classOption?: string;
};

export const contacts: Contact[] = [
  {
    id: '1',
    link: 'https://github.com/Veronchi',
    text: 'Veronchi',
    icon: <GitHubIcon />,
  },
  {
    id: '2',
    link: 'https://www.linkedin.com/in/veranika-miadvedzeva-71a032280/',
    text: 'Veranika M',
    icon: <LinkedInIcon />,
    classOption: 'linkedIn',
  },
  {
    id: '3',
    text: 'zhigunova1995@gmail.com',
    icon: <MailOutlineIcon />,
    classOption: 'mail',
  },
];
