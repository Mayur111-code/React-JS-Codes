import React from 'react'

const FaildTask = () => {
  return (
    <div
        id="tasklist"
        className="w-full py-5 bg-gray-100 mt-10 px-5 overflow-x-auto"
      >
    <div className="flex gap-5 min-w-max">
        
          <div className="h-[250px] w-[300px] p-5 bg-red-400 rounded-xl flex flex-col shadow-md">
           
            <div className="flex justify-between items-center">
              <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
                High
              </span>
              <span className="text-sm text-gray-800">20 Jan 2025</span>
            </div>

           
            <h2 className="mt-4 text-xl font-semibold text-white">
              Make Simple Website
            </h2>

            
            <p className="mt-2 text-sm text-gray-100 leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              modi quod quae optio iste quibusdam inventore fuga repellendus
              recusandae impedit?
            </p>
           <div className="mt-2">
        <button className="bg-green-500 text-white font-medium py-1 px-3 rounded-lg shadow hover:bg-green-600 transition">
          ✅ Failed
        </button>
      </div>
          </div>
        </div>
        </div>
  )
}

export default FaildTask