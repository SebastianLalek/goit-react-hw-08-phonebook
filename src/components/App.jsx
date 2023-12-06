import { Route, Routes } from 'react-router-dom';

import Register from 'pages/register/Register';
import LogIn from 'pages/login/LogIn';
import Contacts from 'pages/contacts/Contacts';
import { Layout } from 'pages/layout/Layout';

export const App = () => {
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
