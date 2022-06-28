const mongoose = require('mongoose');
const User = require("../../models/User");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { GenerateToken } = require('../../utils/GenerateToken');

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(401).send("The given email address does not exist")
    }
    else {
        const decrypted = await bcrypt.compare(password, user.password);
        if (decrypted) {
            if (user.isVerified) {
                const token = GenerateToken(user._id);
                return res.status(200).json({user: user, token: token});
            }
            else return res.status(401).send("Please check your email to complete your registration")
        }
        else return res.status(401).send("The password you have entered is incorrect")
    }
})
module.exports = router;