import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(()=>{
  if(!user){
    axios.get('/profile')
  }
  },[]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
