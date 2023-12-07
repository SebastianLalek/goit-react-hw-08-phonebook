import css from './LogIn.module.css';

export default function LogIn() {
  return (
    <section className={css.section}>
      <h2>Log in</h2>
      <form className={css.form} onSubmit={'addNewContact'}>
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
