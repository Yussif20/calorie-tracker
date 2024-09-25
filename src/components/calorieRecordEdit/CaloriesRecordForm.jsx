import { useEffect, useState, useReducer } from 'react';
import styles from './CaloriesRecordForm.module.css';

const DEFAULT_VALUE = {
  date: { value: new Date().toISOString().split('T')[0], valid: true },
  meal: { value: 'Breakfast', valid: true },
  content: { value: '', valid: false },
  calories: { value: 0, valid: false },
};

const formReducer = (state, action) => {
  const { type, key, value } = action;
  if (type === 'RESET') return DEFAULT_VALUE;

  let valid;
  switch (key) {
    case 'content':
      valid =
        (value === 'sport' && state.calories.value < 0) ||
        (value !== 'sport' && state.calories.value >= 0);
      return {
        ...state,
        content: { value, valid: !!value },
        calories: { ...state.calories, valid },
      };

    case 'calories':
      valid =
        (state.content.value === 'sport' && value < 0) ||
        (state.content.value !== 'sport' && value >= 0);
      return {
        ...state,
        calories: { value, valid },
      };

    default:
      return {
        ...state,
        [key]: { value, valid: !!value },
      };
  }
};

const CaloriesRecordForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [formState, dispatchFn] = useReducer(formReducer, DEFAULT_VALUE);

  const {
    date: { valid: isDateValid },
    content: { valid: isContentValid },
    calories: { valid: isCaloriesValid },
  } = formState;

  useEffect(() => {
    setIsFormValid(isDateValid && isContentValid && isCaloriesValid);
  }, [isDateValid, isContentValid, isCaloriesValid]);

  const onDateChangeHandler = (event) => {
    dispatchFn({
      type: 'UPDATE_FIELD',
      key: 'date',
      value: event.target.value,
    });
  };
  const onMealChangeHandler = (event) => {
    dispatchFn({
      type: 'UPDATE_FIELD',
      key: 'meal',
      value: event.target.value,
    });
  };
  const onContentChangeHandler = (event) => {
    dispatchFn({
      type: 'UPDATE_FIELD',
      key: 'content',
      value: event.target.value,
    });
  };
  const onCaloriesChangeHandler = (event) => {
    dispatchFn({
      type: 'UPDATE_FIELD',
      key: 'calories',
      value: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(
      Object.keys(formState).reduce((agg, cur) => {
        agg[cur] = formState[cur].value;
        return agg;
      }, {})
    );
    dispatchFn({
      type: 'RESET',
    });
  };
  const onCancelHandler = () => {
    dispatchFn({
      type: 'RESET',
    });
    props.onClose();
  };
  let calorieInputStyle = {};

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          value={formState.date.value}
          type="date"
          name="date"
          id="date"
          onChange={onDateChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="meal">Meal:</label>
        <select
          value={formState.meal.value}
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
          value={formState.content.value}
          type="text"
          name="content"
          id="content"
          onChange={onContentChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          value={formState.calories.value}
          type="number"
          name="=calories"
          id="calories"
          onChange={onCaloriesChangeHandler}
          style={calorieInputStyle}
        />
      </div>
      <div className={styles.footer}>
        <button disabled={!isFormValid}>Add Record</button>
        <button type="button" onClick={onCancelHandler}>
          Close
        </button>
      </div>
    </form>
  );
};

export default CaloriesRecordForm;
