import { FC, useEffect, useState } from 'react';
import './day-night.scss';

const DARK_CLASS = 'dark';

export const DayNight: FC = () => {
  const mode = localStorage.getItem('mode');

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  };

  useEffect(() => {
    if (mode?.includes('dark')) {
      setIsDarkMode(true);
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDarkMode]);

  return (
    <div className="wrapper">
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
          onChange={handleMode}
          checked={isDarkMode}
        />
        <div className="toggle-bg"></div>
        <div className="toggle-switch">
          <div className="toggle-switch-figure"></div>
          <div className="toggle-switch-figureAlt"></div>
        </div>
      </div>
    </div>
  );
};
