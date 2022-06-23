const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
