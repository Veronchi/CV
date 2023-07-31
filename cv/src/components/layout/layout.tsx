import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Loader } from '../loader/lader';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
