import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* New Task */}
      <div className="rounded-xl py-6 px-6 bg-blue-500 text-white shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold"> {data.taskCounts.newTask} </h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>

      {/* Completed */}
      <div className="rounded-xl py-6 px-6 bg-green-500 text-white shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg font-medium">Completed</h3>
      </div>

      {/* Accepted */}
      <div className="rounded-xl py-6 px-6 bg-yellow-500 text-white shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-lg font-medium">Accepted</h3>
      </div>

      {/* Failed */}
      <div className="rounded-xl py-6 px-6 bg-red-500 text-white shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
