import React, {useState} from 'react';
import './CreateTaskPane.css';
import axios from 'axios';
const CreateTaskPane = ({ onTaskCreated, onClose }) => {
	const [newTask,setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');

	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};
	const handleCreateTask = async () => {
		if (newTask.trim()==='') return;
		try{
			const response = await axios.post('http://localhost:5000/api/tasks', {
				taskItem: newTask,
				description,
				dueDate,
			});
			if (response.status === 201) {
				setNewTask('');
				setDescription('');
				setDueDate('');
				onTaskCreated();
			}
		} catch(error){
			console.error('Error creating task:', error);
		}
		setNewTask('');
		onClose();
	};
	const handleCloseClick = () => {
		onClose();
	};
	const handleOverlayClick = (e) => {
		if (e.target.className === 'task-create-overlay') {
			onClose();
		}
	}

	return (
		<div className="task-create-overlay" onClick={handleOverlayClick}>
			<div className="task-create-modal" onClick={(e) => e.stopPropagation()}>
				<div className="modal-buttons">
					<button className="close-btn" onClick={handleCloseClick}>x</button>
				</div>
				<div className="modal-options">
					<input
						className="task-input"
						type="text"
						placeholder="New task"
						value={newTask}
						onChange={handleInputChange}/>
					<div className="input-container">
						<label className="input-label">Description:</label>
						<input
							className="task-input"
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							/>
					</div>
					<div className="input-container">
						<label className="input-label">Due Date:</label>
						<input
							className="task-input"
							type="text"
							value={dueDate}
							onChange={(e) => setDueDate(e.target.value)}
							/>
					</div>
					<button
						className="create-task-btn"
						onClick={handleCreateTask}>
						Create Task
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateTaskPane;