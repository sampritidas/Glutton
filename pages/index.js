import styles from '../styles/Home.module.css'
import Categories from './categories'

export default function Home() {
  return (
    <div className={styles.container}>
      <Categories />
    </div>
  )
}
