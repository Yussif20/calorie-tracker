import styles from './CalorieRecordDate.module.css';
import StyledRecordCell from '../common/StyledRecordCell';

const CalorieRecordDate = (props) => {
  function formatDate(date) {
    const d = new Date(date);
    const options = { month: 'long' }; // 'long' will give the full month name
    const monthName = d.toLocaleString('en-US', options);

    return {
      day: d.getDate(), // returns the day of the month (1-31)
      month: monthName, // returns the full month name
      year: d.getFullYear(), // returns the year (e.g., 2024)
    };
  }

  return (
    <StyledRecordCell>
      <div className={styles['record-date-month']}>
        {formatDate(props.date).month}
      </div>
      <div className={styles['record-date-day']}>
        {formatDate(props.date).day}
      </div>
      <div className={styles['record-date-year']}>
        {formatDate(props.date).year}
      </div>
    </StyledRecordCell>
  );
};

export default CalorieRecordDate;
