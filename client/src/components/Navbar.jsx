import styles from "../sass/Global.module.scss";
export const Navbar = () => {
    return (
        <nav className={styles.wrapper}>
            <h2 className={styles.logo}>Study Mate</h2>
            <div className={styles.centerLinks}>
                <p className={styles.navLink}><a href="/register">Register</a></p>
                <p className={styles.navLink}><a href="/register">Login</a></p>
                <p className={styles.navLink}><a href="/register">About</a></p>
            </div>
        </nav>
    )
}