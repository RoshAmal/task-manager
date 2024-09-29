const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskItem: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
