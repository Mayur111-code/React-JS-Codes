import React from 'react'
import { useState, useEffect } from 'react'


const Usestate = () => {


    const data = {
        id:1,
        name1:"mayur bhai",
        role:"developer",
        skill:"mernstatck"
    }

   


    const {id, name1,role,skiil} = data


    console.log(data.name1);
    console.log(data.role);


     const arr = [12,23,22,21,32,13];

     const [n1,n2,n3,n4,n5,n6] = arr
     console.log(arr.n3);
     
    
    

    const[name,setName] = useState("mayur")

    const updatename =()=>{
setName ("mayur borse..!!");
    }

   useEffect (()=>{
    //alert("update name..!!")
   }, [name])


    


  return (
    <div>

        <h1>{n3} </h1>




        <h2>{role} </h2>

        <h1>{name1}</h1>

<hr />
<hr />

<h1>{name}</h1>

<hr />
<button onClick={()=> updatename()}>update state</button>



    </div>
  )
}

export default Usestate