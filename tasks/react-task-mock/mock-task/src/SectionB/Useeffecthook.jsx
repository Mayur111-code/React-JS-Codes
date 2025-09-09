// Write syntax of useEffect that runs only once

import React from 'react'
import { useEffect } from 'react'
const Useeffecthook = () => {

    useEffect (()=>{
        console.log("mayur");
    },[])

  return (
    <div>Useeffecthook</div>
  )
}

export default Useeffecthook