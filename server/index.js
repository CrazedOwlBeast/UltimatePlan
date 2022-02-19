const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(
    process.env.MDB_URI,
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to MongoDB");
    }
);


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

app.use('/tasks', require('./routers/taskRouter'));
app.use('/goals', require('./routers/goalRouter'));