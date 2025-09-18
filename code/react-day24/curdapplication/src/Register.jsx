import React from 'react'
import { useState } from 'react'
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({userName:"", userEmail:"", userPass:"", userAddress:"", userSkills:""})

    const Datahandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const saveForm= async(e)=>{
        e.preventDefault()
        try{

          const res = await axios.get(`http://localhost:3000/User`)

            // const res = await axios.get(`http://localhost:3000/User?userEmail=${data.userEmail}`);

            // if(res.data.length > 0){
            //     alert("This email is already registered. Please use another email.")
            //     return;
            // }

        
        
     
        
        await axios.post("http://localhost:3000/User", data)
        console.log("user Register Successfully");
        alert("user Register Successfully")
        
        } catch(err){
            console.log("user not Register");
            alert("Something went wrong ❌")
            
        }
        setData({userName:"", userEmail:"", userPass:"", userAddress:"", userSkills:""})
    }
  return (
    <>

    <div className="container mt-1 fw-bold">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form onSubmit={(e)=>saveForm(e)}>
            <div className="mb-2">
              <label htmlFor="userName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={data.userName}
                onChange={(e)=>Datahandler(e)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="userEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                name="userEmail"
                value={data.userEmail}
                 onChange={(e)=>Datahandler(e)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="userPass" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userPass"
                name="userPass"
                value={data.userPass}
                 onChange={(e)=>Datahandler(e)}
                placeholder="Create a password"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="userAddress" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="userAddress"
                name="userAddress"
                value={data.userAddress}
                 onChange={(e)=>Datahandler(e)}
                rows="1"
                placeholder="Your current address"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="userSkills" className="form-label">
                Skills
              </label>
              <select
                name="userSkills"
                className="form-control"
                id="userSkills"
                value={data.userSkills}
                 onChange={(e)=>Datahandler(e)}
               
              >
                <option value="None">Choose Your SKill</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">Node JS</option>
                <option value=".Net">.Net</option>
                <option value="Express JS">Express JS</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary fw-bold w-100">
              Register
            </button>
          </form>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default Register  