import React from 'react';
import { Link } from 'react-router-dom';

// TaskItem component receives a `task` object as a prop
const TaskItem = ({ task }) => {
  return (
    // Container for the task item with styling
    <div className="bg-green-100 p-4 rounded-lg shadow-md shadow-blue-400">
      {/* Display the task title */}
      <h3 className="text-xl font-semibold">{task.title}</h3>
      
      {/* Display the task description */}
      <p className="text-gray-600 mt-2">{task.description}</p>
      
      {/* Display the task status (Completed or Pending) with conditional styling */}
      <p className={`mt-2 ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
        {task.completed ? 'Completed' : 'Pending'}
      </p>
      
      {/* Link to the edit page for this task */}
      <Link
        to={`/edit/${task.id}`} // Dynamic route based on the task ID
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Edit Task
      </Link>
    </div>
  );
};

export default TaskItem;