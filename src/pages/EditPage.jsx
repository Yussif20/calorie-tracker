import { useEffect, useState, useReducer, useContext, useRef } from 'react';
import styles from './EditPage.module.css';
import { AppContext } from '../AppContext';
import FormInput from '../components/common/FormInput';
import { Link, useNavigate } from 'react-router-dom';

const RESET = 'RESET';
const UPDATE_FIELD = 'UPDATE_FIELD';

const DEFAULT_VALUE = {
  date: { value: new Date(), valid: true },
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

export const EditPage = () => {
  const { setRecords, totalCalories, currentDate, setCurrentDate } =
    useContext(AppContext);
  const navigateHandler = useNavigate();

  const contentRef = useRef();
  const caloriesRef = useRef();

  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, dispatchFn] = useReducer(
    formReducer,
    DEFAULT_VALUE,
    (initialState) => ({
      ...initialState,
      date: {
        value: currentDate.toISOString().split('T')[0],
        valid: !!currentDate,
      },
    })
  );

  const { date, content, calories } = formState;

  useEffect(() => {
    if (!content.valid) {
      contentRef.current.focus();
    }
    setIsFormValid(date.valid && content.valid && calories.valid);
  }, [date.valid, content.valid, calories.valid]);

  const handleFieldChange = (key) => (event) => {
    dispatchFn({
      type: UPDATE_FIELD,
      key,
      value: event.target.value,
    });
  };

  const formSubmitHandler = (record) => {
    setRecords((prevRecords) => [
      ...prevRecords,
      { ...record, id: crypto.randomUUID() },
    ]);
  };

  const currentDateChangeHandler = (e) => {
    setCurrentDate(new Date(e.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      Object.entries(formState).map(([key, { value }]) => [key, value])
    );
    formSubmitHandler(formData);
    dispatchFn({ type: RESET });
    navigateHandler('..');
  };
  const onCancelHandler = () => {
    navigateHandler('..');
    // dispatchFn({ type: RESET });
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <p className={styles.warning}>
        You already consumed : {totalCalories} calories
      </p>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          value={currentDate.toISOString().split('T')[0]}
          type="date"
          id="date"
          onChange={currentDateChangeHandler}
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
      <FormInput
        label="Content"
        ref={contentRef}
        value={formState.content.value}
        type="text"
        id="content"
        onChange={handleFieldChange('content')}
      />
      <FormInput
        label="Calories"
        ref={caloriesRef}
        value={formState.calories.value}
        type="number"
        id="calories"
        onChange={handleFieldChange('calories')}
      />
      <div className={styles.footer}>
        <button
          className={styles['footer-btn']}
          type="submit"
          disabled={!isFormValid}
        >
          Add Record
        </button>

        <Link className={styles['footer-btn']} to="..">
          <button
            onClick={onCancelHandler}
            style={{ backgroundColor: 'inherit', color: 'inherit' }}
          >
            Close
          </button>
        </Link>
      </div>
    </form>
  );
};
