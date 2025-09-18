import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edituser = () => {
    const data = useParams();

    console.log(data);


    const Fetchuser= async ()=>{

        try{
            const result = await axios.get(`http://localhost:3000/User/${id}`)
            console.log(result); 
            console.log(result.id);
                
            
        }catch(err){
            console.log(err);
            
        }

    }

    useEffect(()=>{

        Fetchuser( )

    }, [])
    
    
  return (
    <>
    
    <h1>hiiii</h1>
    
    </>
  )
}

export default Edituser