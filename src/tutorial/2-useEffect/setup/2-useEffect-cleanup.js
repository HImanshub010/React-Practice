import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  console.log('Redered Component')
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    console.log('useeffect')
    window.addEventListener('resize', () => setSize(window.innerWidth))  
    return () => {
      console.log('removed handler')
      window.removeEventListener('resize', ()=>{})
    }
  },[])

  return (
    <React.Fragment>
      <h2>window</h2>
      <h1>{size}</h1>
    </React.Fragment>
  )
};

export default UseEffectCleanup;
