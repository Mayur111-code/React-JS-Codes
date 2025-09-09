import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Employe from './Employe'

const App = () => {


    const emp1 = [{ id: 1, name: 'John Peter', email: 'johnpeter@gmail.com', skill: 'React ' }]
    const emp2 = [{ id: 2, name: 'Simon Michael', email: 'simon@gmail.com', skill: 'MERN STack ' }]
    const emp3 = [{ id: 3, name: 'Andrew clark', email: 'andrew@gmail.com', skill: 'HTML' }]


  const [select, setselect] = useState(0);

     const selectRef = useRef(0);


     const ShowDetails = () =>{

     }
    return (
        <div>

            <h1>Emp Details</h1>

            <h2>SHow Any one Emp Details</h2>

            <h3>Your Name: {select.name} </h3>
            <h3>Your Email: {select.email}</h3>
            <h3>Your SKill:{select.skill} </h3>

            <hr />

            <label htmlFor="select">Choose Emp: </label>
            <select ref={selectRef} id="select" style={{ padding: '10px 30px' }}>
                <option value="emp1">Emp1</option>
                <option value="emp2">Emp2</option>
                <option value="emp3">Emp3</option>
            </select>

<button onChange={ShowDetails()}>Show Details</button>


            

        </div>
    )
}

export default App
