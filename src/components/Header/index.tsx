import styles from './styles.module.css';
import rocket from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <img src={rocket} alt="rocket" />
        <span>
          <span className={styles.blue}>to</span>
          <span className={styles.purple}>do</span>
        </span>
      </div>
    </header>
  );
}
