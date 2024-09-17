import React, { useState } from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task }) => {

    const [isVisible,setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false)
    };
    if (!isVisible) return null;

    return (
        <div className="task-details-overlay">
        <div className="task-details-modal">
            <h3>Task Details</h3>
            <p><strong>Task:</strong> {task.taskItem}</p>
            <button className="close-btn" onClick={handleClose}>x</button>
        </div>
        </div>
    );
};

export default TaskDetails;
