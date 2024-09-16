import { useState } from 'react';
import CaloriesRecordForm from './components/calorieRecordEdit/CaloriesRecordForm';
import RecordList from './components/calorieRecordSection/RecordList';
function App() {
  const DEFAULT_RECORDS = [
    {
      id: 1,
      date: new Date(2024, 8, 6),
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
  const [records, setRecords] = useState(DEFAULT_RECORDS);
  const [nextId, setNextId] = useState(5);
  const formSubmitHandler = (record) => {
    setNextId((prevId) => prevId + 1);
    setRecords((prevRecords) => [...prevRecords, { ...record, id: nextId }]);
  };
  return (
    <>
      <CaloriesRecordForm onFormSubmit={formSubmitHandler} />
      <RecordList records={records} />
    </>
  );
}

export default App;
