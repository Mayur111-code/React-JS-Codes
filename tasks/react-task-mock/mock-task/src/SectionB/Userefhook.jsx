// Write syntax of useRef with an initial value of null.
import React from 'react'
import { useRef } from 'react'

const Userefhook = () => {
   const myRef = useRef(null);
  return (
    <div>
<h1>{myRef.current}</h1>


    </div>
  )
}

export default Userefhook