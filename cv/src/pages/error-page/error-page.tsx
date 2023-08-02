import { FC } from 'react';
import notFound from '@/assets/img/not-found.png';
import { Link } from 'react-router-dom';
import { Paths } from '@/utils/constants';
import './error-page.scss';

const ErrorPage: FC = () => {
  return (
    <section className="error">
      <img src={notFound} alt="not found" />
      <div className="error__content">
        <h1 className="error__title">404</h1>
        <h3 className="error__subtitle">Not Found</h3>
      </div>
      <Link className="error__btn" to={Paths.MAIN} replace>
        back to home
      </Link>
    </section>
  );
};

export default ErrorPage;
