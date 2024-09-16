const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes')

const app = express();

app.use(cors());

mongoose.connect(
	'mongodb://localhost:27017/taskmanager',{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(()=>console.log('MongoDB connected'))
	.catch(err => console.error('MongoDB connection error:',err));

app.use(express.json());

app.use('/', taskRoutes);
app.get('/',(req,res)=>{
	res.send('Task Manager API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
	console.log('Server is running');
});