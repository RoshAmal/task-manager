import React, {useEffect, useState} from 'react';
import './TaskList.css';
import axios from 'axios';
import TaskDetails from '../TaskDetails/TaskDetails';

const TaskList = ({ refreshTasks }) => {
  const [tasks,setTask] = useState([]);
  const [selectedTask,setSelectedTask] = useState(null);

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
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  const saveTask = async (updatedTask) => {
    try{
      const response = await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`,{
        taskItem: updatedTask.taskItem,
      });
      if (response.status === 200)
        setTask(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  
  const deleteTask = async (taskToDelete) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/tasks/${taskToDelete._id}`);
      if (response.status === 200) {
        setTask(tasks.filter(task => task._id !== taskToDelete._id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
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
      { selectedTask && (
          <TaskDetails task={selectedTask}
            onClose={closeTaskDetails}
            onSave={saveTask}
            onDelete={deleteTask}/>
        )
      }
    </div>
  );
};

export default TaskList;