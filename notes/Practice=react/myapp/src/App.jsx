import React from 'react'

const App = () => {
  let arr = [1, 2, 3, 4, 5]

  return (
    <div>
      {arr.map((value, index) => (
        <div key={index} className="h-[200px] w-[200px] bg-white border"></div>
      ))}
      <p>Vardh</p>
    </div>
  )
}

export default App
