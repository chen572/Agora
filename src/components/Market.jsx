import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item';

const Market = observer((props) => {
  const { store } = props;

  function onKeyDownHandler(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      store.addItem(e.target.value);
      e.target.value = '';
    }
  }

  return (
    <div>
      <input type='text' onKeyDown={onKeyDownHandler} />
      {store.inventory.map((i) => (
        <Item key={i.name} item={i} store={store} />
      ))}
    </div>
  );
});

export default Market;
