// routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task({ taskItem: req.body.taskItem });
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

module.exports = router;
