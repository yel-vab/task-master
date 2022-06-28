import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';

const App = () => {
  const [taskList, modifyTaskList] = useState([]);

  return (
    <div className="app-container">
      <h1>TaskMaster</h1>
      <NewTask taskList={taskList} modifyTaskList={modifyTaskList} />
      <PendingTasks taskList={taskList} modifyTaskList={modifyTaskList} />
      <CompletedTasks taskList={taskList} modifyTaskList={modifyTaskList} />
    </div>
  );
};

export default App;
