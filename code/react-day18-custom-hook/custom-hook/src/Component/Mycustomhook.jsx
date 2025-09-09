import React, { useState } from 'react'

const Mycustomhook = () => {

    const[color, setColor] = useState('red');

const changeColor = () =>{

    setColor('green')

}

const changeColor1 = () =>{
    setColor('red')
}



  return{
    changeColor,color,changeColor1
  }
}


export default Mycustomhook