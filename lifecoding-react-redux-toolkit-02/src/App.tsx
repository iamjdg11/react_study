import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from './Store';

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
