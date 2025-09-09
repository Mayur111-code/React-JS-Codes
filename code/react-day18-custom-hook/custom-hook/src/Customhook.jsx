import React, { useState } from 'react'

const Customhook = () => {


    const [ count , setCount] = useState(100);

    const BalenceHandler = () =>{
        setCount(count + 100);
    } 

    const WithdrowHandler = () => {
      setCount (count -100);
    }

    const [color, setColor] = useState('red');

    const UpdateColor = () => {
      setColor ('blue')
    }
    
  return{


    BalenceHandler,count,WithdrowHandler, UpdateColor , color
  } 
  

}

export default Customhook;