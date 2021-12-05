const Task = require('../models/tasks')
const express = require('express')
const router = express.Router()

router.post("/", async (req, res)=>{
    try{
        const task = await new Task(req.body).save();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(task);
    }
    catch(error){
        res.send(error)
    }
})

router.get('/', async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(tasks)
    }
    catch(error){
        res.send(error)
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
    }
    catch(error){
        res.send(error)
    }
})

router.delete("/:id", async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.send(task)
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router;