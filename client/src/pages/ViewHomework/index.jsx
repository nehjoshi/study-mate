import styles from "../../sass/GetStarted.module.scss";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";


export default function ViewHomework() {
    const { user } = useContext(UserContext);
    const [question, setQuestion] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "HelperCloud | View your Homework";
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