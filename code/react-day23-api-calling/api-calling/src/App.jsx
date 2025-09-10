import React, { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

  const [data, setData] = useState([]);


  useEffect(()=>{
    fetch("http://localhost:3000/User")
    .then((result)=>{
      result.json().then((res)=>{
        console.log(res);
        console.log("Data fetched....");
        
      });
    }).catch((err)=>{
      console.log(err);
      console.log("data faild to fetch......");
      
      //update state
      setData(res);

      
    });
  }, []);

console.log(data);


  return (
    <>
    
    {/* Apiu Calling */}

    <h1>Api Calling in React - </h1>
    <h2>xmlHTTPRequest- old traditional way</h2>
    <h2>fetch Methods
      <h2><mark>axios - React 3er party Package for  efficient api calling</mark></h2>
    </h2>
    <hr />

    <table>
      <tr>
        <th>ID</th>
        <th>User Name</th>
        <th>User Age</th>
        <th>User Add</th>
      </tr>

{data.map((value)=>{
  return(
    <tr>
        <td>{value.id}</td>
        <td>{value.userName}</td>
        <td>23</td>
        <td>pune</td>
      </tr>
  )
})}
      
    </table>
    
    </>
  )
}

export default App