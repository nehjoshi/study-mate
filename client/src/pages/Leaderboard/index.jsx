import styles from "../../sass/Leaderboard.module.scss";
import { Navbar } from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { GetLeaderboard } from "./handler";
export default function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "StudyMate | Leaderboard";
        GetLeaderboard()
            .then(res => {
                setLeaderboard(res.data);
                setLoading(false);
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Leaderboard</h1>
                </div>
                <div className={styles.body}>
                    <h4>Note: Ranks are decided according to the total number of points obtained by a particular user.</h4>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.cell}><b>Rank</b></TableCell>
                                    <TableCell className={styles.cell}><b>Name</b></TableCell>
                                    <TableCell className={styles.cell} align="right"><b>Points</b></TableCell>
                                    <TableCell className={styles.cell} align="right"><b>Number of tasks</b></TableCell>
                                    <TableCell className={styles.cell} align="right"><b>Accuracy</b></TableCell>
                                </TableRow>
                            </TableHead>
                            {!loading &&
                                <TableBody>
                                    {leaderboard.map((user, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell className={styles.cell}>{index+1}</TableCell>
                                                <TableCell className={styles.cell}>{user.firstName + " " + user.lastName}</TableCell>
                                                <TableCell className={styles.cell} align="right">{user.points}</TableCell>
                                                <TableCell className={styles.cell} align="right">{user.numberOfHomeworks}</TableCell>
                                                <TableCell className={styles.cell} align="right">{user.accuracy}%</TableCell>
                                                </TableRow>
                                        )
                                    })}
                                </TableBody>
                            }
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}