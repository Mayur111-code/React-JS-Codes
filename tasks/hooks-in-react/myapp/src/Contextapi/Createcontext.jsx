import React from 'react'
import { createContext } from 'react'
import Consumer from './Consumer'
const userId = createContext()
const userName = createContext()

const Createcontext = () => {
  return (
    <div>

<userId.Provider value={1234}>
    <userName.Provider value={"Mayur Borse"} >

        <Consumer/>

    </userName.Provider>

</userId.Provider>


    </div>
  )
}

export default Createcontext;
export{userId,userName};