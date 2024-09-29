const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskItem: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done', 'Blocked', 'Cancelled'],
    default: 'To Do',
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
