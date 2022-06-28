const { VerifyToken } = require("../../utils/VerifyToken");
const router = require("express").Router();
const User = require("../../models/User");
const Math = require("../../models/Math");

router.post("/submit-homework-results", async (req, res) => {
    const { correct, incorrect, incorrectArray, points, email } = req.body;
    console.log(correct);
    const user = await User.findOne({ email: req.body.email });
    user.points += points;
    user.numberOfHomeworks += 1;
    user.incorrectQuestionsArray = [...user.incorrectQuestionsArray, ...incorrectArray];
    user.correctQuestions += correct;
    user.incorrectQuestions += incorrect;
    user.accuracy = ((user.correctQuestions / (user.correctQuestions + user.incorrectQuestions)) * 100 ).toFixed(2);
    await user.save();
    return res.send({ success: true });
})
module.exports = router;