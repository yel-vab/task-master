import React from 'react';
import TaskItem from './TaskItem';

const CompletedTasks = (props) => {
  const { taskList, modifyTaskList } = props;

  const completedTasks = taskList
    .filter((task) => task.taskFinished === true)
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
      <h2 className="component-header">Completed Tasks</h2>
      <div className="component-content task-listing">
        {completedTasks.length !== 0 ? (
          <ul>{completedTasks}</ul>
        ) : (
          <p className="component-content-placeholder">
            It looks like a quiet day today. Enjoy!
          </p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
