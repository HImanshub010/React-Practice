import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [error, setError] = useState(false)

  
  return <>
  <button type='but-ton' class='btn' onClick ={()=> setError(!error)}>Toggle status</button>
<h2>{error || 'No Error'}</h2>
{error ? (<p>Error Occured</p>): (<p>No Error</p>)}
  </>;
};

export default ShortCircuit;
