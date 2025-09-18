// import React from 'react'

// const AllTask = () => {
//   return (
//     <>
    
//     <div className='bg-[#1C1C1C] P-5 rounded mt-5 h-48 overflow-auto'>
// <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//     <h2>Mayur</h2>
//     <h3>Make a UI Design</h3>
//     <h5>Status</h5>
// </div>
//     </div>
    
//     </>
//   )
// }

// export default AllTask

import React from "react";

const AllTask = () => {
  return (
    <>
      <div className="bg-[#1C1C1C] p-5 rounded-xl mt-5 h-64 overflow-y-auto shadow-lg">
        {/* Single Task Card */}
        <div className="bg-red-500 mb-3 py-3 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
          <div className="flex flex-col">
            <h2 className="text-white font-semibold text-lg">Mayur</h2>
            <h3 className="text-gray-100 text-sm">Make a UI Design</h3>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="px-3 py-1 text-sm rounded-full bg-white text-red-600 font-medium">
              Pending
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTask;
