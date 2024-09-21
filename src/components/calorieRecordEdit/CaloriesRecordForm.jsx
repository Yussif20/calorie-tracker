import { useEffect, useState } from 'react';
import styles from './CaloriesRecordForm.module.css';

const CaloriesRecordForm = (props) => {
  const DEFAULT_VALUE = {
    date: '',
    meal: 'Breakfast',
    content: '',
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      mealRecord.date && mealRecord.content && mealRecord.calories
    );
  }, [mealRecord]);

  const onDateChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };
  const onMealChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };
  const onContentChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };
  const onCaloriesChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);
  };
  let calorieInputStyle = {};
  if (mealRecord.calories < 0) {
    calorieInputStyle = {
      border: '1px solid red',
      color: 'red',
      backgroundColor: 'white',
    };
  }
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          required
          value={mealRecord.date}
          type="date"
          name="date"
          id="date"
          onChange={onDateChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="meal">Meal:</label>
        <select
          required
          value={mealRecord.meal}
          name="meal"
          id="meal"
          onChange={onMealChangeHandler}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Launch">Launch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          required
          value={mealRecord.content}
          type="text"
          name="content"
          id="content"
          onChange={onContentChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          required
          value={mealRecord.calories}
          type="number"
          name="=calories"
          id="calories"
          onChange={onCaloriesChangeHandler}
          style={calorieInputStyle}
        />
      </div>
      <div className={styles.footer}>
        <button disabled={!isFormValid}>Add Record</button>
        <button type="button" onClick={props.onClose}>
          Close
        </button>
      </div>
    </form>
  );
};

export default CaloriesRecordForm;
