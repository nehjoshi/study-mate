import styles from "../../sass/GetStarted.module.scss";
import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import UserContext from "../../context/UserContext";
import axios from "axios";
import AdditionQuestion from "../../components/AdditionQuestion";
export default function Homework() {
    const { user } = useContext(UserContext);
    const [questions, setQuestions] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "HelperCloud | Homework"
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
                let arrayOfQuestions = res.data;
                const shuffled = arrayOfQuestions.sort(() => 0.5 - Math.random());
                let selected = shuffled.slice(0, 10);
                setQuestions(selected);
                console.log(selected)
                setLoading(false);
            })
    }, [])
    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions />
            <div className={styles.container}  style={{margin: "70px auto", width: "80%", padding: "20px 20px"}}>
                <h1 className={styles.heading}><center>Addition</center></h1>
                <div className={styles.questionWrapper} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                    {!loading && questions.map((question, index) => {
                        return <AdditionQuestion question = {question} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}