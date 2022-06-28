import React from 'react';
import TaskItem from './TaskItem';

const PendingTasks = (props) => {
  const { taskList, modifyTaskList, taskName, taskId, taskFinished } = props;

  const pendingTasks = taskList
    .filter((task) => task.taskFinished === false)
    .map((task) => (
      <TaskItem
        key={task.taskId}
        taskList={taskList}
        modifyTaskList={modifyTaskList}
        taskName={task.taskName}
        taskId={task.taskId}
        taskFinished={task.taskFinished}
      />
    ));

  return (
    <div className="component-container">
      <h2 className="component-header">Pending Tasks</h2>
      <div className="component-content task-listing">
        {pendingTasks.length !== 0 ? (
          <ul>{pendingTasks}</ul>
        ) : (
          <p className="component-content-placeholder">
            No pending tasks at the moment! Yey!
          </p>
        )}
      </div>
    </div>
  );
};

export default PendingTasks;
