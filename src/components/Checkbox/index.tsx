import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ ...props }: Props) {
  return (
    <label className={styles['checkbox-container']}>
      <input type="checkbox" {...props} />
      <div className={styles.checkmark} />
    </label>
  );
}
