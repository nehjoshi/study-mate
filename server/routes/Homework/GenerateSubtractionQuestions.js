const { VerifyToken } = require("../../utils/VerifyToken");
const router = require("express").Router();
const User = require("../../models/User");
const Math = require("../../models/Math");

router.get('/getSubtractionQuestions', VerifyToken, async (req, res) => {
    const user = await Math.findOne({grade: 2});
    return res.send(user.subtractionNormal)
})
router.get('/getSubtractionWordProblems', VerifyToken, async (req, res) => {   // Get 10 questions from the addition word problems set
    const user = await Math.findOne({grade: 2});
    console.log("request")
    return res.send(user.subtractionWord)
})
module.exports = router;