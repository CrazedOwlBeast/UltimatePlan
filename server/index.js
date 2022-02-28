const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
//const { auth } = require('express-openid-connect');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}));

mongoose.connect(
    process.env.MDB_URI,
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to MongoDB");
    }
);

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   issuerBaseURL: process.env.ISSUER_BASE_URL,
// };

// auth router attaches /login, /logout, and /callback routes to the baseURL
//app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.user.email);
// });

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

app.use('/tasks', require('./routers/taskRouter'));
app.use('/goals', require('./routers/goalRouter'));
app.use('/users', require('./routers/userRouter'));