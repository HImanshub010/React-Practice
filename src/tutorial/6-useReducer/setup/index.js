import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModel, setShowModel] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      setShowModel(true)
      setPeople((people) => [...people, {id: new Date().toString, name}])
      setName('')
    }else {
      setShowModel(true)
    }
      setTimeout(() => {
        setShowModel(false)
      }, 3000);
  }

  return <>
  {showModel && <Modal/>}
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
      <button type='submit'>Add People</button>
    </form>
    {
      people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })
    }
  </>
  ;
};

export default Index
 