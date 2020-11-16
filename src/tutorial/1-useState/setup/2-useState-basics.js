import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random Text')
  let handleClick = ()=> {
    if (text ==='Random Text'){
      setText('Hello World')
    }else{
      setText('Random Text')
    }
  }
  return(
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' class = 'btn' onClick={handleClick}> Click Here</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
