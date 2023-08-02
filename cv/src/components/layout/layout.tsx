import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Loader } from '..';

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
