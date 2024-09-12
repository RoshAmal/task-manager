import React, {useState} from 'react';
import './CreateTaskPane.css';

const CreateTaskPane = () => {
	const [newTask,setNewTask] = useState([]);
	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};
	const handleCreateTask = () => {
		if (newTask.trim()==='') return;
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
			onChange={handleCreateTask}>
			Create Task
		</button>
		</div>
	);
};

export default CreateTaskPane;