import styles from './CalorieRecord.module.css';
import CalorieRecordDate from './CalorieRecordDate';
import StyledRecordCell from '../common/StyledRecordCell';
import { useEffect } from 'react';

const CalorieRecord = (props) => {
  useEffect(() => {
    props.addCalories((prevTotal) => prevTotal + props.calories); // when component mount
    return () => {
      props.addCalories((prevTotal) => prevTotal - props.calories);
    }; // CLEAN UP FUNCTION (when unmount)
  }, []);
  return (
    <ul className={styles.record}>
      <CalorieRecordDate date={props.date} />
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <StyledRecordCell className={styles['record-calories']}>
        {props.calories}
      </StyledRecordCell>
    </ul>
  );
};
export default CalorieRecord;
