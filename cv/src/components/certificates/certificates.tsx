import { FC } from 'react';
import stage1_2 from '@/assets/img/stage1-2.png';
import stage3 from '../../assets/img/stage3.png';
import './certificates.scss';

export const Certificates: FC = () => {
  return (
    <section className="certificates">
      <h2 className="title">Certificates</h2>
      <div className="certificates__content">
        <img className="certificates__img" src={stage1_2} alt="certificate" />
        <img className="certificates__img" src={stage3} alt="certificate" />
      </div>
    </section>
  );
};
