import React from 'react';

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () =>{
    let title = 'Hello World'
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type= 'button' className='btn' onClick = {handleClick}>
      Click Here
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
