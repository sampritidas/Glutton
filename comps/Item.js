import Image from "next/image";
import styles from '../styles/Categories.module.css';
import { useContext } from 'react';
import CartContext from "./CartComponent";


const Item = ({item, addItem}) => {
  const cartCtx = useContext(CartContext);
  const isItemInCart = cartCtx.isItemInCart(item.id);

  function toggleAddStatusHandler() {
    if(isItemInCart) {
      cartCtx.removeItems(item.id);
    } else {
      cartCtx.addItems(item);
    }
  }

  return (
    <div className={styles.item} key={item.id} >
      <Image src={`/images/${item.image}.png`} alt="image" width={100} height={100} />

    <div className={styles.itemDetails}>
        <p>{item.name}</p>
        <p>{`₹${item.price}`}</p>
      </div>

      <div className={styles.add}>
        <button onClick={toggleAddStatusHandler}>
          {isItemInCart ? 'remove' : 'add'}
        </button>
      </div>

    </div>
  );
}

export default Item;