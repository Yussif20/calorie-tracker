import styles from './StyledRecordCell.module.css';
const StyledRecordCell = (props) => {
  return <li className={styles['styled-record-cell']}>{props.children}</li>;
};

export default StyledRecordCell;
