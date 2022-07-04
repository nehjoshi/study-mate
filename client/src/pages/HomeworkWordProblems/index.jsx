import styles from "../../sass/GetStarted.module.scss";
import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import UserContext from "../../context/UserContext";
import HomeworkContext from "../../context/HomeworkContext";
import { Button } from "@mui/material";
// import { EvaluateAnswers, GetQuestions, PostAnswers } from "./handler";
import ResultPopup from "../../components/ResultPopup";
import { GetQuestions, PostAnswers, EvaluateAnswers } from "./handler";
import WordProblem from "../../components/WordProblem";

export default function HomeworkWordProblems({ op }) {
    const { user } = useContext(UserContext);
    const { setOriginalQuestions, homework } = useContext(HomeworkContext);
    const [questions, setQuestions] = useState({});
    const [loading, setLoading] = useState(true);
    const [popup, setPopup] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [incorrectArray, setIncorrectArray] = useState([]);
    const [points, setPoints] = useState(0);
    

    useEffect(() => {
        document.title = "Study Mate | Homework";
        const config = {
            headers: {
                "Authorization": user.token
            }
        }
        GetQuestions(config, op)
            .then(res => {
                let arrayOfQuestions = res.data;
                console.log(res);
                const shuffled = arrayOfQuestions.sort(() => 0.5 - Math.random());
                let selected = shuffled.slice(0, 10);
                setQuestions(selected);
                setOriginalQuestions(selected);
                setLoading(false);
            })

    }, [user.token, op]);

    const SubmitAnswers = () => {
        const { correct, incorrect, incorrectArray, points } = EvaluateAnswers(homework);
        console.log("Number of correct answers: ", correct);
        setCorrect(correct);
        setIncorrect(incorrect);
        setIncorrectArray(incorrectArray);
        setPoints(points);
        setPopup(true);
        let type = op === "+" ? "additionWord" : "subtractionWord";
        let name = op === "+" ? "Addition Word Problems" : "Subtraction Word Problems";
        PostAnswers(correct, incorrect, incorrectArray, points, user.email, user, type, name);

    }

    return (
        <div className={styles.wrapper} >
            <Navbar hideExtraOptions />
            <div className={styles.container} style={{ margin: "70px auto", width: "80%", padding: "20px 20px" }}>
                <h1 className={styles.heading}><center>{op === "+" ? "2 Digit Addition" : "2 Digit Subtraction"}</center></h1>
                <p className={styles.subheading}><center>Answer the following 10 questions in the boxes provided.</center></p>
                <div className={styles.questionWrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {!loading && questions.map((question, index) => {
                        return <WordProblem op={op} question={question} key={index} qno={index} />
                    })}
                </div>
                <Button size="large" variant="contained" color="primary" style={{ margin: "20px auto" }} onClick={SubmitAnswers}>Submit</Button>
            </div>
            {popup &&
                <ResultPopup correct={correct} incorrect={incorrect} incorrectArray={incorrectArray} points={points} />
            }
        </div>


    )
}