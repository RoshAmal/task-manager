import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task, onClose }) => {

    const handleOverlayClick = (e) => {
        onClose();
    };
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="task-details-overlay"
            onClick={handleOverlayClick}>
        <div 
            className="task-details-modal"
            onClick={handleModalClick}>
            <h3>Task Details</h3>
            <p><strong>Task:</strong> {task.taskItem}</p>
            <button className="close-btn" onClick={onClose}>x</button>
        </div>
        </div>
    );
};

export default TaskDetails;
