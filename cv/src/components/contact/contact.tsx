import { FC } from 'react';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './contact.scss';

export const Contact: FC = () => {
  return (
    <div className="contact">
      <Chip
        label="Veronchi"
        icon={<GitHubIcon color="primary" />}
        component="a"
        href="https://github.com/Veronchi/CV/tree/develop"
        variant="outlined"
        clickable
        target="_blank"
        sx={{
          border: '1px solid #222222',
          color: '#222222',
          backgroundColor: 'transparent',
        }}
      />
      <Chip
        label="Veranika M"
        icon={<LinkedInIcon />}
        component="a"
        href="https://www.linkedin.com/in/veranika-miadvedzeva-71a032280/"
        variant="outlined"
        clickable
        target="_blank"
        color="secondary"
      />
      <Chip
        label="zhigunova1995@gmail.com"
        icon={<MailOutlineIcon color="primary" />}
        sx={{
          backgroundColor: '#f1f5f9',
          boxShadow: '0px 0px 5px rgba(100, 116, 139, 0.24)',
          color: '#64748b',
        }}
      />
    </div>
  );
};
