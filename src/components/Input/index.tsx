import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: Props) {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder ?? 'Adicione uma nova tarefa'}
      {...props}
    />
  );
}
