import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <h1>Calorie Tracker</h1>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/tracker"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        Tracker
      </NavLink>
    </aside>
  );
};

export default SideNav;
