import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import { useNavigateAfterCountDown } from '../utils/hooks/index.js';

const HOME_LINK = '/';

export const ErrorPage = () => {
  const counter = useNavigateAfterCountDown(10, HOME_LINK);

  return (
    <div className={styles['error-container']}>
      <h1> Something Went Wrong :(</h1>
      <p>Redirecting to home page in {counter}</p>
      <p>
        Or click <Link to="/">Home Page</Link> to go back
      </p>
    </div>
  );
};
