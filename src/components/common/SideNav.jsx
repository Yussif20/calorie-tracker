import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = () => {
  return (
    <aside className={styles.aside}>
      <h1>Calorie Tracker</h1>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        end={true} // make sure it is active only when its matches the full link not just a part
      >
        Home
      </NavLink>
      <NavLink
        to="/track"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        Tracker
      </NavLink>
    </aside>
  );
};

export default SideNav;
