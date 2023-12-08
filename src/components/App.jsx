import { Route, Routes } from 'react-router-dom';

import { Layout } from 'pages/layout/Layout';
import Loader from './loader/Loader';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('pages/home/Home'));
const Register = lazy(() => import('pages/register/Register'));
const LogIn = lazy(() => import('pages/login/LogIn'));
const Contacts = lazy(() => import('pages/contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
