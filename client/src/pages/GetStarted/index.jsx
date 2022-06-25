import styles from "../../sass/GetStarted.module.scss";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";


export default function GetStarted() {
    const { user } = useContext(UserContext);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        console.log("TOken from get started", user.token)
        const config = {
            headers: {
                "Authorization": `${user.token}`
            }
        }
        axios.post("http://localhost:5000/users/getStarted", {
            email: user.email
        }, config)
        .then(res => {
            setQuestion(res.data[0])
            console.log(res.data[0])
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.box} style={{marginTop: "100px"}}>
            <h1 className={styles.heading}>{question.question.charAt(0)}</h1>
            <h1 className={styles.heading}>{question.question.charAt(1)}</h1>
            <h1 className={styles.heading}>+</h1>
            <h1 className={styles.heading}>{question.question.charAt(5)}</h1>
            <h1 className={styles.heading}>{question.question.charAt(6)}</h1>
            </div>
        </div>
    )
}