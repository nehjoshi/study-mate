import styles from "../sass/CourseCard.module.scss";
import { BsFileEarmarkText } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"
import { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function CourseCard({ name, desc, type, enrolled }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        user.enrolledCourses.map(course => {
            if (course.type === type) {
                setSuccess(true);
            }
        })
    }, [enrolled])
    const Enroll = async () => {
        await axios.post("http://localhost:5000/users/enroll", {
            email: user.email,
            type, name
        })
        .then(res => {
            if (res.data===true) {
                enrolled = true;
                setSuccess(true);
                alert("Enrolled Successfully");
            }
        })
    }

    return (
        <div className={styles.wrapper} >
            <div className={styles.iconWrapper}>
                <BsFileEarmarkText className={styles.icon} />
            </div>
            <div className={styles.body}>
                <h4 className={styles.title}>{name}</h4>
                <p className={styles.description}>{desc}</p>
            </div>
            {window.location.href === "http://localhost:3000/getStarted" ?
                <div className={styles.footer}>
                    {enrolled || success ? <Button fullWidth className={styles.buttonGreen}>Already Enrolled</Button>
                        :
                        <Button fullWidth className={styles.button} onClick={Enroll}>Enroll now</Button>
                    }
                </div>
                :
                <div className={styles.footer}>
                    <Button onClick={() => navigate(`/homework/${type}-grade-2`)} fullWidth className={styles.buttonGreen}>Start</Button>
                </div>
            }
        </div>
    )
}