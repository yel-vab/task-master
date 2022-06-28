import React from 'react';

const DeleteTaskButton = (props) => {
  const { taskList, modifyTaskList, taskName, taskId, taskFinished } = props;

  const deleteTaskButtonHandler = () => {
    const updatedTaskList = taskList.filter((task) => task.taskId !== taskId);
    modifyTaskList([...updatedTaskList]);
  };

  return (
    <button className="btn-delete" onClick={deleteTaskButtonHandler}>
      <i className="fa fa-solid fa-trash"></i>
    </button>
  );
};

export default DeleteTaskButton;
