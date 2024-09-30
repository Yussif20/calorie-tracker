import { useContext } from 'react';
import CalorieRecord from './CalorieRecord';
import styles from './RecordList.module.css';
import { AppContext } from '../../AppContext';
import { Link } from 'react-router-dom';

const RecordList = (props) => {
  const { totalCalories, setTotalCalories } = useContext(AppContext);

  const resultElement = props.records?.length ? (
    <ul className={styles['record-list']}>
      {props.records.map((record) => {
        return record.calories >= 0 ? (
          <li className={styles['list-item']} key={record.id}>
            <Link to={`${record.id}`}>
              <CalorieRecord
                id={record.id}
                date={record.date}
                meal={record.meal}
                content={record.content}
                calories={record.calories}
                addCalories={setTotalCalories}
              />
            </Link>
          </li>
        ) : null;
      })}
    </ul>
  ) : (
    <p className={styles.empty}>No records found for this date</p>
  );
  return (
    <>
      {resultElement}
      <p className={styles.total}>Total Calories: {totalCalories}</p>
    </>
  );
};

export default RecordList;
