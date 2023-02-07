import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

interface Props {
  done?: boolean;
  onRemoveTask: () => void;
  onToggleTask: () => void;
  text: string;
}

export function Task({
  done = false,
  onRemoveTask,
  onToggleTask,
  text
}: Props) {
  return (
    <div className={`${styles.task} ${done ? styles['task-done'] : ''}`}>
      <Checkbox checked={done} onChange={onToggleTask} />
      <span>{text}</span>
      <DeleteButton onClick={onRemoveTask}  />
    </div>
  );
}
