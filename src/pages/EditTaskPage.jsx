
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, fetchTasks } from '../store/task';
import { useParams, useNavigate } from 'react-router-dom';

const EditTaskPage = () => {
  const { id } = useParams();

  // Initialize dispatch and navigate functions from react-redux and react-router-dom
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Find the task in the Redux store that matches the ID from the URL
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === parseInt(id))
  );
  // State to manage the title and description of the task
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect to set the title and description when the task is loaded
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      dispatch(fetchTasks());
    }
  }, [task, dispatch]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      title,
      description,
      completed: task.completed,
    };
    dispatch(updateTask(updatedTask));
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-200 rounded-lg shadow-md shadow-blue-400">
      <h1 className="text-2xl font-bold mb-4">Edit Task ✍️</h1>
      {task ? (
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
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => {
                        // Update the task's completed status in the Redux store
                  const updatedTask = { ...task, completed: e.target.checked };
                  dispatch(updateTask(updatedTask));
                }}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Completed</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Update Task
          </button>
        </form>
      ) : (
         // If the task is not found, display a loading message
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default EditTaskPage;