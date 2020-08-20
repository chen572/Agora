import React from 'react';
import { observer, inject } from 'mobx-react';

const Item = inject('inventory')(
  observer((props) => {
    const { item, inventory } = props;

    function onDoubleClickHandler() {
      const newPrice = prompt('What is the new price?');
      inventory.changePrice(item.name, newPrice);
    }

    return (
      <li>
        <span onDoubleClick={onDoubleClickHandler}>
          {`${item.quantity} ${item.name} available at $${item.price} per item`}
        </span>
        <button onClick={() => inventory.buyItem(item.name)}>Buy Item</button>
      </li>
    );
  })
);

export default Item;
