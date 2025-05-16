import React, {act, useReducer} from 'react';

function UseReducer(){
  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      case "input":
        return {count: action.payload}
      default:
        return state;
    }
}
  const[state,dispatch]=useReducer(reducer,{count: 0})
  // const[count,setCount]=useState(0)
  return(
    <>
    <button onClick={()=>dispatch({type: 'decrease'})}>-1</button>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type: 'increase'})}>+1</button>
    <br/>
    <input value={state.count}
    onChange={(e)=>dispatch({type: 'input',payload:Number(e.target.value)})}
    type="number"/>
    </>
  )}


export default UseReducer;

