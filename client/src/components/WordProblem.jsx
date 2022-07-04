import { useEffect, useState, useContext } from "react";
import styles from "../sass/WordProblem.module.scss";
import HomeworkContext from "../context/HomeworkContext";

export default function WordProblem({ question, qno, hideInput, op}) {
    const { updateHomework } = useContext(HomeworkContext);
    const [answer, setAnswer] = useState("");
    useEffect(() => {
        if (answer !== "") {
            updateHomework(qno, answer);
        }
    }, [answer, qno, updateHomework])
    return (
        <div className={styles.wrapper}>
            {!hideInput && <p className={styles.questionNumber}>{qno + 1}.</p>}
            {!hideInput && <p className={styles.points}>Points for this question: {question.value}</p>}
            <h3 className={styles.question}>{question.question}</h3>
            <div className={styles.optionsWrapper}>
                <label className={styles.label}>{question.option1}</label>
                <input type="radio" disabled={hideInput} value={question.option1} className={styles.input} checked={answer===question.option1} onChange={e => setAnswer(e.target.value.toString())}/>
                <label className={styles.label}>{question.option2}</label>
                <input type="radio" disabled={hideInput} value={question.option2} className={styles.input} checked={answer===question.option2} onChange={e => setAnswer(e.target.value.toString())}/>
                <label className={styles.label}>{question.option3}</label>
                <input type="radio" disabled={hideInput} value={question.option3} className={styles.input} checked={answer===question.option3} onChange={e => setAnswer(e.target.value.toString())}/>
                <label className={styles.label}>{question.option4}</label>
                <input type="radio" disabled={hideInput} value={question.option4} className={styles.input} checked={answer===question.option4} onChange={e => setAnswer(e.target.value.toString())}/>
            </div>
            {hideInput && <p>Your answer: {question.clientAnswer || "No Answer"}</p>}
            {hideInput && <p>Correct answer: {question.answer}</p>}
        </div>
    )
}
    