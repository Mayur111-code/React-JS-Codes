import React from 'react'
import Customhook from './Customhook'

const App = () => {

  const data = Customhook();

  const data2 = Customhook();



  return (
    <div>
      

       <h1 style={{color: data.color}}>Custom Hook ( own hook )</h1>

      <h1>count is {data.count}</h1>

<button onClick={() => {data.BalenceHandler()}}>Update Balance</button>
<button onClick={() => {data.WithdrowHandler()}}>Update Balance</button>

<button onClick={()=> {data.UpdateColor()}}>update-color</button>
    </div>
  )
}

export default App