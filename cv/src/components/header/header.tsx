import { FC } from 'react';
import { DayNight, NavTabs } from '..';
import './header.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <NavTabs />
      <DayNight />
    </header>
  );
};
