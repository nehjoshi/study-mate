import styles from "../../sass/GetStarted.module.scss";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Sidebar from "../../components/Sidebar";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { FetchDetails } from "../../utils/FetchDetails";

export default function ViewHomework() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "StudyMate | View your Homework";
        FetchDetails(user.email, user.token)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                window.location.href = "/login";
            })
    })

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions={true} />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Your homework for today</h2>
                </div><br />
                <hr className={styles.divider} />
                <div className={styles.body}>
                    <h4 className={styles.subjectTitle}>Maths - Grade 2</h4>
                    <div className={styles.courseWrapper} onClick={() => navigate('/homework/addition-grade-2')}>
                        <CourseCard name="Addition" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />

                    </div>
                </div>
            </div>
        </div>
    )
}