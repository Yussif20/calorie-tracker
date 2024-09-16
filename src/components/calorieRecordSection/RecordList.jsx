import CalorieRecord from './CalorieRecord';
import styles from './RecordList.module.css';

const RecordList = (props) => {
  return (
    <ul className={styles['record-list']}>
      {props.records.map((record) => {
        return record.calories >= 0 ? (
          <li className={styles['list-item']} key={record.id}>
            <CalorieRecord
              date={record.date}
              meal={record.meal}
              content={record.content}
              calories={record.calories}
            />
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default RecordList;
