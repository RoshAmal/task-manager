import React, {useState} from 'react';
import './CreateTaskPane.css';

const CreateTaskPane = () => {
	const [newTask,setNewTask] = useState('');
	const handleInputChange = (e) => {
		console.log('Input changed:', e.target.value);
		setNewTask(e.target.value);
	};
	const handleCreateTask = () => {
		console.log('New task:',newTask);
		if (newTask.trim()==='') return;
		console.log('Task Created:', newTask);
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