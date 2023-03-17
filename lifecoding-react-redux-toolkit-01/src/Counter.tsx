import { useSelector, useDispatch } from "react-redux";
import { MyState, MyAction } from './interface';

export default function Counter(){

    const value = useSelector((state:MyState)=>state.value);
    const dispatch = useDispatch()
    return(
      <div>
        <button onClick={()=>dispatch({type:"UP"})}>+</button>
        <button onClick={()=>dispatch({type:"DOWN"})}>-</button>
        &nbsp;&nbsp;{value}
      </div>
    );
}
  