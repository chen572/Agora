import React from 'react';
import { observer, inject } from 'mobx-react';
import Item from './Item';

const Market = inject('inventory')(
  observer((props) => {
    const { inventory } = props;

    function onKeyDownHandler(e) {
      if (e.key === 'Enter' && e.target.value !== '') {
        inventory.addItem(e.target.value);
        e.target.value = '';
      }
    }

    return (
      <div>
        <input type='text' onKeyDown={onKeyDownHandler} />
        {inventory.inventory.map((i) => (
          <Item key={i.name} item={i} />
        ))}
      </div>
    );
  })
);

export default Market;
