import { createStore } from 'redux';
import { MyState, MyAction } from './interface';


  
  function reducer(state: MyState = initialState, action: MyAction){
  
    switch (action.type){
      case 'UP':
        return {...state, value: state.value + 1}
      case 'DOWN':
        return {...state, value: state.value - 1}
      default :
      return state;
    }
  }
  
  const initialState: MyState = {value:0}
  
  const store=createStore(reducer);

  export default store;