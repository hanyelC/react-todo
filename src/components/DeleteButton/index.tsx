import styles from './styles.module.css'
import { Trash } from '../../assets/trash'

export function DeleteButton() {
  return (
    <button className={styles['delete-button']}>
      <Trash />
    </button>
  )
}
