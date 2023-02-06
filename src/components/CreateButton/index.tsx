import styles from './styles.module.css'
import plus from '../../assets/plus.svg'

export function CreateButton () {
  return (
    <button className={styles.button}>
      Criar
      <img src={plus} alt="plus" />
    </button>
  )
}