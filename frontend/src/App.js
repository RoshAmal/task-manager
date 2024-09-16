import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import CreateTaskPane from './components/CreateTaskPane/CreateTaskPane';

function App() {
  const [refreshTasks, setRefreshTasks]=useState(false);

  const handleTaskCreated = () => {
    setRefreshTasks(prev => !prev);
  };
  return (
    <div>
      <CreateTaskPane onTaskCreated={handleTaskCreated}/>
      <TaskList refreshTasks={refreshTasks}/>
    </div>
  );
}

export default App;
