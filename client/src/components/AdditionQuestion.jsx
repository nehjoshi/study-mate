import styles from "../sass/AdditionQuestion.module.scss";
export default function AdditionQuestion({ question }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.fixedBox}>{question.question.charAt(0)}</div>
                <div className={styles.fixedBox}>{question.question.charAt(1)}</div>
            </div><p className={styles.plus}>+</p>
            <div className={styles.row}>
                <div className={styles.fixedBox}>{question.question.charAt(5)}</div>
                <div className={styles.fixedBox}>{question.question.charAt(6)}</div>
            </div>
            <div className={styles.row}>
            <div className={styles.answerBox}>
                    <input type="number" className={styles.answerInput} />
                </div>
                <div className={styles.answerBox}>
                    <input type="number" className={styles.answerInput} />
                </div>
                <div className={styles.answerBox}>
                    <input type="number" className={styles.answerInput} />
                </div>
            </div>

            </div>
    )
}