import { Link } from "react-router-dom";
import styles from "../sass/Global.module.scss";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
export const Navbar = ({ hideExtraOptions, name, homeworks }) => {
    const { user, addUser } = useContext(UserContext);
    const [openMenu, setOpenMenu] = useState(false);

    const LogOut = () => {
        addUser({});
        window.location.href = "/";
    }
    return (
        <nav className={styles.wrapper}>
            <Link to="/"><h2 className={styles.logo}>Study Mate</h2></Link>
            <div className={styles.centerLinks}>
                {!hideExtraOptions && <>
                    <p className={styles.navLink}><Link to="/register">Register</Link></p>
                    <p className={styles.navLink}><Link to="/login">Login</Link></p>
                    <p className={styles.navLink}><Link to="/register">About</Link></p>
                </>
                }
                {user !== null &&
                    <div className={styles.firstLetter} onClick={() => setOpenMenu(!openMenu)}>
                        <p className={styles.letter}>{user.email.charAt(0)}</p>
                    </div>
                }
                {openMenu &&
                    <div className={styles.userMenu}>
                        <div className={styles.userMenuHeader}>
                            <FaUser className={styles.userMenuIcon} />
                            <p className={styles.userMenuHeaderTitle} style={{ fontSize: '1.3rem' }}><b>{name}</b></p>
                            <p className={styles.userMenuHeaderTitle} style={{ color: "#979797" }}>nehjoshi5@gmail.com</p>
                            <p className={styles.userMenuHeaderTitle} style={{ color: "#979797" }}>#neh_joshi123</p>
                            <Link to='/profile'><p className={styles.editProfile}>Edit your Account</p></Link>

                        </div>
                        <div className={styles.userMenuBody}>
                            <div className={styles.userMenuItem}>
                                <p className={styles.userMenuItemText}>My points</p>
                                <p className={styles.userMenuItemText}>{user.points}</p>
                            </div>
                            <div className={styles.userMenuItem}>
                                <p className={styles.userMenuItemText}>Tasks Completed</p>
                                <p className={styles.userMenuItemText}>{user.numberOfHomeworks}</p>
                            </div>
                            <div className={styles.userMenuItem}>
                                <p className={styles.userMenuItemText}>Leaderboard Rank</p>
                                <p className={styles.userMenuItemText}>1</p>
                            </div>
                        </div>
                        <div className={styles.userMenuFooter}>
                            <Button fullWidth variant="contained" onClick={LogOut} className={styles.userMenuFooterButton}>Sign out</Button>
                        </div>
                        <div className={styles.userMenuFooter} style={{ borderBottom: "none" }}>
                            <p className={styles.userMenuFooterText}>Privacy Policy</p>
                            <p className={styles.userMenuFooterText}>Terms of Service</p>
                        </div>

                    </div>
                }
            </div>
        </nav>
    )
}