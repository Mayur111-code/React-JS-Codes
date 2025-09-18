import React, { useState } from 'react'


const App = () => {
  const[data, setData] = useState({name:"", email:"", password:"", message:"", Profile:"", userType:""})

  const datahandler=((e)=>{
   console.log(e.target.value);
   const {name, value} = e.target
  //  setData({...data,[name]: value})

   if(e.target.type=='file'){
    setData({...data,[name]: e.target.files[0].name})
   } else{
    setData({...data,[name]:value})
   }

  //  console.log(e.target.files[0].name);
   
  })

  const saveForm=((e)=>{
    e.preventDefault()
    alert("submitted")
    console.log(data);

    setData({name:"", email:"", password:"", message:"", Profile:"", userType:""})
    
  })
  
  return (
    <>
    

 <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Registration Form</h3>
              
              <form onSubmit={(e)=>saveForm(e)}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name='name'
                    value={data.name}
                    onChange={(e)=>datahandler(e)}
                    placeholder="Enter your name"
                  />
                </div>
                
                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name='email'
                    value={data.email}
                     onChange={(e)=>datahandler(e)}
                    placeholder="name@example.com"
                  />
                </div>
                
                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    name='password'
                    id="password" 
                    value={data.password}
                     onChange={(e)=>datahandler(e)}
                    placeholder="Create a password"
                  />
                </div>
                
                {/* Dropdown Select */}
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label">User Type</label>
                  <select className="form-select" id="userType" value={data.userType} name='userType' onChange={(e)=>datahandler(e)}>
                    <option value="">Select user type</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Textarea */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message"
                    name='message' 
                    value={data.message}
                     onChange={(e)=>datahandler(e)}
                    rows="3" 
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
                <div className="mb-3">
                   <label for="Profile" className="form-label">Profile Picture</label>
              <input type="file" className="form-control"onChange={(e)=>datahandler(e)} id="Profile" name="Profile" />
                </div>
                
            
                
               
                
                {/* Buttons */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
    </>
  )
}

export default App