import { FC } from 'react';
import { Contacts } from '..';
import cvImg from '@/assets/img/cv-img.png';
import './intro.scss';

export const Intro: FC = () => {
  return (
    <section className="intro">
      <div className="avatar">
        <img className="avatar__img" src={cvImg} alt="cv photo" />
      </div>
      <div className="intro__content">
        <h4 className="intro__subtitle">Frontend Developer</h4>
        <h1 className="intro__title">Veranika Miadvedzeva</h1>
        <p className="intro__text">
          Software Engineer with practical experience in frontend. Solid knowledge of HTML,
          CSS/SCSS, JavaScript, TypeScript, React, Redux Toolkit. Experience working with NodeJS,
          Express, PostgreSQL, Sequelize, Material UI. Using tools such as Git, Webpack, Postman,
          Figma. Interpersonal communication and collaboration skills.
        </p>

        <Contacts />
      </div>
    </section>
  );
};
