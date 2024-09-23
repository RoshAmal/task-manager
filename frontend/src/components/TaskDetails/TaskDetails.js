import React, { useState } from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task, onClose, onSave, onDelete }) => {

    const [editedTaskItem,setEditedTaskItem] = useState(task.taskItem);
    const [dropdownVisibile,setDropdownVisible] = useState(false);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e) => {
        setEditedTaskItem(e.target.value);
    };

    const handleDropdownVisible = () => {
        setDropdownVisible(!dropdownVisibile);
    };

     const handleDelete = () => {
        onDelete(task);
        onClose();
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
            <div className="modal-buttons">
                <div className="dropdown-wrapper">
                    <button className="ellipsis" onClick={handleDropdownVisible}>
                    &#8943;
                    </button>
                    {dropdownVisibile && (
                        <div className="dropdown-menu">
                            <div className="dropdown-option" onClick={handleDelete}>
                                Delete Task
                            </div>
                        </div>
                        )
                    }
                </div>
                <button className="close-btn" onClick={handleCloseClick}>x</button>
            </div>
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
