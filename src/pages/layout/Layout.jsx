import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink className={css.link} to="/contacts">
            Home
          </NavLink>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log in
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
