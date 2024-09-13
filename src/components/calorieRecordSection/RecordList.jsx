import CalorieRecord from './CalorieRecord';
import './RecordList.css';

const RecordList = (props) => {
  return (
    <ul className="record-list">
      {props.records.map((record) => {
        return (
          <li key={record.id}>
            <CalorieRecord
              date={record.date}
              meal={record.meal}
              content={record.content}
              calories={record.calories}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RecordList;
