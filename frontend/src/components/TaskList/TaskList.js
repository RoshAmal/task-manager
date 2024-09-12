import React, {useState} from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks,setTask] = useState([
    { index: 1, taskItem: 'Clean room' },
    { index: 2, taskItem: 'Go to Gym' },
    { index: 3, taskItem: 'Cook breakfast' }
  ]);

  return (
    <div>
      <h4 className="task-list-heading">Task List</h4>
      <div>
        {tasks.map(task => (
          <div key={task.index} className="task-card">
            <h5>{task.taskItem}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;