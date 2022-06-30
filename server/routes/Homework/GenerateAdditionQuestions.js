const { VerifyToken } = require("../../utils/VerifyToken");
const router = require("express").Router();
const User = require("../../models/User");
const Math = require("../../models/Math");

router.get('/getAdditionQuestions', VerifyToken, async (req, res) => {   // Get 10 questions from the addition box problems
    const user = await Math.findOne({grade: 2});
    return res.send(user.additionNormal)
})

router.get('/getAdditionWordProblems', VerifyToken, async (req, res) => {   // Get 10 questions from the addition word problems set
    const user = await Math.findOne({grade: 2});
    console.log("request")
    return res.send(user.additionWord)
})
module.exports = router;