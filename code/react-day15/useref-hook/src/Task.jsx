import React from 'react'

import { useEffect, useRef, useState } from 'react'

const Task = () => {



  const emp1 = [{ id: 1, name: 'John Peter', email: 'johnpeter@gmail.com', skill: 'React ' }]
  const emp2 = [{ id: 2, name: 'Simon Michael', email: 'simon@gmail.com', skill: 'MERN STack ' }]
  const emp3 = [{ id: 3, name: 'Andrew clark', email: 'andrew@gmail.com', skill: 'HTML' }]

  const [data, setData] = useState(emp1)

  const result = useRef()

  const getEmp = () =>{
    if (result.current.value === 'emp1') {
      setData(emp1)
    } else if (result.current.value === 'emp2') {
      setData(emp2)
    } else {
      setData(emp3)
      
    }
  }

//   const getEmp = () => {
//   if (result.current.value === 'emp1') {
//     setData(emp1)
//   } else if (result.current.value === 'emp2') {
//     setData(emp2)
//   } else {
//     setData(emp3)
//   }
// }




  useEffect(()=>{
    alert("user selected !!")
  },[data])

  return (
    <div>

      <h1>Emp Details</h1>
      <h2>Show any one emp detalis</h2>

      {
        data.map((val, index) => {
          return (
            <>
              <h3>Your Name: <mark> {val.name}</mark> </h3>
              <h3>Your Email:<mark> {val.email}</mark></h3>
              <h3>Your SKill:<mark> {val.skill}</mark> </h3>
            </>
          )
        })
      }


<hr />

 <label htmlFor="">Choose Emp: </label>
            <select name="emp" id="" style={{ padding: '10px 30px' }} ref={result} onChange={() => getEmp()}>
                <option value="emp1">Emp1</option>
                <option value="emp2">Emp2</option>
                <option value="emp3">Emp3</option>
            </select>

    </div>
  )
}

export default Task