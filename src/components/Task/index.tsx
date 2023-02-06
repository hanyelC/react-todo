import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

interface Props {
  done?: boolean;
}

export function Task({ done = false }: Props) {
  return (
    <div className={`${styles.task} ${done ? styles['task-done'] : ''}`}>
      <Checkbox />
      <span>Task</span>
      <DeleteButton />
    </div>
  );
}
