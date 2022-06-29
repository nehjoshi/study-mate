import styles from "../../sass/GetStarted.module.scss";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import CourseCard from "../../components/CourseCard";
import { FetchDetails } from "./handler";
import { CircularProgress } from "@mui/material";


export default function GetStarted() {
    const { user } = useContext(UserContext);
    const [question, setQuestion] = useState({});
    const [client, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "StudyMate | Get Started";
        if (!user){
            window.location.href = "/";
        }
        FetchDetails(user.email, user.token)
            .then(res => {
                setUserInfo(res.data);
                setLoading(false);
            })
            .catch(err => {
                window.location.href = "/login";
            })

    }, [])

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions={true} name={client.firstName + " " + client.lastName} homeworks={client.numberOfHomeworks}/>
            <Sidebar />
            {loading ? <CircularProgress /> :
                <>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2 className={styles.heading}>Choose a course</h2>
                        </div><br />
                        <hr className={styles.divider} />
                        <div className={styles.body}>
                            <h4 className={styles.subjectTitle}>Maths - Grade 2</h4>
                            <div className={styles.courseWrapper}>
                                <CourseCard type="addition" enrolled={false} name="Addition" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard type="subtraction" enrolled={true} name="Subtraction" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Multiplication" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Division" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Percentages" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                            </div>
                            <h4 className={styles.subjectTitle}>Science - Grade 2</h4>
                            <div className={styles.courseWrapper}>
                                <CourseCard name="Animals" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Light" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Light" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                                <CourseCard name="Light" grade="2" desc="A course for learning basic maths - addition, subtraction and multiplication" />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}