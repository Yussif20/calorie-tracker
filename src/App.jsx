import { useEffect, useState } from 'react';
import ListingSection from './components/calorieRecordSection/ListingSection';
import RecordFormModal from './components/calorieRecordEdit/RecordFormModal';
import styles from './App.module.css';
import AppContext from './app-context';

const LOCAL_STORAGE_KEY = 'storageRecords';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [totalCalories, setTotalCalories] = useState(0);

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
    <main className={styles.app}>
      <AppContext.Provider
        value={{ currentDate, setCurrentDate, totalCalories, setTotalCalories }}
      >
        <RecordFormModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          handleFormSubmit={formSubmitHandler}
        />
        {records && <ListingSection allRecords={records} />}
      </AppContext.Provider>
      <button className={styles['modal-btn']} onClick={openModal}>
        Track Food
      </button>
    </main>
  );
}

export default App;
