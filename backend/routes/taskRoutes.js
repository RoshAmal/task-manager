const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.post('/api/tasks', async (req, res) => {
  const { taskItem, description, dueDate, status } = req.body;
  const newTask =new Task({ taskItem, description, dueDate, status });
  try {
    await newTask.save();
    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
});

router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

router.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { taskItem } = req.body;
  try{
    const updatedTask = await Task.findByIdAndUpdate(id, { taskItem }, { new: true });
    if (!updatedTask)
      return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
});

router.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
