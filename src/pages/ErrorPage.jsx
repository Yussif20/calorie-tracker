import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const INTERVAL_TIME = 1000;
const COUNTER = 10;
const HOME_LINK = '/';

export const ErrorPage = () => {
  const [counter, setCounter] = useState(COUNTER);
  const intervalHandler = useRef();
  const NavigateToHome = useNavigate();

  useEffect(() => {
    if (counter === 0) {
      clearInterval();
      NavigateToHome(HOME_LINK);
    }
  }, [counter]);

  useEffect(() => {
    intervalHandler.current = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(intervalHandler.current);
    };
  }, []);

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
