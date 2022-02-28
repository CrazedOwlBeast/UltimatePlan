const router = require('express').Router();
const Task = require('../models/taskModel');
const { requiresAuth } = require('express-openid-connect');

//get tasks
router.get('/', async (req, res) => {
    try {
        tasks = await Task.find({ user: req.body.email }); //to do: by user
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//create task
router.post('/', async (req, res) => {
    try {
        const task = await Task.create({
            text: req.body.text,
            time: req.body.time,
            user: req.body.email
        })

        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//change task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        //validate
        if (!task) 
            return res.status(400).json({errorMessage: "Error: Task not found."});
        
        // Check for user
        // if (!req.user) {
        //     res.status(401)
        //     throw new Error('User not found')
        // }
     
        // Make sure the logged in user matches the goal user
        // if (goal.user.toString() !== req.user.id) {
        //     res.status(401)
        //     throw new Error('User not authorized')
        // }
        
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
        
        // Check for user
        // if (!req.user) {
        //     res.status(401)
        //     throw new Error('User not found')
        //     }
     
        // // Make sure the logged in user matches the goal user
        // if (goal.user.toString() !== req.user.id) {
        //     res.status(401)
        //     throw new Error('User not authorized')
        // }

        await task.deleteOne();

        res.json(task);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;