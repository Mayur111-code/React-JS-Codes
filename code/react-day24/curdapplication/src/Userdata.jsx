import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom'

const Userdata = () => {
    const [data, setData]=useState([])
const fetchData= async()=>{
   try{
     
       const rseult = await axios.get("http://localhost:3000/User")
       console.log(rseult);
       
       setData(rseult.data)

      
   
       
   } catch(err){
      console.log(err);
      console.log("Failed to Register");
      
   }
    }

 
    const Deleteuser = async (id)=>{
      alert(id)
     

     await axios.delete(`http://localhost:3000/User/${id}`)
    }

    useEffect(()=>{
fetchData()
    }, [])
  

  return (
    
    <>

    <table className='table bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>ID</th>
           <th>userName</th>
            <th>userEmail</th>
            <th>userPass</th>
            <th>userSkills</th>
            <th>UserAddress</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val)=>{
          return(
            <tr>
              <td>{val.id}</td>
               <td>{val.userName}</td>
                <td>{val.userEmail}</td>
                <td>{val.userPass}</td>
                <td>{val.userSkills}</td>
                <td>{val.userAddress}</td>
                <td>
  <i className="fa-solid fa-trash fw-bold text-danger" onClick={()=> window.confirm(`Are You Sure ? `) ?  Deleteuser(val.id) : null}></i>
</td>
<td>
  <NavLink to = {`/edituser/${val.id}`}>

  <i className="fa-solid fa-pen-to-square fw-bold text-success"></i>
  </NavLink>
</td>

            </tr>
          )
        })}
      </tbody>
    </table>
    
    
    </>
  
  )
}

export default Userdata