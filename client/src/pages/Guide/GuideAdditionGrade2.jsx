import { Navbar } from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "../../sass/Guide.module.scss";
import img1 from "../../images/addition_guide_1.png"
export default function GuideAdditionGrade2() {
    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>A Simple Guide to Addition</h2>
                    <p className={styles.subheading}>Read this guide to improve your addition skills.</p>
                </div><br />
                <hr className={styles.divider} />
                <div className={styles.body}>
                    <h4 className={styles.heading}>What is Addition?</h4>
                    <ul>
                        <li><p>Addition is the process of adding two numbers together. It is a simple process, and it is one of the most important skills in any math class.</p></li>
                        <li><p>For example, if there are 5 students in a classroom, and 5 more arrive, there will be a total of 10 students in the class.</p></li>
                    </ul>
                    <h4 className={styles.heading}>Number Line Addition</h4>
                    <img src={img1} className={styles.img1}/>
                    <p>In the above illustration, we are trying to calculate what the result would be if we add 5 to 3. Using the number-line, we can go up 5 steps starting from 3. We go from 3 to 4 (first step), then 4 to 5 (second step), then 5 to 6 (third step), 6 to 7 (fourth step) and finally 7 to 8 (last step). What number have we landed on? We have landed on 8 - and that is our answer! </p>
                    <p className={styles.result}>Thus, we can conclude that 3 + 5 = 8</p>
                </div>
            </div>
        </div>
    )
}