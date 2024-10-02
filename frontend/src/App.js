import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import CreateTask from './components/CreateTask/CreateTask';

function App() {
  const [refreshTasks, setRefreshTasks]=useState(false);
  const [showTaskCreationModal, setShowTaskCreationModal]=useState(false);

  const handleTaskCreated = () => {
    setRefreshTasks(prev => !prev);
  };

  const toggleTaskCreationModal = () => {
    setShowTaskCreationModal(!showTaskCreationModal);
  };

  return (
    <div>
      <button onClick={toggleTaskCreationModal}>New Task</button>
      {
        showTaskCreationModal &&
        <CreateTask onTaskCreated={handleTaskCreated} onClose={toggleTaskCreationModal}/>  
      }
      <TaskList refreshTasks={refreshTasks}/>
    </div>
  );
}

export default App;
