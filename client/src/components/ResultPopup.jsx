import { Button } from "@mui/material";
import styles from "../sass/Result.module.scss";
import { useNavigate } from "react-router-dom";
export default function ResultPopup({ correct, incorrect, points, time }) {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <h1 className={styles.title}>Results</h1>
                <p className={styles.subtitle}>See how you performed!</p>
                <div className={styles.result}>
                    <div className={styles.row}>
                        <p className={styles.label} style={{ color: "green" }}>Correct </p>
                        <p className={styles.label}>{correct}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.label} style={{ color: "red" }}>Inorrect </p>
                        <p className={styles.label}>{incorrect}</p>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.label} style={{ color: "blue" }}>Points earned </p>
                        <p className={styles.label}>{points}</p>
                    </div>
                </div><br />
                <p className={styles.subtitle}>Your responses have been saved and you may review your incorrect answers in the review section.</p>
                <Button className={styles.button} size="large" variant="contained" onClick={() => navigate("/getStarted")}>Finish</Button>
            </div>
        </div>
    )
}