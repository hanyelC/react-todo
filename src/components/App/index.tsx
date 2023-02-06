import { CreateButton } from '../CreateButton';
import { Header } from '../Header';
import { Input } from '../Input';
import styles from './styles.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        <div className={styles['new-task']}>
          <Input /> <CreateButton />
        </div>
      </main>
    </div>
  );
}
