import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  const handler = () => {
    navigate('/goit-react-hw-08-phonebook', { replace: true });
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>404</h2>
        <p className={css.text}>Page not found</p>
        <button className={css.button} type="button" onClick={handler}>
          Return to main page
        </button>
      </div>
    </section>
  );
}
