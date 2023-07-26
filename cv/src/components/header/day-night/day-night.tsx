import { FC, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './day-night.scss';

const DARK_CLASS = 'dark';

export const DayNight: FC = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setIsDarkMode(prefersDark);
    }
  );

  const [isDarkMode, setIsDarkMode] = useState(systemPrefersDark);

  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
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
