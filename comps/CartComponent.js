import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems : [],
  totalItems : 0,
  addItems : (item) => {},
  removeItems : (itemID) => {},
  isItemInCart : (itemId) => {}
})

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemsHandler(item) {
    setCartItems((prevCartState) => {
      return prevCartState.concat(item);
    })
  }

  function removeItemsHandler(itemId) {
    setCartItems((prevCartState) => {
      return prevCartState.filter(item => item.id !== itemId)
    })
  }

  function isItemInCartHandler(itemId) {
    return cartItems.some(item => item.id === itemId);
  }

  const context = {
    cartItems : cartItems,
    totalItems : cartItems.length,
    addItems: addItemsHandler,
    removeItems : removeItemsHandler,
    isItemInCart : isItemInCartHandler
  }

  return ( 
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
   );
}
 
export default CartContext;