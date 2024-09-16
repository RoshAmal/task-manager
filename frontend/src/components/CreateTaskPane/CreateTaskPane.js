import React, {useState} from 'react';
import './CreateTaskPane.css';
import axios from 'axios';
const CreateTaskPane = ({ onTaskCreated }) => {
	const [newTask,setNewTask] = useState('');
	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};
	const handleCreateTask = async () => {
		if (newTask.trim()==='') return;
		try{
			const response = await axios.post('http://localhost:5000/api/tasks', {
				taskItem: newTask,
			});
			if (response.status === 201) {
				setNewTask('');
				onTaskCreated();
			}
		} catch(error){
			console.error('Error creating task:', error);
		}
		setNewTask('');
	};
	return (
		<div>
		<input
			className="task-input"
			type="text"
			placeholder="Enter a new task"
			value={newTask}
			onChange={handleInputChange}/>
		<button
			className="create-task-btn"
			onClick={handleCreateTask}>
			Create Task
		</button>
		</div>
	);
};

export default CreateTaskPane;