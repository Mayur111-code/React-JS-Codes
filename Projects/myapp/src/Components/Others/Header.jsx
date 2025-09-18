import React from 'react'

const Header = ({data}) => {
 
  // console.log(data.name);
  
  
  return (
    <>
    
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-4 sm:px-6 py-3 shadow-md">
  <h1 className="text-xl sm:text-2xl font-medium text-white">
    Hello <br className="sm:hidden" />
    <span className="text-2xl sm:text-3xl font-semibold text-yellow-200">{data.firstName}😊</span>
  </h1>
  <button className="bg-white/20 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-full shadow hover:bg-white/30 transition duration-300">
    Logout
  </button>
</div>


    
    </>
  )
}

export default Header