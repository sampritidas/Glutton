import Item from "./Item";

const Items = ({items}) => {
  return ( 
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <Item item={item} key={item.id}/>
      ))}
    </div>
   );
}

export default Items;
