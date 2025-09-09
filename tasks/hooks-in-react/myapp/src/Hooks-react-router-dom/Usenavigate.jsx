import React from 'react'
import { useNavigate } from "react-router-dom";


const Usenavigate = () => {
  const nav = useNavigate ();

  const gohome=()=>{
    nav ('/')
  }
  const goabout = () =>{
    nav ('/about');
  }

  const goforword = () =>{
    nav(1);
  }
  return (
    <div>

<button onClick={()=> gohome()}>go home </button>
<button onClick={()=> goabout()}>about</button>

<button onClick={()=>goforword()}>forword</button>

    </div>
  )
}

export default Usenavigate