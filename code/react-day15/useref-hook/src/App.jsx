import React from 'react'
import { useState } from 'react'

import { useRef } from 'react'
import Task from './Task'


const App = () => {


  const [email, setEmail] = useState('mayurborse@gmail.com')

  const data = useRef()

  const getemail = () =>{
    console.log(data.current.value)
    setEmail(data.current.value)
  }

  return (
    <div>


<label htmlFor="">Enter user email : </label>
<input type="email" name='useremail' ref={data} onChange={()=>getemail()} id='useremail' placeholder='example@gamil.com' required autoFocus/>

<h2>your email is { email }</h2>


<Task/>
    </div>
  )
}

export default App