import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

import css from './Layout.module.css';
import Loader from 'components/loader/Loader';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
