const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskItem: { type: String, required: true },
  person: { type: String },
  priority: { type: String},
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done', 'Blocked', 'Cancelled'],
    default: 'To Do',
  },
  dueDate: { type: Date },
  description: { type: String },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
