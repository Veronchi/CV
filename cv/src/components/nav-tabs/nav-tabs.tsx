import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Paths } from '@/utils/constants';
import './nav-tabs.scss';

const { MAIN, PROJECTS } = Paths;

export const NavTabs: FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isProjects = path.includes('/portfolio');

  return (
    <nav className="nav">
      <Link className={`nav__tab ${isProjects ? '' : 'nav__tab_active'}`} to={MAIN}>
        About Me
      </Link>
      <Link className={`nav__tab ${isProjects ? 'nav__tab_active' : ''}`} to={PROJECTS}>
        Portfolio
      </Link>
    </nav>
  );
};
