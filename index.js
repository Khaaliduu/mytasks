import express from 'express';
import mongoose from 'mongoose';
import Tasks from './models/tasksModel.js';


const app=express()
app.use(express.json())
const port = 5555;



app.get('/', async(req,res)=>{
    const  tasks = await Tasks.find()

    res.status(200).json(tasks)
})



app.post('/', async(req,res)=>{
    const { title, date, finished } = req.body;
    
    const newTask = new Tasks({
        title, date, finished
    });

    const task = await newTask.save();

    res.status(201).json(task)



})



app.put('/:id',async(req,res)=>{
    const { title,date, finished} =req.body;
    
    const task = await Tasks.findById(req.params.id)

    if (task) {
        task.title = title
        task.date = date
        task.finished = finished
        const updateTask = await task.save();

        
    res.status(200).json(updateTask)
    }



})





app.delete('/:id',async(req,res)=>{
    const task = await Tasks.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "task deleted"})

})




app.listen(port, ()=>{
    console.log(`server is runnig on port ${port}`);
})



mongoose.connect('mongodb+srv://qaalidcabdiraxincabdulaahi:qaalidcabdiraxincabdulaahi@cluster0.iwtz7.mongodb.net/mytasks?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connect to Datebase');
}).catch((e)=>{
    console.log(e)})