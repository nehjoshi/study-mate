const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const app = express();
const User = require('./models/User');
const transporter = require('./transporter');
const Register = require('./routes/User/Register');
const Login = require('./routes/User/Login');
const FetchUserDetails = require('./routes/User/FetchUserDetails');
const Enroll = require('./routes/User/Enroll');
const GenerateAdditionQuestions = require('./routes/Homework/GenerateAdditionQuestions');
const GenerateSubtractionQuestions = require('./routes/Homework/GenerateSubtractionQuestions');
const SubmitHomeworkResults = require('./routes/Homework/SubmitHomeworkResults');
const FetchLeaderboard = require('./routes/Leaderboard/FetchLeaderboard');
const CheckIfCompleted = require('./routes/User/CheckIfCompleted');
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/users', Register);
app.use('/users', Login);
app.use("/users", FetchUserDetails);
app.use("/users", CheckIfCompleted);
app.use("/users", Enroll);
app.use('/homework', GenerateAdditionQuestions);
app.use('/homework', GenerateSubtractionQuestions);
app.use('/homework', SubmitHomeworkResults);
app.use('/leaderboard', FetchLeaderboard);

cron.schedule('* * * * *', async () => {
    console.log('Running a task every minute');
    const users = await User.find();
    users.forEach(async (user) => {
        let lastTask = user.tasksCompleted[user.tasksCompleted.length - 1];
        if (lastTask) {
            const dateDiffTask = Math.abs(lastTask.date.getTime() - new Date().getTime());
            const hoursDiffTask = dateDiffTask / (60 * 60 * 1000);
            const dateDiffReminder = Math.abs(user.reminderMailDate.getTime() - new Date().getTime());
            const hoursDiffReminder = dateDiffReminder / (60 * 60 * 1000);
            if (hoursDiffTask > 24 && hoursDiffReminder > 24) {
                transporter.sendMail({
                    from: "studymate.ca@gmail.com",
                    to: user.email,
                    subject: "Welcome to Study-Mate",
                    html: `
                <p>Hi ${user.firstName},</p>
                <p>You have pending homework in your study-mate account. Please <a href="http://localhost:3000">sign in</a> to finish your homework for today!</p>
                <p>Happy Learning!</p>
                <p>The Study-Mate Team</p>
                `
                })
                    .then(res => {
                        console.log("Reminder sent!");
                        user.reminderMailDate = new Date();
                        user.save();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    })

})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
