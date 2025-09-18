import React from 'react'
import { useState } from 'react';
const CreateTask = () => {

     const [task, setTask] = useState({
        title: "",
        description: "",
        date: "",
        assignTo: "",
        category: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Created:", task);
        setTask({ title: "", description: "", date: "", assignTo: "", category: "" });
      };
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-lg font-bold">＋</span> Create Task
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Task Title */}
          <div>
            <label className="text-gray-300 text-sm">Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
              placeholder="Make a UI design"
              className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-gray-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm">Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Detailed description of task (Max 500 words)"
              className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="text-gray-300 text-sm">Date</label>
            <input
              type="date"
              name="date"
              value={task.date}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-gray-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="text-gray-300 text-sm">Assign To</label>
            <input
              type="text"
              name="assignTo"
              value={task.assignTo}
              onChange={handleChange}
              required
              placeholder="Employee name"
              className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-gray-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-gray-300 text-sm">Category</label>
            <input
              type="text"
              name="category"
              value={task.category}
              onChange={handleChange}
              required
              placeholder="Design, Development, etc..."
              className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-lg transition duration-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default CreateTask