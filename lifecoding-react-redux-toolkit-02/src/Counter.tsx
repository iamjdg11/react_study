
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice, RootState } from './Store';

export default function Counter() {
    const value = useSelector((state: RootState)=>{
      return state.counter.value;
    });
  
    const dispatch = useDispatch();
  
    return (
      <>
      <button onClick={(e)=>{
        dispatch(counterSlice.actions.up(2))
      }}>+</button>
      <button onClick={()=>{
        dispatch(counterSlice.actions.down(2))
      }}>-</button>
      <button onClick={()=>{
        dispatch(counterSlice.actions.set(0))
      }}>Set</button>
      {value}
      </>
    )
  }