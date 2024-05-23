import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

function UserState({children}) {
  
  

  return (
    <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserState