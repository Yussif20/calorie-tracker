import { useState } from 'react';
import ListingSection from './components/calorieRecordSection/ListingSection';
import RecordFormModal from './components/calorieRecordEdit/RecordFormModal';
import styles from './App.module.css';

function App() {
  const DEFAULT_RECORDS = [
    {
      id: 1,
      date: new Date(2024, 9, 19),
      meal: 'Breakfast',
      content: 'Eggs',
      calories: '340',
    },
    {
      id: 2,
      date: new Date(2024, 8, 5),
      meal: 'Launch',
      content: 'Chicken',
      calories: '400',
    },
    {
      id: 3,
      date: new Date(2024, 8, 4),
      meal: 'Dinner',
      content: 'Cheese',
      calories: '450',
    },
    {
      id: 4,
      date: new Date(2024, 8, 6),
      meal: 'Snacks',
      content: 'Chocolate',
      calories: '500',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [records, setRecords] = useState(DEFAULT_RECORDS);
  const [nextId, setNextId] = useState(5);
  const formSubmitHandler = (record) => {
    setNextId((prevId) => prevId + 1);
    setRecords((prevRecords) => [...prevRecords, { ...record, id: nextId }]);
  };

  return (
    <div className={styles.app}>
      <RecordFormModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleFormSubmit={formSubmitHandler}
      />
      <ListingSection allRecords={records} />
      <button className={styles['modal-btn']} onClick={openModal}>
        Track Food
      </button>
    </div>
  );
}

export default App;
