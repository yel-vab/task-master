import React, { useState } from 'react';

const NewTask = (props) => {
  const { taskList, modifyTaskList } = props;
  const [newTask, updateTask] = useState('');
  const [counter, increaseCounter] = useState(1);

  const inputHandler = (event) => {
    event.preventDefault();
    updateTask(event.target.value);
    console.log(newTask);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (!newTask || newTask.trim() === '') {
      window.alert('No task encoded. Try again!');
      return;
    }
    modifyTaskList([
      ...taskList,
      {
        taskName: newTask,
        taskId: counter,
        taskFinished: false,
      },
    ]);
    increaseCounter(counter + 1);
    updateTask('');
    document.getElementById('task-input').value = '';
  };

  return (
    <div className="component-container">
      <h2 className="component-header">New Task</h2>
      <div className="component-content">
        <form className="form-container">
          <input
            id="task-input"
            onChange={inputHandler}
            autoComplete="off"
          ></input>
          <button
            type="submit"
            onClick={addTaskHandler}
            onKeyDown={addTaskHandler}
          >
            + Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
