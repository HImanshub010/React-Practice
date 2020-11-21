import React, { useState } from 'react';
import {data} from './../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const removePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  const [people, setPeople] = useState(data)

  return <section>
    < List people={people} removePeople= {removePeople}/>
  </section>
}
  const List = ({people, removePeople}) =>{
    return <>
    <div>
      {people.map((person) => {
        return <SinglePerson key= {person.id} {...person} removePeople= {removePeople}/>
      })}
    </div>
    </>
  }

  const SinglePerson = ({id, name, removePeople}) => {
    return(
      <div className='list'>
        <p>{name}</p>
        <button onClick = {() => removePeople(id)}>Remove</button>
      </div>
    )
  }

export default PropDrilling;
