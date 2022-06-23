const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Register = require('./routes/Register');
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/users', Register);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
