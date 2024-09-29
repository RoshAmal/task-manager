import React, {useState} from 'react';
import './CreateTaskPane.css';
import axios from 'axios';
const CreateTaskPane = ({ onTaskCreated, onClose }) => {
	const [newTask,setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [status, setStatus] = useState('To Do');

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
				status,
			});
			if (response.status === 201) {
				setNewTask('');
				setDescription('');
				setDueDate('');
				setStatus('To Do');
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
							type="date"
							value={dueDate}
							onChange={(e) => setDueDate(e.target.value)}
							/>
					</div>
					<div className="input-container">
						<label className="input-label">Status:</label>
						<select
							className="task-input"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							>
							<option value="To Do">To Do</option>
							<option value="In Progress">In Progress</option>
							<option value="Done">Done</option>
							<option value="Blocked">Blocked</option>
							<option value="Cancelled">Cancelled</option>
						</select>
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