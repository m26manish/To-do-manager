// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/task';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';

const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex justify-between mb-4">
        <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add New Task
        </Link>
        <div className="flex items-center">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search tasks"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            onClick={handleSort}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sort {sortOrder === 'asc' ? 'ASC' : 'DESC'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hover:ease-out duration-150">
        {sortedTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;