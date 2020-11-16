import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    let response = await fetch(url)
    let users = await response.json()
    setUsers(users)
  }
  
  useEffect(()=>{
    fetchUsers()
  },[])
    return (
      <React.Fragment>
        <h3>Github Users</h3>
        <ul className='users'>
      {users.map((user) => {
        const {login, id, avatar_url,html_url} = user
        return (
        <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
          <p>{login}</p>
          <a href={html_url}>Profile</a>
          </div>
        </li>
    
        )
      })}

      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
