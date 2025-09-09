import React from 'react'
import { useState } from 'react'


const Customhook = () => {

    const[count,setCount] = useState(100);

    const add = () =>{
        setCount(count+100);
    }

    const sum = () =>[
        setCount(count-100)
    ]

    return{
        add,count,sum
    } 
  
}

export default Customhook