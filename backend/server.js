const express = require('express');
const mongoose = require('mongoose');
const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
	console.log('Server is running');
});