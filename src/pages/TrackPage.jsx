import { useEffect, useContext } from 'react';
import ListingSection from '../components/calorieRecordSection/ListingSection';
import styles from './TrackPage.module.css';
import { AppContext } from '../AppContext';

const LOCAL_STORAGE_KEY = 'storageRecords';

export const TrackPage = () => {
  const { records, setRecords } = useContext(AppContext);

  const saveToDB = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  };

  const loadRecord = () => {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageRecords) {
      setRecords(
        JSON.parse(storageRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
          calories: Number(record.calories),
        }))
      );
    } else {
      setRecords([]);
    }
  };

  useEffect(() => {
    if (records === null || records.length === 0) {
      loadRecord();
    }
  }, []);

  useEffect(() => {
    if (records && records.length > 0) {
      saveToDB();
    }
  }, [records]);

  return (
    <main className={styles.tracker}>
      {records && <ListingSection allRecords={records} />}
    </main>
  );
};
