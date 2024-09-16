import styles from './CalorieRecord.module.css';
import CalorieRecordDate from './CalorieRecordDate';
import StyledRecordCell from '../common/StyledRecordCell';

const CalorieRecord = (props) => {
  return (
    <ul className={styles.record}>
      <CalorieRecordDate date={props.date} />
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <StyledRecordCell className="record-calories">
        {props.calories}
      </StyledRecordCell>
    </ul>
  );
};
export default CalorieRecord;
