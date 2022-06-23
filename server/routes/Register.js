const mongoose = require('mongoose');
const User = require("../models/User");
const express = require('express');
const router = express.Router();

router.post("/register", async (req, res) => {
    const {firstName, lastName, email, phone, grade} = req.body;
    const exists = await User.findOne({email: email});
    if (exists) return res.status(406).send("User already exists");
    const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        grade
    });
    await user.save()
    .then(() => {
        console.log("Done");
        return res.status(200).json({success: true});
    })
    .catch(err => {
        console.log(err);
        return res.status(500);
    });
})
module.exports = router;