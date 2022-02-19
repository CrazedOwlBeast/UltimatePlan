const router = require('express').Router();
const Event = require('../models/eventModel');

router.get('/', async (req, res) => {
    try {
        events = await Event.find(); //to do: by user
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.post('/', async (req, res) => {
    try {
        const event = await Event.create({
            title: req.body.title,
            text: req.body.text,
            time: req.body.time
            //userid?
        })

        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(400).send();
    }
});

router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        //validate
        if (!event) 
            return res.status(400).json({errorMessage: "Error: Event not found."});
        
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json(updatedEvent);
    } catch (err) {
        res.status(400).send();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        //validate
        if (!event) 
            return res.status(400).json({errorMessage: "Error: Event not found."});
        
        await event.deleteOne();

        res.json(event);
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;