import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const[user, setUser] = useState(null)
  const[loggedInUserData, setLoggedInUserData] = useState(null)
   const authData =useContext(AuthContext)
  // console.log(authData.employees);
  
// useEffect(()=>{

//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// },[authData])

  const handleLogin = (email,password) =>{
   if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
  localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))

   } else if(authData){
    // const employee = authData.employees.find((e)=>email == e.email && e.password == password)
    const employee = authData.find((e)=>email == e.email && e.password == password)

    if(employee){
    setUser('employee')
    setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    }
    

   } else{
    alert("Invalid Credentials")
   }
  }

  return (
<>
 {/* {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin'?<AdminDashboard changeUser={setUser}/>:(user == 'employee'?<EmployeeDashboard changeUser={setUser}data={loggedInUserData}/>:null) } */}

       {/* {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard changeUser={setUser} />}
    {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />} */}
    
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard data={{name:"admin"}} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)  }

</>
  )
}

export default App