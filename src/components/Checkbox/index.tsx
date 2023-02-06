import styles from './styles.module.css';

export function Checkbox() {
  return (
    <label className={styles['checkbox-container']}>
      <input type="checkbox" />
      <div className={styles.checkmark}></div>
    </label>
  );
}
