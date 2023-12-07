import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import css from './LogIn.module.css';

export default function LogIn() {
  const dispatch = useDispatch();

  const loginUser = e => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(login(user));
  };
  return (
    <section className={css.section}>
      <h2>Log in</h2>
      <form className={css.form} onSubmit={loginUser}>
        <label className={css.label}>
          <p>Email</p>
          <input
            type="email"
            name="email"
            title="Please, enter your email"
            required
          />
        </label>
        <label className={css.label}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            title="Enter your password"
            required
          />
        </label>
        <button className={css.button}>Log in</button>
      </form>
    </section>
  );
}
