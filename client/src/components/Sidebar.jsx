import styles from "../sass/Global.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineWork } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { GiRank2 } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h3 className={styles.sidebarHeaderTitle}>Welcome, Neh!</h3>
                <p className={styles.sidebarHeaderSubtitle}>What would you like to do today?</p>
            </div>
            <div className={styles.sidebarLinks}>
                <Link to="/getStarted"><div className={styles.sidebarLink}>
                    <CgMenuGridR className={styles.sidebarLinkIcon} />
                    <p className={styles.sidebarLinkText}>Dashboard</p>
                </div></Link>
                <Link to="/homework"><div className={styles.sidebarLink}>
                    <MdOutlineWork className={styles.sidebarLinkIcon} />
                    <p className={styles.sidebarLinkText}>My Homework</p>
                </div></Link>
                <div className={styles.sidebarLink}>
                    <IoIosStats className={styles.sidebarLinkIcon} />
                    <p className={styles.sidebarLinkText}>Statistics</p>
                </div>
                <div className={styles.sidebarLink}>
                    <GiRank2 className={styles.sidebarLinkIcon} />
                    <p className={styles.sidebarLinkText}>Leaderboard</p>
                </div>
                <div className={styles.sidebarLink}>
                    <AiFillStar className={styles.sidebarLinkIcon} />
                    <p className={styles.sidebarLinkText}>Purchase Goodies</p>
                </div>
            </div>
        </div>
    )
}