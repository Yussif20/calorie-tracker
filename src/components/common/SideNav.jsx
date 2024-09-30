import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <h1>Calorie Tracker</h1>
      <Link to="/">Home</Link>
      <Link to="/tracker">Tracker</Link>
    </aside>
  );
};

export default SideNav;
