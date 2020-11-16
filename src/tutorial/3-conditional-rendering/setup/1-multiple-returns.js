import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user,setUser] = useState('Default USer')

  useEffect(() =>{
    fetch(url).then((response)=>{
      if( response.status >= 200 && response.status<=299){
        return response.json()
        
      }else{
        setIsLoading(false);
          setIsError(true);
        throw new Error(response.message)
      }

    }).then((user)=> {
      setIsLoading(false)
      setUser(user.login)
    }).catch((error) => {
      setIsError(true)
    })

  }, [])

  if (isLoading) {
    return(
      <div>
      <h2>Loading...</h2>
      </div>
    ) 
  }
  if(isError){
    return(
      <div>
        <h2>Error <div className=""></div></h2>
      </div>
      )
  }
  return(
    <div>
      <h2>user: {user}</h2>
    </div>
  )
};

export default MultipleReturns;
