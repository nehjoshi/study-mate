const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Register = require('./routes/User/Register');
const Login = require('./routes/User/Login');
const FetchUserDetails = require('./routes/User/FetchUserDetails');
const GenerateAdditionQuestions = require('./routes/Homework/GenerateAdditionQuestions');
const SubmitHomeworkResults = require('./routes/Homework/SubmitHomeworkResults');
const FetchLeaderboard = require('./routes/Leaderboard/FetchLeaderboard');
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/users', Register);
app.use('/users', Login);
app.use("/users", FetchUserDetails);
app.use('/homework', GenerateAdditionQuestions);
app.use('/homework', SubmitHomeworkResults);
app.use('/leaderboard', FetchLeaderboard);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
