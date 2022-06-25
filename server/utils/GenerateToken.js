const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const GenerateToken = (userId) => {
    return jwt.sign({userId: userId}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
module.exports = { GenerateToken };