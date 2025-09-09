import React from 'react'
import { useState } from 'react'


const Usestate = () => {

    const [count, setCount] = useState(0) ;
    const Updatecount = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> Updatecount()}> count + </button>

    </div>
  )
}

export default Usestate