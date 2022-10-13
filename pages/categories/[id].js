import styles from '../../styles/Categories.module.css'
import { DishCategories } from '../../db/data.json'
import Items from '../Items';

export const getStaticPaths = () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = DishCategories;

  const paths = data.map(category => {
    return {
      params: { id: category.id.toString() }
    }
  })
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = DishCategories;
  const item = data.filter(dish => dish.id.toString() === id);
  return {
    props: { items: item[0].items }
  }
}

const ItemDetails = ({ items }) => {
  return (
    <div className={styles.items}>
      <Items items={items}/>
    </div>
  );
}

export default ItemDetails;