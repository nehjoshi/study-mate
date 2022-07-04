import styles from "../../sass/GetStarted.module.scss";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Sidebar from "../../components/Sidebar";
import CourseCard from "../../components/CourseCard";
import { FetchDetails } from "../../utils/FetchDetails";
import { CheckIfCompleted } from "./handler";

export default function ViewHomework() {
    const { user } = useContext(UserContext);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        document.title = "StudyMate | View your Homework";
        FetchDetails(user.email, user.token)
            .then(res => {
                CheckIfCompleted(user.email)
                    .then(res => {
                        if (res.data === true) {
                            setCompleted(true);
                        }
                        
                        else {
                            setPendingTasks(res.data);
                        }
                    })
            })
            .catch(err => {
                window.location.href = "/login";
            })
    }, [user.email, user.token])

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions={true} />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Your homework for today</h2>
                    <p >You have {pendingTasks.length} homework(s) left</p>
                </div><br />
                <hr className={styles.divider} />
                <div className={styles.body}>
                    <h4 className={styles.subjectTitle}>Maths - Grade 2</h4>
                    <div className={styles.courseWrapper} >

                        {!completed && pendingTasks.map((task, index) => {
                            return (
                                <CourseCard type={task.type} name={task.name} key={index} grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                            )
                        })}

                    {completed && <p>You have completed all tasks for today!</p>}

                    </div>
                </div>
            </div>
        </div>
    )
}