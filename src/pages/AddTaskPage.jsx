// src/pages/AddTaskPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/task';
import { useNavigate } from 'react-router-dom';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      completed: false,
    };
    dispatch(addTask(newTask));
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-200 rounded-lg shadow-md shadow-blue-400">
      <h1 className="text-2xl font-bold mb-4 ">Add New Task 🗂️</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;