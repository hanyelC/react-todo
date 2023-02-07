import { ButtonHTMLAttributes } from 'react';
import plus from '../../assets/plus.svg';
import styles from './styles.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton({ ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      Criar
      <img src={plus} alt="plus" />
    </button>
  );
}
