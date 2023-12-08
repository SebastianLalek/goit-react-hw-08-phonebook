import { Route, Routes } from 'react-router-dom';

import Register from 'pages/register/Register';
import LogIn from 'pages/login/LogIn';
import Contacts from 'pages/contacts/Contacts';
import { Layout } from 'pages/layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
