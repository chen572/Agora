import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { inventory } from './stores/InventoryStore'
import { Provider } from 'mobx-react'

inventory.addItem('test')
inventory.addItem('tes3')
inventory.addItem('tes5')

const stores = { inventory }

ReactDOM.render(
  <Provider {...stores}>
    <App store={inventory} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
