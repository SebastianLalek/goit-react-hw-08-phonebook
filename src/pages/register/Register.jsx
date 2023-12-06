import css from './Register.module.css';

export default function Register() {
  return (
    <section className={css.section}>
      <h2>Register</h2>
      <form className={css.form} onSubmit={addNewContact}>
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
