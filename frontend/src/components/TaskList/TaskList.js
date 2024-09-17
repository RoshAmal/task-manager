import React, {useEffect, useState} from 'react';
import './TaskList.css';
import axios from 'axios';
import TaskDetails from '../TaskDetails/TaskDetails';

const TaskList = ({ refreshTasks }) => {
  const [tasks,setTask] = useState([]);
  const [selectedTask,setSelectedTask] = useState(false);

  const listTasks = async () => {
    try{
      const response = await axios.get('http://localhost:5000/api/tasks');
      if (response.status === 200)
        setTask(response.data)
    } catch(error){
      console.error('Error listing tasks:', error);    
    }
  };

  useEffect(()=>{
      listTasks();
    },[refreshTasks]);

  const handleViewTask = (task) => {
    setSelectedTask(task)
  };
  
  return (
    <div>
      <h4 className="task-list-heading">Task List</h4>
      <div>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} 
              className="task-card"
              onClick={()=>handleViewTask(task)}>
              <h5>{task.taskItem}</h5>
            </div>
          ))
        )
        :
        <p>No tasks found</p>
        }
      </div>
      { selectedTask && <TaskDetails task={selectedTask} /> }
    </div>
  );
};

export default TaskList;