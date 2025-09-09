import React from 'react'

import { useLocation } from 'react-router-dom'

const Uselocation = () => {
const loc = useLocation ();

console.log(loc);




  return (
    <div>


<h1>Uselocation hook</h1>

    </div>
  )
}

export default Uselocation