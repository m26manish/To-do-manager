
import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md shadow-blue-400 ">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-600 mt-2">{task.description}</p>
      <p className={`mt-2 ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
        {task.completed ? 'Completed' : 'Pending'}
      </p>
      <Link
        to={`/edit/${task.id}`}
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
 Edit Task
      </Link>
    </div>
  );
};

export default TaskItem;