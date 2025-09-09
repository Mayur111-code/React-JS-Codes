import React from 'react'
import Customhook from './Customhook'

const Accescostomhook = () => {

    const data=Customhook()

  return (
    <div>
        <h1>{data.count} </h1>

<button onClick={()=> {data.add()}}>add</button>
<button onClick={()=> {data.sum()}}>sum</button>
    </div>
  )
}

export default Accescostomhook




{

function debaounce(func,dealy) {
  let timer;
  return function (...data) {
    clearTimeout(timer);
    timer = setTimeout(()=>{
      func(...data);
    }, dealy);


  }
  
}



}


{
  function debaounce(func,dealy) {
    return function (...data) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...data);
      }, dealy);
      
    }
  }
}