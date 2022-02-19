const router = require('express').Router();
const Goal = require('../models/goalModel');

router.get('/', async (req, res) => {
    try {
        goals = await Goal.find();
        res.json(goals);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.post('/', async (req, res) => {
    try {
        const goal = await Goal.create({
            text: req.body.text,
            //userid?
        })

        res.json(goal);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.put('/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        //validate
        if (!goal) 
            return res.status(400).json({errorMessage: "Error: Goal not found."});
        
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json(updatedGoal);
    } catch (err) {
        res.status(400).send();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        //validate
        if (!goal) 
            return res.status(400).json({errorMessage: "Error: Goal not found."});
        
        await goal.deleteOne();

        res.json(goal);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;