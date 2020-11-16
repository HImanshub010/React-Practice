import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteEntry = (id) =>{
    let newPeople = people.filter((person) => person.id !==id)
    setPeople(newPeople)

  }
  return(
    <React.Fragment>
      {
        people.map((person) => {
            const {id, name} = person;
            return (
              <div key = {id} className='list'>
              <h2>{name}</h2>
              <button type='button' className='btn' onClick={() => deleteEntry(id)}>
                Delete 
              </button>
            </div>
              )
        })
      }
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Delete All
      </button>
    </React.Fragment>
  )
};

export default UseStateArray;
