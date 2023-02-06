import styles from './styles.module.css';
import clipboard from '../../assets/clipboard.svg';

export function TasksPlaceholder() {
  return (
    <div className={styles['tasks-placeholder']}>
      <img src={clipboard} alt="clipboard" />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </div>
    </div>
  );
}
