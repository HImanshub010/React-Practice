import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams()
  const [name, setName] = useState('default NAme')
  useEffect(() => {
    const newPerson = data.find((person) => person.id ===parseInt(id))
    setName(newPerson.name)
  }, [])
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people'className='bnt'>Back to People</Link>
    </div>
  );
};

export default Person;
