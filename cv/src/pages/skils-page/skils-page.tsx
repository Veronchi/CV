import { FC } from 'react';
import { Languages, Technologies, Tools } from '@/utils/constants';
import './skills-page.scss';

export const SkillsPage: FC = () => {
  return (
    <section className="skills">
      <div className="skills__subsection">
        <h3 className="skills__title">Languages</h3>
        <ul className="skills__list">
          {Object.values(Languages).map((item) => {
            return (
              <li className="skills__item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="skills__subsection">
        <h3 className="skills__title">Technologies</h3>
        <ul className="skills__list">
          {Object.values(Technologies).map((item) => {
            return (
              <li className="skills__item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="skills__subsection">
        <h3 className="skills__title">Tools</h3>
        <ul className="skills__list">
          {Object.values(Tools).map((item) => {
            return (
              <li className="skills__item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
