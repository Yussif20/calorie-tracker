import "./CaloriesRecordForm.css"

const CaloriesRecordForm = () => {
  return (
    <form>
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date"/>
        <label htmlFor="meal">Meal:</label>
        <select name="meal" id="meal">
            <option value="Breakfast">Breakfast</option>
            <option value="Launch">Launch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
        </select>
        <label htmlFor="content">Content:</label>
        <input type="text" name="content" id="content"/>
        <label htmlFor="calories">Calories:</label>
        <input type="number" name="=calories" id="=calories"/>
        <div className="footer">
            <button>Add Record</button>
        </div>
    </form>
  )
}

export default CaloriesRecordForm