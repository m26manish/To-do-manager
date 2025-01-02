// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  return (
    <Router>
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          To-Do List
        </Link>
        <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
          Add Task
        </Link>
      </div>
    </nav>
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
