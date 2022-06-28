import styles from "../sass/CourseCard.module.scss";
import { BsFileEarmarkText } from "react-icons/bs";
export default function CourseCard ({ name, desc }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <BsFileEarmarkText className={styles.icon} />
            </div>
            <div className={styles.body}>
                <h4 className={styles.title}>{name}</h4>
                <p className={styles.description}>{desc}</p>
            </div>
        </div>
    )
}