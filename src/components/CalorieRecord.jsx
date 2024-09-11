import "./CalorieRecord.css"
const CalorieRecord = (props) =>{
    function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
    return(
        <ul className="record">
            <li>{formatDate(props.date)}</li>
            <li>{props.meal}</li>
            <li>{props.content}</li>
            <li className="record-calories">{props.calories}</li>
        </ul>
    )
}
export default CalorieRecord;