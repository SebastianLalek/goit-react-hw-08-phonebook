import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
