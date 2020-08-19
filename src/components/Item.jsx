import React from 'react';
import { observer } from 'mobx-react';

const Item = observer((props) => {
  const { item, store } = props;

  function onDoubleClickHandler() {
    const newPrice = prompt('What is the new price?');
    store.changePrice(item.name, newPrice);
  }

  return (
    <li>
      <span onDoubleClick={onDoubleClickHandler}>
        {`${item.quantity} ${item.name} available at $${item.price} per item`}
      </span>
      <button onClick={() => store.buyItem(item.name)}>Buy Item</button>
    </li>
  );
});

export default Item;
