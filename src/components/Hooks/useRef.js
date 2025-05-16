import React, {useRef} from 'react';

function UseRef(){

  const inputRef = useRef();
  const btnClick = () => {
    console.log(inputRef);
    inputRef.current.style.background = 'red';
  }
  return(
    <>
    <input type="text" ref={inputRef}/>
    <button onClick={btnClick}>Focus Input</button>
    </>
  )
}

export default UseRef;