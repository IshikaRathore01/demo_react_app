import React, {useMemo,useState} from 'react';

function UseMemo(){
   const[number, setNumber] = useState(0);

   const[counter, setCounter] = useState(0);

  function cubeNum(num){
    console.log('calculation done')
    return Math.pow(num, 3);
  }

//   const result = cubeNum(number);
  const result = useMemo(() => cubeNum(number), [number]);
  return(<>
  <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
  <h1>Cube of number: {result}</h1>
  <p>counter: {counter}</p>
  <button onClick={()=>{setCounter(counter+1)}}>click</button>
  </>)
}

export default UseMemo;
