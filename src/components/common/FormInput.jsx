import { forwardRef } from 'react';
import styles from './FormInput.module.css';

const FormInput = forwardRef((props, ref) => {
  const { id, label, type, value, onChange } = props;
  return (
    <div className={styles['input-container']}>
      <label className={styles['form-label']} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles['form-input']}
        ref={ref}
        value={value}
        type={type}
        id={id}
        onChange={onChange}
      />
    </div>
  );
});

FormInput.displayName = 'FormInput';
export default FormInput;
