import AuthNav from 'components/authNav/AuthNav';
import Navigation from 'components/navigation/Navigation';
import UserMenu from 'components/userMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';

import css from './Header.module.css';

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
