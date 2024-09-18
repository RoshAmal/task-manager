import React, { useState } from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task, onClose, onSave }) => {

    const [editedTaskItem,setEditedTaskItem] = useState(task.taskItem);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e) => {
        setEditedTaskItem(e.target.value);
    };

    const handleCloseClick = () => {
        onSave({...task,taskItem:editedTaskItem});
        onClose();
    };

    return (
        <div 
            className="task-details-overlay"
            onClick={handleCloseClick}>
        <div 
            className="task-details-modal"
            onClick={handleModalClick}>
            <button className="close-btn" onClick={handleCloseClick}>x</button>
            <h3>Task Details</h3>      
            <p>
                <strong>Task: </strong> 
            <input 
                type="text"
                value={editedTaskItem}
                onChange={handleInputChange}
                className="task-item-input"
                />
            </p>
        </div>
        </div>
    );
};

export default TaskDetails;
