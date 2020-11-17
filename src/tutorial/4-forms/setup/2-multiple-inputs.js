import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [name, setname] = useState('');
  // const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const [person, setPerson] = useState({'name':'', 'email':'', 'age':''})

  const handleChange = (e) =>{
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prevValue) => {
      return {...prevValue, [name]:value}
    })
  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      setPeople((people) => {
        return [...people, {id: new Date().toDateString(), ...person}];
      });
      setPerson({'name':'', 'email':'', 'age':''})
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
            </div>
            <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
