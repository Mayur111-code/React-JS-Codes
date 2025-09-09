// import React from 'react'
// import { useReducer } from 'react'


// const UseReducer = () => {

//     const reducer = (state, action) =>{
//         switch (action.type) {
//         case "INC":return {count:state.count +1}
//         case "DEC":return {count:state.count -1}
            
//             break;
    
//         default:
//             break;
//     }

//     }

//     const [state, dispatch]=useReducer(reducer, {count:0})

//     // const[state,dispatch]=useReducer(reducer, initialstate)

    

//   return (
//     <div>
// <hr />
// <hr />

// <h1>{state.count} </h1>

// <button onClick={()=>dispatch({type:"INC"})}>increment</button>
// <button onClick={()=> dispatch ({type:"DEC"})}>decrement</button>

//     </div>
//   )
// }

// export default UseReducer

import React from 'react'
import { useReducer } from 'react'



const UseReducer = () => {
    const reducer = (state,action)=>{

        switch (action.type) {
            case "ADD":return{count:state.count +2}
            case "SUM":return{count:state.count -2}
                
                break;
        
            default:
                break;
        }

    }


    const[state,dispatch]=useReducer(reducer,{count : 0});

    // const[state ,dispatch] =useReducer(rducer,i value)

    // consr reducer=(state,action)=>{

    // }

  return (
    <div>

<h1>{state.count}</h1>

<button onClick={()=>dispatch ({type:"ADD"})}>add</button>
<button onClick={()=>dispatch ({type:"SUM"})}>sum</button>


    </div>
  )
}

export default UseReducer