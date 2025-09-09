import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

  const [name, setName] = useState("mayur");
  const [color, setColor] = useState('tomato');

  const updateState = ()=>{
    setName("Mayur borse");
  }

  const [count , setCount] = useState(0)

  const  updateCount = () =>{
setCount(count+1)
  }

  const[BG,setBG] = useState('red')

const updateBG = () =>{
  setBG('yellow')
}

const [TextColor, setTextColor] = useState('white');

const  updateTextColor = () =>{
  setTextColor('black')
}

  return (
    <div>

      <h1 style={{color: color}}>Hello learn usestate hook</h1>

      <h2>your name is {name}</h2>


<button onClick={()=> updateState()}>Update State</button>
<button onClick={()=> setColor('maroon')}>Update Color</button>


<hr />


<h1>this is the basic <mark> { count } </mark> </h1>


<button onClick={()=> updateCount()}>Update Count</button>

<hr />

<button onClick={()=> setCount( count -1)}>Reduced Count</button>


<h2 style={{backgroundColor:BG , color:TextColor}}>learning hooks in react useState and useEffect </h2>

<button onClick={()=> updateBG()}>Update bg </button>

<button onClick={()=> updateTextColor()}>Change color</button>

    </div>
  )
}

export default App