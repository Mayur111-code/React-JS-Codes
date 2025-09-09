import React from 'react'
import { useState } from "react";



const App = () => {
  const[data, setData] = useState({userName: "", userEmail:"", userPass: "", userSkill: "", userProfile: null})


  const DataHandler=(e)=>{
  console.log(e.target.value);
  const {name, value} = e.target;
  if(e.target.type=='file'){
    setData({...data, [name]: e.target.files[0].name})
  }
  else{
    setData({...data,[name]:value})
  }
  
     
  }


  const saveForm = (e)=>{
    e.preventDefault()
    alert('user is successfully registered !!')
    console.log(data);


    setData({userName: "", userEmail: "", userPass:"", userSkill: "", userProfile:null})
    
  }
  return (
   <>
   
   
<div className="container-fluid  text-dark fw-bold">

        <div className="row">
          <div className="col-md-12 text-center bg-dark p-3">
            <h2 className="text-warning">User Registration Form</h2>
          </div>
          <form onSubmit={(e) => saveForm(e)}>

            <div className="col-md-12 my-3">
              <label for="userName" className="form-label">Name</label>
              <input type="text" className="form-control" value={data.userName} onChange={(e) => DataHandler(e)} id="userName" name="userName" placeholder="Enter your name" required />
            </div>

            <div className="col-md-6 mb-3">
              <label for="userEmail" className="form-label">Email</label>
              <input type="email" className="form-control" value={data.userEmail} onChange={(e) => DataHandler(e)} id="userEmail" name="userEmail" placeholder="Enter your email" required />
            </div>

            <div className="col-md-6 mb-3">
              <label for="userPass" className="form-label">Password</label>
              <input type="password" className="form-control" value={data.userPass} onChange={(e) => DataHandler(e)} id="userPass" name="userPass" placeholder="Enter your password" required />
            </div>

            <div className=" col-md-12 mb-3">
              <label for="userSkill" className="form-label">Skill</label>
              <select className="form-select" id="userSkill" value={data.userSkill} onChange={(e) => DataHandler(e)} name="userSkill" required>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="ReactJS">ReactJS</option>
                <option value="NodeJS">NodeJS</option>
              </select>
            </div>

            <div className=" col-md-12 mb-3">
              <label for="userProfile" className="form-label">Profile Picture</label>
              <input type="file" className="form-control" onChange={(e)=>DataHandler(e)} id="userProfile" name="userProfile" />
            </div>

            <div className="col-md-12">
              <button type="submit" className="btn btn-primary fw-bold my-3">Submit</button>
            </div>
          </form>

        </div>
      </div>

   
   </>
  )
}

export default App







// import React, { useState } from 'react'
// import { useEffect } from 'react'


// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("api url")  
//       .then((result) => result.json())
//       .then((res) => {
//         console.log(res);
//         console.log("Data fetch successful");
//         setData(res);
//       })
//       .catch((err) => {
//         console.log("Error fetching data:", err);
//       });
//   }, []); 
//   return (
//    <>
   

   
//    </>
//   )
// }

// export default App