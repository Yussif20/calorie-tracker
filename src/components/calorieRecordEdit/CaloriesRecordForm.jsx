import { useState } from "react"
import "./CaloriesRecordForm.css"

const CaloriesRecordForm = () => {
  const [mealRecord,setMealRecord]=useState({});
  const onDateChangeHandler = (event)=>{
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    })
  }
  const onMealChangeHandler = (event)=>{
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    })
  }
  const onContentChangeHandler = (event)=>{
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    })
  }
  const onCaloriesChangeHandler = (event)=>{
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    })
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(mealRecord)
  }
  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" onChange={onDateChangeHandler}/>
        <label htmlFor="meal">Meal:</label>
        <select name="meal" id="meal" onChange={onMealChangeHandler}>
            <option value="Breakfast">Breakfast</option>
            <option value="Launch">Launch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
        </select>
        <label htmlFor="content">Content:</label>
        <input type="text" name="content" id="content" onChange={onContentChangeHandler}/>
        <label htmlFor="calories">Calories:</label>
        <input type="number" name="=calories" id="calories" onChange={onCaloriesChangeHandler}/>
        <div className="footer">
            <button >Add Record</button>
        </div>
    </form>
  )
}

export default CaloriesRecordForm