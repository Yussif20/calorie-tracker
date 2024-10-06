import RecordList from './RecordList';
import styles from './ListingSection.module.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';

const ListingSection = () => {
  const { currentDate, setCurrentDate, records } = useContext(AppContext);
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
      <Link className={styles['track-btn']} to="create">
        Track Food
      </Link>
      <RecordList records={records.filter(dateFilter)} />
    </>
  );
};

export default ListingSection;
