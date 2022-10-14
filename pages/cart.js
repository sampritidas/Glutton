import Head from "next/head";
import { useContext } from "react";
import CartContext from "../comps/CartComponent";
import Items from "../comps/Items";
import styles from "../styles/Cart.module.css"


const Cart = () => {
  const Cartctx = useContext(CartContext);
  function calculateTotal (price, item){
    return price += item.price;
  }
   
  const totalPrice = Cartctx.cartItems.reduce(calculateTotal, 0);

  return ( 
    <>
    <Head>
      <title>Glutton | Cart </title>
      <meta name="keywords" content="glutton" />
    </Head>
      {Cartctx.totalItems > 0 ?
       <div>
         <p className={styles.price}>Total price : ₹ {totalPrice}</p>
         <Items items={Cartctx.cartItems}/>
       </div>
       :
       <div className={styles.cartContent}>
          <p>*** No items there ***</p>
        <p>*** Go, Grab your favorite food ***</p>
       </div>
      }
    </>
   );
}
 
export default Cart;