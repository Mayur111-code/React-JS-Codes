
// Write syntax for creating a Context and consuming it with useContext

import React, { createContext } from 'react'


import { useContext } from 'react'
import Consumer from './consumer'
const Context = () => {
    const myname = createContext()
    const skill = createContext()
  return (
    <div>


        <myname.Provider myname="mayur ">
            <skill.Provider skill="react js">
<consumer/>
            </skill.Provider>
        </myname.Provider>





    </div>
  )
}

export {myname, skill }


export default Context;
