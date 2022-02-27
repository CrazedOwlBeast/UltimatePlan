const router = require('express').Router();
const Goal = require('../models/goalModel');
//const User = require('../models/userModel');
const { requiresAuth } = require('express-openid-connect');

router.get('/mygoals', requiresAuth(), async (req, res) => {
    try {
        goals = await Goal.find({ user: req.oidc.user.email });
        res.json(goals);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.get('/feed', requiresAuth(), async (req, res) => {
    try {
        goals = await Goal.find({ user: req.oidc.user.email, addedUsers: req.oidc.user.email });

        //addedgoals = await Goal.find({addedUsers: req.user.id})
        res.json(goals);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.post('/', requiresAuth(), async (req, res) => {
    try {
        const goal = await Goal.create({
            text: req.body.text,
            user: req.oidc.user.email, //username...
            //likes?
        })

        res.json(goal);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//change goal
router.put('/change/:id', requiresAuth(), async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        //validate
        if (!goal) 
            return res.status(400).json({errorMessage: "Error: Goal not found."});
        
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

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json(updatedGoal);
    } catch (err) {
        res.status(400).send();
    }
});

//share goal
router.put('/share/:id', requiresAuth(), async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        //validate
        if (!goal) 
            return res.status(400).json({errorMessage: "Error: Goal not found."});
        
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

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, { 
            '$push': { addedUsers: { '$each': [ req.body.friend ] } } 
        });

        res.json(updatedGoal);
    } catch (err) {
        res.status(400).send();
    }
});

router.delete('/:id', requiresAuth(), async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        //validate
        if (!goal) 
            return res.status(400).json({errorMessage: "Error: Goal not found."});
        
        // Check for user
        // if (!req.user) {
        // res.status(401)
        // throw new Error('User not found')
        // }

        // Make sure the logged in user matches the goal user
        // if (goal.user.toString() !== req.user.id) {
        //     res.status(401)
        //     throw new Error('User not authorized')
        // }
        await goal.deleteOne();

        res.json(goal);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;