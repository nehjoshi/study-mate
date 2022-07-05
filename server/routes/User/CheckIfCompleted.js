const User = require("../../models/User");
const router = require("express").Router();

router.get("/check-if-completed/:email", async (req, res) => {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    let listOfTasks = [];
    let typeList = [];
    if (user.tasksCompleted.length === 0 && user.enrolledCourses.length === 0) {
        return res.send("No tasks completed");
    }
    else {
        user.tasksCompleted.reverse().forEach(task => {
            const dateDiff = Math.abs(task.date.getTime() - new Date().getTime());
            const hoursDiff = dateDiff / (60 * 60 * 1000);

            if (hoursDiff > 24 && !typeList.includes(task.type)) {
                listOfTasks = [...listOfTasks, task];
                typeList = [...typeList, task.type];
            }
            else if (hoursDiff < 24 && !typeList.includes(task.type)) { typeList = [...typeList, task.type]; }
            else {
            }
        })
    }
    user.enrolledCourses.map(course => {
        if (!typeList.includes(course.type)) {
            listOfTasks = [...listOfTasks, {
                type: course.type,
                name: course.name,
                date: new Date()
            }]
        }
    })
    if (listOfTasks.length === 0) {
        return res.send(true)
    }
    return res.send(listOfTasks);


})
module.exports = router;