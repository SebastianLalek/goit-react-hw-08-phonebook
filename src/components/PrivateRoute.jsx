import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
