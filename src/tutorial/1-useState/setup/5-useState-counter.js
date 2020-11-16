import React, { useState } from 'react';

const UseStateCounter = () => {

  const [count, setCount] = useState(0)
  const reset = () => {
    setCount((preValue) => 0)
  }

  const complexCounter = () => {
    setTimeout(()=>{
      setCount((preValue)=> preValue+1)
    },2000)
  }
  return(
    <React.Fragment>
      <h2>{count}</h2>
      <button className='btn' type= 'button' onClick={() => setCount(count-1)}>Decrese</button>
      <button className='btn' type= 'button' onClick={reset}>Reset</button>
      <button className='btn' type= 'button' onClick={() => setCount(count+1)}>Increase</button>

      <h2>{count}</h2>
      <button className='btn' type='button' onClick={complexCounter}>Delay Incrementor</button>
    </React.Fragment>
    );
};

export default UseStateCounter;
