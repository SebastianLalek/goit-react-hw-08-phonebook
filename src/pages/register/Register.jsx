import { useDispatch } from 'react-redux';
import css from './Register.module.css';
import { register } from 'redux/auth/authOperations';

export default function Register() {
  const dispatch = useDispatch();

  const addNewUser = e => {
    e.preventDefault();
    console.log(e.target.password.value);

    const newUser = {
      name: e.target.email.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(register(newUser));
  };
  return (
    <section className={css.section}>
      <h2>Register</h2>
      <form className={css.form} onSubmit={addNewUser}>
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
        <button className={css.button}>Register</button>
      </form>
    </section>
  );
}
