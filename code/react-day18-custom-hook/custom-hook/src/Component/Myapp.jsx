import React from 'react'
import Mycustomhook from './Mycustomhook'
const Myapp = () => {

    const {thecolor, changeColor,changeColor1 } = Mycustomhook();
   

  return (
    <>
    

    <h1 style={{color:thecolor.Mycustomhook()}}>This is the custom hook created component</h1>
    
<button onClick={()=> {thecolor.changeColor()}}>changeColor</button>
<button onClick={()=> {thecolor.changeColor1()}}>perivious color</button>
    </>
  )
}

export default Myapp

// import React from 'react'
// import Mycustomhook from './Mycustomhook'

// const Myapp = () => {
//   const { color, changeColor, changeColor1 } = Mycustomhook(); 

//   return (
//     <>
//       <h1 style={{ color: color }}>
//         This is the custom hook created component
//       </h1>

//       <button onClick={changeColor}>Change to Green</button>
//       <button onClick={changeColor1}>Change to Red</button>
//     </>
//   )
// }

// export default Myapp;
