const mongoose = require('mongoose');
const User = require("../models/User");
const express = require('express');
const router = express.Router();
const transporter = require('../transporter');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

//This file contains the register route, the email verification route, and the password creation route.

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, phone, grade } = req.body;
    const exists = await User.findOne({ email: email });
    const emailToken = crypto.randomBytes(32).toString('hex');
    if (exists) return res.status(406).send("User already exists");
    const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        grade,
        emailToken
    });
    await user.save()
        .then(() => {
            console.log("Done");
            transporter.sendMail({
                from: "studymate.ca@gmail.com",
                to: email,
                subject: "Welcome to Study-Mate",
                html: `
            <p>Dear User,</p>
            <p>Thank you for registering with Study-Mate. We are glad to have you on board.</p>
            <p>Please click on the link below to verify your email address.</p>
            <p><a href="http://localhost:3000/register/verifyEmail/${emailToken}">Verify Email</a></p>
            <p>Regards,</p>
            <b>The Study-Mate Team</b>
            `
            })
            return res.status(200).json({ success: true });
        })
        .catch(err => {
            console.log(err);
            return res.status(500);
        });
})
router.get("/verifyEmail/:token", async (req, res) => {
    const { token } = req.params;
    const user = await User.findOne({ emailToken: token });
    if (!user) return res.status(404).send("User not found");
    user.isVerified = true;
    console.log(user);
    await user.save()
        .then(() => {
            return res.status(200).send("Email verified");
        })
        .catch(err => {
            console.log(err);
            return res.status(500);
        })
})
router.post("/createPassword/:emailToken", async (req, res) => {
    const { emailToken } = req.params;
    const { password } = req.body;
    const user = await User.findOne({ emailToken: emailToken });
    if (!user) return res.status(404).send("User not found");
    user.password = await bcrypt.hash(password, 10);
    user.emailToken = "";
    await user.save()
        .then(() => {
            return res.status(200).send("Password created");
        })
        .catch(err => {
            console.log(err);
            return res.status(500);
        });
})
module.exports = router;