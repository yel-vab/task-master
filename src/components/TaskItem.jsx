import React from 'react';
import CompleteTaskButton from './CompleteTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

const TaskItem = (props) => {
  const { taskList, modifyTaskList, taskName, taskId, taskFinished } = props;

  return (
    <li>
      <div
        className={`task-listing-text-container ${
          taskFinished && 'task-finished'
        }`}
      >
        {taskName}
      </div>
      <div className="task-listing-buttons-container">
        {taskFinished === false && (
          <CompleteTaskButton
            taskList={taskList}
            modifyTaskList={modifyTaskList}
            taskName={taskName}
            taskId={taskId}
            taskFinished={taskFinished}
          />
        )}
        <DeleteTaskButton
          taskList={taskList}
          modifyTaskList={modifyTaskList}
          taskName={taskName}
          taskId={taskId}
          taskFinished={taskFinished}
        />
      </div>
    </li>
  );
};

export default TaskItem;