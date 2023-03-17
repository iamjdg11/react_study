import React from 'react';
import './App.css';
import Counter from './Counter';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
