const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
//const { protect } = require('../middleware/auth');

router.get("/loggedIn", (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
});

router.get("/logout", (req, res) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send();
  });

//create user
router.post("/", async (req, res) => {
    try {
      const { username, email, password} = req.body;
  
      // validation
  
      if (!username || !email || !password)
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });
  
      if (password.length < 6)
        return res.status(400).json({
          errorMessage: "Please enter a password of at least 6 characters.",
        });
  
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({
          errorMessage: "An account with this email already exists.",
        });
  
      // hash the password
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      // save a new user account to the db
  
      const newUser = new User({
        username,
        email,
        password: passwordHash,
      });
  
      const savedUser = await newUser.save();
  
      // sign the token
  
      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWT_SECRET
      );
  
      // send the token in a HTTP-only cookie
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .json({
            username: savedUser.username,
            email: savedUser.email
        })
        .send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
});

//login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
  
      if (!email || !password)
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });
  
      const existingUser = await User.findOne({ email });
      if (!existingUser)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      // sign the token
  
      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWT_SECRET
      );
  
      // send the token in a HTTP-only cookie
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .json({
            username: existingUser.username,
            email: existingUser.email
        })
        .send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });


//change password/email
router.put('/:id', async (req, res) => { 
    try {
        const user = await User.findById(req.params.id);
        //validate
        if (!user) 
            return res.status(400).json({errorMessage: "Error: User not found."});
        
        await User.findByIdAndUpdate(req.params.id, req.body);

        res.json({username: user.username, email: user});
    } catch (err) {
        res.status(400).send();
    }
});


router.delete('/', async (req, res) => {
    try {
        const user = await User.findById(req.body.email);
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

//add friend
router.put('/friend', async (req, res) => {
    try {

        const user = {email: req.body.email};
        
        const updatedUser = await User.findOneAndUpdate(
            user,
            { '$push': { friends: { '$each': [ req.body.friend ] } } },
            { new: true }
        );

        res.json(updatedUser);
    } catch (err) {
        res.status(400).send();
    }
});

//remove friend
router.put('/friend/remove', async (req, res) => {
    try {
        const user = {email: req.body.email};
        
        const updatedUser = await User.findOneAndUpdate(
            user,
            { '$pull': { friends: req.body.friend } },
        );

        res.json(updatedUser);
    } catch (err) {
        res.status(400).send();
    }
});


module.exports = router;