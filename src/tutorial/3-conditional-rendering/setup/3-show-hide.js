import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show ,setShow] = useState(true)
  return (
    <>
    <button className='btn' onClick = {() => setShow(!show)}>Toggle Here</button>
    {show && <Item/>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => setSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return(() => {
      window.removeEventListener('resize', checkSize)
    })
  })
  return (
    <>
    <h2>Window</h2>
  <h1>Size: {size} px</h1>
    </>
  )
}

export default ShowHide;
