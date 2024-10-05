import { useContext } from 'react';
import ListingSection from '../components/calorieRecordSection/ListingSection';
import styles from './TrackPage.module.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

export const TrackPage = () => {
  const { records } = useContext(AppContext);

  return (
    <main className={styles.tracker}>
      {records && <ListingSection allRecords={records} />}
      <Link className={styles['modal-btn']} to="create">
        Track Food
      </Link>
    </main>
  );
};
