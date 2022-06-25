import { Link } from "react-router-dom";
import styles from "../sass/Global.module.scss";
import { useContext } from "react";
import UserContext from "../context/UserContext";
export const Navbar = () => {
    const { user } = useContext(UserContext);
    return (
        <nav className={styles.wrapper}>
            <Link to="/"><h2 className={styles.logo}>Study Mate</h2></Link>
            <div className={styles.centerLinks}>
                <p className={styles.navLink}><Link to="/register">Register</Link></p>
                <p className={styles.navLink}><Link to="/login">Login</Link></p>
                <p className={styles.navLink}><Link to="/register">About</Link></p>
                {user!==null && 
                <div className={styles.firstLetter}>
                    <p className={styles.letter}>{user.email.charAt(0)}</p>
                    </div>
                }
            </div>
        </nav>
    )
}