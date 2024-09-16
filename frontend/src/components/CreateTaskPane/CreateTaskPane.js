import React, {useState} from 'react';
import './CreateTaskPane.css';
import axios from 'axios';
const CreateTaskPane = () => {
	const [newTask,setNewTask] = useState('');
	const handleInputChange = (e) => {
		console.log('Input changed:', e.target.value);
		setNewTask(e.target.value);
	};
	const handleCreateTask = async () => {
		console.log('New task:',newTask);
		if (newTask.trim()==='') return;
		try{
			const response = await axios.post('http://localhost:5000/api/tasks', {
				taskItem: newTask,
			});
			if (response.status === 201) {
				console.log('Task Created:', response.data.task);
				setNewTask('');
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