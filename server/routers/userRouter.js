
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { protect } = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        res.json(req.user);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//create user
router.post('/', async (req, res) => {
    try {
        
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        })
    }
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        })
    }
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

//change password/email
/*
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
*/
/*
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        //validate
        if (!user) 
            return res.status(400).json({errorMessage: "Error: User not found."});
        
        //delete every goal/event created by user?
        await user.deleteOne();

        res.json(user);
    } catch (err) {
        res.status(400).send();
    }
});
*/
module.exports = router;