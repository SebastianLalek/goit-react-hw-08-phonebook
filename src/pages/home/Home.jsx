import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.section}>
      <div className={css.hero}>
        <h1 className={css.title}>PHONEBOOK</h1>
        <p className={css.subtitle}>Build your own contact list</p>
      </div>
    </section>
  );
}
