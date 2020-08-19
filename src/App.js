import React from 'react';
import Market from './components/Market'
import './App.css';
import { observer } from 'mobx-react';

const App = observer((props) => {
  const { store } = props

  return (
    <div className="App">
      <Market store={store} />
    </div>
  );
})

export default App;
