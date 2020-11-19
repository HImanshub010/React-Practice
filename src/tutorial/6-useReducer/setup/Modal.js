import React, { useEffect } from 'react';

const Modal = ({modelContent, closeModel}) => {
  setTimeout(() => {
    closeModel()
  }, 3000);
  
  return <div className='model'>
    <p>{modelContent}</p>
  </div>;
};

export default Modal;
