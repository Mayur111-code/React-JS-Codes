import React from 'react'

import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({data}) => {


   
  return (

    <>
    <div className="h-screem w-full p-5 bg-[#1C1C1C]">
        <Header data={data} />
        <CreateTask/>
        <AllTask/>
    </div>
     

    </>
  )
}

export default AdminDashboard