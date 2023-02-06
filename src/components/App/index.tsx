import { CreateButton } from '../CreateButton';
import { Header } from '../Header';
import { Input } from '../Input';
import { TasksPlaceholder } from '../TasksPlaceholder';
import styles from './styles.module.css';

export function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        <div className={styles['new-task']}>
          <Input /> <CreateButton />
        </div>
        <div className={styles['tasks-container']}>
          <div className={styles['tasks-header']}>
            <div>
              <span>Tarefas criadas</span>
              <span className={styles.counter}>0</span>
            </div>
            <div>
              <span>Concluídas</span>
              <span className={styles.counter}>0</span>
            </div>
          </div>
          <TasksPlaceholder />
        </div>
      </main>
    </div>
  );
}
