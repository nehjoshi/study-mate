const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Register = require('./routes/User/Register');
const Login = require('./routes/User/Login');
const GetStarted = require('./routes/User/GetStarted');
const FetchUserDetails = require('./routes/User/FetchUserDetails');
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/users', Register);
app.use('/users', Login);
app.use('/users', GetStarted);
app.use("/users", FetchUserDetails);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
