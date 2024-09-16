const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const taskSchema = new mongoose.Schema({
	taskItem: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);

app.use(cors());

mongoose.connect(
	'mongodb://localhost:27017/taskmanager',{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(()=>console.log('MongoDB connected'))
	.catch(err => console.error('MongoDB connection error:',err));

app.use(express.json());
app.get('/',(req,res)=>{
	res.send('Task Manager API is running');
});

app.post('/api/tasks', async (req,res) => {
	try {
		console.log("reached");
		const newTask = new Task({ taskItem: req.body.taskItem });
		await newTask.save();
		res.status(201).json({ message: 'Task created successfully', task: newTask });
	} catch (error) {
		res.status(500).json({ message: 'Error creating task', error });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
	console.log('Server is running');
});