const router = require('express').Router();
const Task = require('../models/taskModel');

router.get('/', async (req, res) => {
    try {
        tasks = await Task.find(); //to do: by user
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.post('/', async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            text: req.body.text,
            time: req.body.time
            //userid?
        })

        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        //validate
        if (!task) 
            return res.status(400).json({errorMessage: "Error: Task not found."});
        
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json(updatedTask);
    } catch (err) {
        res.status(400).send();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        //validate
        if (!task) 
            return res.status(400).json({errorMessage: "Error: Task not found."});
        
        await task.deleteOne();

        res.json(task);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;