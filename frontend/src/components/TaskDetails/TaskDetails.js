import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task, onClose }) => {

    return (
        <div className="task-details-overlay">
        <div className="task-details-modal">
            <h3>Task Details</h3>
            <p><strong>Task:</strong> {task.taskItem}</p>
            <button className="close-btn" onClick={onClose}>x</button>
        </div>
        </div>
    );
};

export default TaskDetails;
