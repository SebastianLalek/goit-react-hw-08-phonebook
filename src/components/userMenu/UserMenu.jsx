import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.user}>{user}</p>
      <button className={css.button} type="button" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
}
