import { useEffect } from "react";
import { useState } from "react";
import styles from "../sass/AdditionQuestion.module.scss";
import { useContext } from "react";
import HomeworkContext from "../context/HomeworkContext";
export default function AdditionQuestion({ question, qno, hideAnswerBoxes, op }) { //This same component is used for subtraction as well
    const [unitPlace, setUnitPlace] = useState(0);
    const [tenPlace, setTenPlace] = useState(0);
    const [hundredPlace, setHundredPlace] = useState(0);
    const [answer, setAnswer] = useState("");
    const { updateHomework } = useContext(HomeworkContext);
    useEffect(() => {
        document.addEventListener("wheel", (event) => {
            if (document.activeElement.type === "number") {
                document.activeElement.blur();
            }
        });
        if (answer !== "000") {
            updateHomework(qno, answer);
        }
    }, [answer, qno, updateHomework])

    const handleChange = (e, key) => {
        if (key === "unit") {
            setUnitPlace(e.target.value);
            let answer = hundredPlace.toString() + tenPlace.toString() + e.target.value.toString();
            if (answer.charAt(0) === "0" || answer.charAt(0) === "") {
                if (answer.charAt(1) === "0" || answer.charAt(1) === "") {
                    answer = answer.charAt(2);
                }
                else {
                    answer = answer.charAt(1) + answer.charAt(2);
                }
            }

            setAnswer(answer);
        }
        else if (key === "ten") {
            setTenPlace(e.target.value);
            let answer = hundredPlace.toString() + e.target.value.toString() + unitPlace.toString();
            if (answer.charAt(0) === "0" || answer.charAt(0) === "") {
                if (answer.charAt(1) === "0" || answer.charAt(1) === "") {
                    answer = answer.charAt(2);
                }
                else {
                    answer = answer.charAt(1) + answer.charAt(2);
                }
            }
            setAnswer(answer);
        }
        else if (key === "hundred") {
            setHundredPlace(e.target.value);
            let answer = e.target.value.toString() + tenPlace.toString() + unitPlace.toString();
            if (answer.charAt(0) === "0" || answer.charAt(0) === "") {
                if (answer.charAt(1) === "0" || answer.charAt(1) === "") {
                    answer = answer.charAt(2);
                }
                else {
                    answer = answer.charAt(1) + answer.charAt(2);
                }
            }
            setAnswer(answer);
        }

    }
    return (
        <div className={styles.wrapper}>
            {!hideAnswerBoxes && <p className={styles.questionNumber}>{qno + 1}.</p>}
            {!hideAnswerBoxes && <p className={styles.points}>Points for this question: {question.value}</p>}
            <div className={styles.row}>
                <div className={styles.fixedBox}>{question.question.charAt(0)}</div>
                <div className={styles.fixedBox}>{question.question.charAt(1)}</div>
            </div><p className={styles.plus}>{op}</p>
            <div className={styles.row}>
                <div className={styles.fixedBox}>{question.question.charAt(5)}</div>
                <div className={styles.fixedBox}>{question.question.charAt(6)}</div>
            </div>
            {hideAnswerBoxes &&
                <>
                    <p>Your answer: {question.clientAnswer}</p>
                    <p>Correct Answer: {question.answer}</p>
                </>
            }
            {!hideAnswerBoxes &&
                <div className={styles.row}>
                    <div className={styles.answerBox}>
                        <input type="number" className={styles.answerInput} onChange={(e) => handleChange(e, "hundred")} />
                    </div>
                    <div className={styles.answerBox}>
                        <input type="number" className={styles.answerInput} onChange={(e) => handleChange(e, "ten")} />
                    </div>
                    <div className={styles.answerBox}>
                        <input type="number" className={styles.answerInput} onChange={(e) => handleChange(e, "unit")} />
                    </div>
                </div>
            }

        </div>
    )
}