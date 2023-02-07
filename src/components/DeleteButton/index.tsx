import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Trash } from '../../assets/trash';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton({ ...props }: Props) {
  return (
    <button className={styles['delete-button']} {...props}>
      <Trash />
    </button>
  );
}
