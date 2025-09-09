import React, { useContext } from 'react'
import Createcontext from './Createcontext'
import { userId,userName } from './Createcontext'

const Consumer = () => {
    const userid = useContext(userId);
    const username = useContext(userName);
  return (
    <div>

<h1>{userid}</h1>
<h1>{username}</h1>

    </div>
  )
}

export default Consumer