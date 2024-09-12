import './CalorieRecordDate.css'
import StyledRecordCell from '../common/StyledRecordCell';

const CalorieRecordDate = (props) => {
      function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
  return (
    <StyledRecordCell>{formatDate(props.date)}</StyledRecordCell>
  )
}

export default CalorieRecordDate