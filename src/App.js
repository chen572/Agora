import React from 'react';
import Market from './components/Market'
import './App.css';
import { observer } from 'mobx-react';

const App = observer((props) => {

  return (
    <div className="App">
      <Market />
    </div>
  );
})

export default App;
