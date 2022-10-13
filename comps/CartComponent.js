import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems : [],
  totalItems : 0,
  addItems : (itemMeetup) => {},
  removeItems : (itemID) => {},
  isItemInCart : (itemId) => {}
})

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemsHandler(itemMeetup) {
    setCartItems((prevCartState) => {
      return prevCartState.concat(itemMeetup);
    })
  }

  function removeItemsHandler(meetupId) {
    setCartItems((prevCartState) => {
      return prevCartState.filter(meetup => meetup.id !== meetupId)
    })
  }

  function isItemInCartHandler(meetupId) {
    return cartItems.some(meetup => meetup.id === meetupId);
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