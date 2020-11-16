import React, { useState } from 'react';

const UseStateObject = () => {
  const personObj = {
    name : 'Himanshu Bhardwaj',
    isAvailabe: true,
    status: 'Currently learning hooks'
  }

  const [person, setPerson] = useState(personObj)

  const changeMessage = () => {
    setPerson({...person, status: 'Completed USe state Hook'})
  }

  return (
    <React.Fragment>
      <h2>{person.name}</h2>
      <h2>{person.isAvailabe}</h2> 
      <h2>{person.status}</h2>
      <button className='btn' type= 'button' onClick = {changeMessage}> Change status</button>   
    </React.Fragment>
  );
};

export default UseStateObject;
