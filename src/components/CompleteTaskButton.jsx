import React from 'react';

const CompleteTaskButton = (props) => {
  const { taskList, modifyTaskList, taskName, taskId, taskFinished } = props;

  const completeTaskButtonHandler = () => {
    let selectedTask = taskList.find((task) => task.taskId === taskId);
    selectedTask.taskFinished = !taskFinished;
    let filteredTaskList = taskList.filter((task) => task.taskId !== taskId);
    modifyTaskList([...filteredTaskList, selectedTask]);
  };

  return (
    <button className="btn-accomplished" onClick={completeTaskButtonHandler}>
      <i className="fa fa-solid fa-check"></i>
    </button>
  );
};

export default CompleteTaskButton;
