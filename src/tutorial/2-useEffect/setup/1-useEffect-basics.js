import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('effect')
    if (value>=1){
      document.title=`New Message (${value})`

    }
  }, [value])

  const handleClick = () => {
    setValue((preValue) => preValue+1)
  }
  return(
    <React.Fragment>
      <h2>{value}</h2>
      <button className='btn' type='button' onClick={handleClick}>
      Click Here
      </button>
    </React.Fragment>);
};

export default UseEffectBasics;
