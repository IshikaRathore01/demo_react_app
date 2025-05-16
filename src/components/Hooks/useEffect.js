import React from "react";
import {useEffect} from 'react';


function UseEffect(){
  const[count, setCount] = React.useState(0);
  console.log(count);
 
  useEffect(() => {
    setTimeout(() => {
      setCount( count + 1);
    }, 1000);
  }, [count]);

  return <h1>I've rendered {count} times!</h1>;
}

export default UseEffect;