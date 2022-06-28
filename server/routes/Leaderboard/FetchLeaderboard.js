const User = require('../../models/User');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const users = await User.find({});
    const sortedUsers = users.sort((a, b) => b.points - a.points);
    console.log(sortedUsers);
    return res.send(sortedUsers);
})
module.exports = router;