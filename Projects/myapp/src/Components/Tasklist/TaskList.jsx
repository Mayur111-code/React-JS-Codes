// import React from "react";

// const TaskList = () => {
//   return (
//     <>
//       <div className="w-full py-5 bg-gray-100 mt-10 px-5">
//         <div className="grid gap-5 
//                         grid-cols-1        
//                         sm:grid-cols-2     
//                         lg:grid-cols-3     
//                         xl:grid-cols-4">   

//           {/* Card 1 */}
//           <div className="h-[200px] bg-yellow-400 rounded-xl flex items-center justify-center text-xl font-semibold shadow-md">
//             Task 1
//           </div>

//           {/* Card 2 */}
//           <div className="h-[200px] bg-green-400 rounded-xl flex items-center justify-center text-xl font-semibold shadow-md">
//             Task 2
//           </div>

//           {/* Card 3 */}
//           <div className="h-[200px] bg-blue-400 rounded-xl flex items-center justify-center text-xl font-semibold shadow-md">
//             Task 3
//           </div>

//           {/* Card 4 */}
//           <div className="h-[200px] bg-pink-400 rounded-xl flex items-center justify-center text-xl font-semibold shadow-md">
//             Task 4
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default TaskList;


import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";

const TaskList = ({data}) => {
  return (
    <>
      <div
  id="tasklist"
  className="w-full py-5 bg-gray-100 mt-10 px-5 flex gap-5 overflow-x-auto"
>
  <AcceptTask />
  <NewTask />
  <CompleteTask />
  <FaildTask />
</div>

    </>
  );
};

export default TaskList;
