import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import CreateTaskPane from './components/CreateTaskPane/CreateTaskPane';

function App() {
  const [refreshTasks, setRefreshTasks]=useState(false);
  const [showTaskCreationModal, setShowTaskCreationModal]=useState(false);

  const handleTaskCreated = () => {
    setRefreshTasks(prev => !prev);
  };

  const onNewTaskClick = () => {
    setShowTaskCreationModal(!showTaskCreationModal);
  };

  return (
    <div>
      <button onClick={onNewTaskClick}>New Task</button>
      {
        showTaskCreationModal &&
        <CreateTaskPane onTaskCreated={handleTaskCreated}/>  
      }
      <TaskList refreshTasks={refreshTasks}/>
    </div>
  );
}

export default App;
