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
    const { user, addUser } = useContext(UserContext);
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
                                <CourseCard type="additionNormal" enrolled={false} name="2 Digit Simple Addition" grade="2" desc="Practice simple 2 digit addition questions." />
                                <CourseCard type="additionWord" enrolled={false} name="Addition Word Problems" grade="2" desc="Practice addition-based word problems." />
                                <CourseCard type="subtractionNormal" enrolled={true} name="2 Digit Simple Subtraction" grade="2" desc="Practice simple 2 digit subtraction questions." />
                                <CourseCard type="subtractionWord" enrolled={false} name="Subtraction Word Problems" grade="2" desc="Practice subtraction word problems." />
                                <CourseCard type="mixedAdditionSubtraction" name="Mixed Addition and Subtraction" grade="2" desc="Practice a combination of addition and subtraction problems." />
                                <CourseCard type="multiplicationNormal" name="Single Digit Multiplication" grade="2" desc="Practice your single digit multiplication skills with this module." />
                                <CourseCard type="multiplicationWord" name="Multiplication Word Problems" grade="2" desc="Practice word problems related to multiplication." />
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