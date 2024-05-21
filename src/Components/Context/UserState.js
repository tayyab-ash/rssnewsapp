import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

function UserState(props) {
  return (
    <UserContext.Provider value={{}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState