import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details-overlay">
      <div className="task-details-modal">
        <h3>Task Details</h3>
        <p><strong>Task:</strong> {task.taskItem}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
