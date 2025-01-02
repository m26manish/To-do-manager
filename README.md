# Vite React App - To-Do List Manager

## Project Overview

This project is a responsive web application for managing to-do tasks, built using **Vite** and **React**. The app allows users to:

- View a list of tasks with their titles, descriptions, and statuses.
- Add new tasks with relevant details.
- Edit tasks to update their statuses.

The application integrates REST API calls to simulate task management using a dummy API.

---

## Features

1. **Task Management**

   - View tasks with titles, descriptions, and statuses.
   - Add tasks by providing title, description, and status.
   - Edit tasks to update their statuses.

2. **Responsive UI**

   - Fully responsive design for seamless usage across devices.

3. **API Integration**

   - Uses `jsonplaceholder.typicode.com/todos` for fetching and updating task data.

4. **State Management**
   - Efficient state management using **Redux Toolkit** or **Context API**.

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS / CSS Modules
- **State Management:** Redux Toolkit / Context API
- **API Integration:** REST API

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-manager.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-list-manager
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

---

## Live Project

Check out the live version of the project here:
[To-Do List Manager](https://rococo-tanuki-f755c8.netlify.app/)

---

## Folder Structure

```
src/
|-- components/
|   |-- TaskList.jsx        # Component to display tasks
|   |-- AddTask.jsx         # Component for adding a task
|   |-- EditTask.jsx        # Component for editing a task
|   |-- TaskItem.jsx        # Component for a single task item
|
|-- pages/
|   |-- Home.jsx            # Home page
|   |-- AddTaskPage.jsx     # Add Task page
|   |-- EditTaskPage.jsx    # Edit Task page
|
|-- store/
|   |-- taskSlice.js        # Redux slice for task management
|
|-- services/
|   |-- api.js              # API service functions
|
|-- styles/
|   |-- global.css          # Global styles
|
|-- App.jsx                 # Main App component
|-- main.jsx                # Vite entry point
|-- index.html              # Main HTML file
```

---

## Usage

- **View Tasks:** The home page displays a list of tasks with their details.
- **Add Tasks:** Navigate to the "Add Task" page to create a new task with a title, description, and status.
- **Edit Tasks:** Navigate to the "Edit Task" page to update the status of an existing task.

---

## Scripts

- **Run Dev Server:**

  ```bash
  npm run dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  ```

- **Preview Build:**
  ```bash
  npm run preview
  ```

---

## Screenshots

Add screenshots here to showcase the app's UI and features.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For questions or collaboration:

- **Name:** Manish Kumar Yadav
- **Email:** your.email@example.com
- **GitHub:** [your-username](https://github.com/your-username)

---

## Hashtags

#Vite #React #ToDoList #TaskManager #ResponsiveDesign #ReduxToolkit #ContextAPI #RESTAPI #WebDevelopment #Frontend

Prerequisites

Node.js (v14 or higher)

npm or yarn

Steps

Clone the repository:

git clone https://github.com/your-username/todo-list-manager.git

Navigate to the project directory:

cd todo-list-manager

Install dependencies:

npm install

# or

yarn install

Start the development server:

npm start

# or

yarn start

Open the application in your browser at http://localhost:3000.

File Structure

├── src
│ ├── components
│ │ ├── TaskList.js # Component to display tasks
│ │ ├── AddTask.js # Component for adding a task
│ │ ├── EditTask.js # Component for editing a task
│ │ └── TaskItem.js # Component for a single task item
│ ├── pages
│ │ ├── Home.js # Home page
│ │ ├── AddTaskPage.js # Add Task page
│ │ └── EditTaskPage.js # Edit Task page
│ ├── store
│ │ └── taskSlice.js # Redux slice for task management
│ ├── services
│ │ └── api.js # API service functions
│ ├── App.js # Main app component
│ └── index.js # Entry point
├── public # Static assets
├── package.json # Project dependencies
└── README.md # Project documentation

API Details

Base URL

https://jsonplaceholder.typicode.com/todos

Endpoints

Fetch Tasks

GET /todos

Response: List of tasks.

Add Task

POST /todos

Request Body: Task details (title, description, status).

Edit Task

PUT /todos/:id

Request Body: Updated task details.

State Management

Using Redux Toolkit

Slice: taskSlice.js

Manages state for tasks.

Handles actions such as fetching, adding, and updating tasks.

Store: Configured in store/index.js.

Deployment

To deploy the application:

Build the project:

npm run build

# or

yarn build

Deploy the build folder to a hosting platform (e.g., Vercel, Netlify).

Live Demo

You can view the live application here: To-Do List Manager

Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

License

This project is licensed under the MIT License.

Acknowledgments

React.js Documentation

jsonplaceholder.typicode.com
