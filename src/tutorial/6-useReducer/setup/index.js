import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload]
    console.log(newPeople)
    return{
      ...state,
      people: newPeople,
      isModelOpen: true,
      modelContent: 'NEW ITEM ADDED'
    }
  }
  if (action.type === 'CLOSE_MODEL'){
    return {
      ...state,
      isModelOpen: false
    }
  }
  if (action.type === 'NO_ITEM_FOUND'){
  return {
    ...state,
    isModelOpen: true,
    modelContent: 'Empty Value Found'
    }
  }

  if(action.type === 'REMOVE_ITEM'){
    const newPeople = state.people.filter((person) => person.id !== action.payload)
    return{
      ...state,
      people:newPeople
    }
  }
  throw new Error('No ACTION FOUND FOR REDUCER')
}

const defaultState = {
  people : [],
  isModelOpen : false,
  modelContnet: ''
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
     dispatch({type:'ADD_ITEM', payload: {id: new Date().getTime().toString(), name}})
     setName('')
    }else {
      dispatch({type: 'NO_ITEM_FOUND'})
  }
}

const closeModel = () =>{
  dispatch({type:'CLOSE_MODEL'})
}
  return <>
  {state.isModelOpen && <Modal 
  modelContent={state.modelContent}
  closeModel={closeModel}
  />
  }
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
      <button type='submit'>Add People</button>
    </form>
    {
      state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick = {()=> dispatch({type:'REMOVE_ITEM', payload: person.id})}> Remove </button>
          </div>
        )
      })
    }
  </>;
};

export default Index