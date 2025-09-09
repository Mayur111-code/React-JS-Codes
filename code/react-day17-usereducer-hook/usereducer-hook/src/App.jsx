import React, { useReducer , useState  } from 'react'

const App = () => {
  //synatx:-
  // const [state,dispatch] = useReducer(reducer,initialstate)

  const reducer = (state , action) => {
    switch (action.type){
      case 'INC':return {count:state.count + 1}
      case 'DEC':return {count:state.count - 1}
      default:return state.count


    }
  }

  const[state, dispatch] = useReducer(reducer,{count: 0})

  return (
    <div>

<h4>usereducer hook -alternative to useState</h4>

<h2>initialstate <mark>{state.count}</mark></h2>

<button onClick={()=> dispatch({type:"INC"})}>increment</button>
<button onClick={()=> dispatch({type:'DEC'})}>decrement</button>

    </div>
  )
}

export default App