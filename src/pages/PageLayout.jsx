import { Outlet } from 'react-router-dom';
import SideNav from '../components/common/SideNav';
import styles from './PageLayout.module.css';

export const PageLayout = () => {
  return (
    <main className={styles['main-layout']}>
      <SideNav />
      <div className={styles['page-content']}>
        <Outlet />
      </div>
    </main>
  );
};
