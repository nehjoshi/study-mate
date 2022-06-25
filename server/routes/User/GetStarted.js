const { VerifyToken } = require("../../utils/VerifyToken");
const router = require("express").Router();
const User = require("../../models/User");
const Math = require("../../models/Math");

router.post('/getStarted', VerifyToken, async (req, res) => {
    const user = await Math.findOne({grade: 2});
    console.log(user);
    return res.send(user.additionNormal)
})
module.exports = router;