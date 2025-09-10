import React, { useState } from 'react'

const App2 = () => {
//From Handling- controlled components- means we are handling from using state and syntetic event 
//1 state defined for the fields 

//2 pass the initial state value inside the input tag  from 'value' atrribute 

//3 set onchage event handler and fetch users data when user is typing using 'synthetic event'-e

//4 fetch this all data on a from submit 


//state defined

const [from , setFrom] = useState({userName: "", userEmail:"", userPass:"", userSkill:"", userProfile:null })



// from handler

//e- what is e => e is a synthetic event, a cross-browser object it is made with a wrapper around the  actual event of the browser.

// methods :=>
// e.preventDefault(); =>stop default browser action
//e.sropPropagation(); =>Stop event bubbling to parent 


const DataHandler = (e) =>{
    // alert("")
    console.log(e.target.value);

    const{name,value}= e.target;

    if(e.target.type == 'file'){

    


    //state update 
    setFrom({...from,[name]:e.target.files[0].name})
    } 
    else{ 
      setFrom({...from,[name]:value})

      
    //used to fetch files data
    //it return file list object with file data as an array 0 index
//  console.log(e.target.files[0].name );
    }
  


  }

const saveFrom=(e)=>{
//e.preventDefault ()
//used to prevent by defult behavior of our browser i.e avoid reloading of our web browser
//used to holds data
e.preventDefault()

    alert("submitted")
 
    console.log(from);

    //from clear
    setFrom({userName:"", userEmail:"", userSkill:"", userPass:"",userProfile:null})
    
}

  return (
    <>


    
    <div className="container-fluid  text-dark fw-bold">

        <div className="row">
          <div className="col-md-12 text-center bg-dark p-3">
            <h2 className="text-warning">User Registration Form</h2>
          </div>
          <form onSubmit={(e)=>saveFrom(e)}>

            <div className="col-md-12 my-3">
              <label for="userName" className="form-label">Name</label>
              <input type="text" className="form-control" value={from.userName} onChange={(e)=>DataHandler(e)}  id="userName" name="userName" placeholder="Enter your name" required />
            </div>

            <div className="col-md-6 mb-3">
              <label for="userEmail" className="form-label">Email</label>
              <input type="email" className="form-control" value={from.userEmail} onChange={(e)=>DataHandler(e)} id="userEmail" name="userEmail" placeholder="Enter your email" required />
            </div>

            <div className="col-md-6 mb-3">
              <label for="userPass" className="form-label">Password</label>
              <input type="password" className="form-control" value={from.userPass} onChange={(e)=>DataHandler(e)} id="userPass" name="userPass" placeholder="Enter your password" required />
            </div>

            <div className=" col-md-12 mb-3">
              <label for="userSkill" className="form-label">Skill</label>
              <select className="form-select" id="userSkill" value={from.userSkill} name="userSkill" required>
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

export default App2