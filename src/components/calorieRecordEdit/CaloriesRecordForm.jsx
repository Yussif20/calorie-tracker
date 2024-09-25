import { useEffect, useState, useReducer } from 'react';
import styles from './CaloriesRecordForm.module.css';

const RESET = 'RESET';
const UPDATE_FIELD = 'UPDATE_FIELD';

const DEFAULT_VALUE = {
  date: { value: new Date().toISOString().split('T')[0], valid: true },
  meal: { value: 'Breakfast', valid: true },
  content: { value: '', valid: false },
  calories: { value: 0, valid: false },
};

const formReducer = (state, action) => {
  const { type, key, value } = action;

  switch (type) {
    case RESET:
      return DEFAULT_VALUE;

    case UPDATE_FIELD: {
      let valid;

      if (key === 'content') {
        valid =
          (value === 'sport' && state.calories.value < 0) ||
          (value !== 'sport' && state.calories.value >= 0);

        return {
          ...state,
          content: { value, valid: !!value },
          calories: { ...state.calories, valid },
        };
      }

      if (key === 'calories') {
        valid =
          (state.content.value === 'sport' && value < 0) ||
          (state.content.value !== 'sport' && value >= 0);

        return {
          ...state,
          calories: { value, valid },
        };
      }

      return {
        ...state,
        [key]: { value, valid: !!value },
      };
    }

    default:
      return state;
  }
};

const CaloriesRecordForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, dispatchFn] = useReducer(formReducer, DEFAULT_VALUE);

  const { date, content, calories } = formState;

  useEffect(() => {
    setIsFormValid(date.valid && content.valid && calories.valid);
  }, [date.valid, content.valid, calories.valid]);

  const handleFieldChange = (key) => (event) => {
    dispatchFn({
      type: UPDATE_FIELD,
      key,
      value: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      Object.entries(formState).map(([key, { value }]) => [key, value])
    );

    props.onFormSubmit(formData);
    dispatchFn({ type: RESET });
  };

  const onCancelHandler = () => {
    dispatchFn({ type: RESET });
    props.onClose();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          value={formState.date.value}
          type="date"
          id="date"
          onChange={handleFieldChange('date')}
        />
      </div>
      <div>
        <label htmlFor="meal">Meal:</label>
        <select
          value={formState.meal.value}
          id="meal"
          onChange={handleFieldChange('meal')}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          value={formState.content.value}
          type="text"
          id="content"
          onChange={handleFieldChange('content')}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          value={formState.calories.value}
          type="number"
          id="calories"
          onChange={handleFieldChange('calories')}
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
