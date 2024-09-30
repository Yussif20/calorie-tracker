import { useEffect, useState } from 'react';
import ListingSection from '../components/calorieRecordSection/ListingSection';
import RecordFormModal from '../components/calorieRecordEdit/RecordFormModal';
import styles from './TrackPage.module.css';
import AppContextProvider from '../AppContext';

const LOCAL_STORAGE_KEY = 'storageRecords';

export const TrackPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [records, setRecords] = useState();
  const formSubmitHandler = (record) => {
    setRecords((prevRecords) => [
      ...prevRecords,
      { ...record, id: crypto.randomUUID() },
    ]);
  };

  const saveToDB = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records)); //Because it accept only string
  };
  const loadRecord = () => {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageRecords !== null && storageRecords !== 'undefined') {
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
    if (!records) {
      loadRecord();
    } else {
      saveToDB();
    }
  }, [records]);

  return (
    <main className={styles.tracker}>
      <AppContextProvider>
        <RecordFormModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          handleFormSubmit={formSubmitHandler}
        />
        {records && <ListingSection allRecords={records} />}
      </AppContextProvider>
      <button className={styles['modal-btn']} onClick={openModal}>
        Track Food
      </button>
    </main>
  );
};
