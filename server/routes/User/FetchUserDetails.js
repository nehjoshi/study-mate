const User = require('../../models/User');
const { VerifyToken } = require("../../utils/VerifyToken");
const router = require('express').Router();

router.get("/fetch-user-details/:email", VerifyToken, async (req, res) => {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    if (user) {
       return res.send(user);
    } else {
        return res.status(404).json({ message: "User not found" });
    }
})
module.exports = router;