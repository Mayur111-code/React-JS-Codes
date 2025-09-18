import React from 'react'
import{BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Register from './Register'
import Userdata from './Userdata'
import Navbar from './Navbar'
import Edituser from './Edituser'

const App = () => {
  return (
    <div>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/register' element={<Register/>} />
     <Route path='/userdata' element={<Userdata/>} />
     <Route path='/edituser/:id' element={<Edituser/>}/>
     <Route path='*' element={<Register/>}/>
  </Routes>
</Router>



    </div>
  )
}

export default App