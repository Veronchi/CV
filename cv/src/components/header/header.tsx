import { FC } from 'react';
import { DayNight, NavTabs } from '..';
import pdf from '@/assets/img/CV-Veranika-Miadvedzeva.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './header.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <NavTabs />

      <div className="header__btns">
        <a href={pdf} className="pdf" target="_blank" rel="noopener noreferrer">
          <PictureAsPdfIcon />
        </a>
        <DayNight />
      </div>
    </header>
  );
};
