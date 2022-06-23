import { Navbar } from "../components/Navbar";
import styles from "../sass/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.center}>
                <h1 className={styles.title}>Study Mate</h1>
                <p className={styles.subtitle}>The future of online learning.</p>
                <Link to='/register'><div className={styles.button}>Get Started</div></Link>
            </div>
        </div>
    )
}