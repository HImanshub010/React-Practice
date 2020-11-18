import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refInputFiled = useRef(null)
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(refInputFiled.current.value)
  }

  useEffect(() => {
    console.log('refInputFiled.current', refInputFiled.current)
    refInputFiled.current.focus();
  })

  return <>
  <form className='form' onSubmit = {handleOnSubmit}>
    <input type="text" ref = {refInputFiled}/>
    <button type="submit">Submit</button>
  </form>
  </>;
};

export default UseRefBasics;
