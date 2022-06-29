const User = require('../../models/User');
const router = require('express').Router();

router.post("/enroll", async (req, res) => {
    const { email, type, name } = req.body;
    const user = await User.findOne({ email });
    user.enrolledCourses.push({
        type, name
    })
    await user.save()
    .then(() => {
        res.send(true)
    })
    .catch(err => {
        console.log(err);
    })

});
module.exports = router;