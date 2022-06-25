const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();

const VerifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token.');
    }

}
module.exports = { VerifyToken }