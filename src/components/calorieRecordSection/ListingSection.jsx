import RecordList from './RecordList';
import styles from './ListingSection.module.css';
import { useEffect, useState } from 'react';

const ListingSection = (props) => {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredRecords, setFilteredRecords] = useState([]);
  const currentDateChangeHandler = (e) => {
    setCurrentDate(new Date(e.target.value));
  };
  const dateFilter = (record) => {
    const recordDate = new Date(record.date);
    return (
      recordDate.getDate() === currentDate.getDate() &&
      recordDate.getMonth() === currentDate.getMonth() &&
      recordDate.getFullYear() === currentDate.getFullYear()
    );
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setFilteredRecords(allRecords.filter(dateFilter));
    }, 5000);
    return () => {
      // useEffect cleanUp function : to clear the previous called data if no more needed
      clearTimeout(timeOutId);
    };
  }, [currentDate]);

  return (
    <>
      <label className={styles['listing-picker-label']} htmlFor="listingDate">
        Select Date
      </label>
      <input
        id="listingDate"
        className={styles['listing-picker-input']}
        type="date"
        value={currentDate.toISOString().split('T')[0]}
        onChange={currentDateChangeHandler}
      />
      <RecordList records={filteredRecords} />
    </>
  );
};

export default ListingSection;
