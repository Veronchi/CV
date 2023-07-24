import { FC } from 'react';
import cvImg from '@/assets/img/cv-img.png';
import { Contact } from '../contact/contact';
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
          Software Engineer with practical experience in frontend. Solid knowledge of
          HTML/CSS(SASS), JavaScript, TypeScript, React. Experience working with NodeJS, Express,
          Sequelize, BEM, Material-UI. Use tools such as Git, Webpack, Figma. Interpersonal
          communication and collaboration skills.
        </p>

        <Contact />
      </div>
    </section>
  );
};
