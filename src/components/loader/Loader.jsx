import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <InfinitySpin width="300" color="rgb(104, 104, 255)" />
    </div>
  );
}
