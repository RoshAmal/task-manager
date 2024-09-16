import React, {useEffect, useState} from 'react';
import './TaskList.css';
import axios from 'axios';

const TaskList = ({ refreshTasks }) => {
  const [tasks,setTask] = useState([]);

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
  
  return (
    <div>
      <h4 className="task-list-heading">Task List</h4>
      <div>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="task-card">
              <h5>{task.taskItem}</h5>
            </div>
          ))
        )
        :
        <p>No tasks found</p>
        }
      </div>
    </div>
  );
};

export default TaskList;