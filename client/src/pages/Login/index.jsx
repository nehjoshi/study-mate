import { Navbar } from "../../components/Navbar";
import styles from "../../sass/Register.module.scss";
import { Select, TextField, MenuItem, Button, CircularProgress } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitData } from "./handler";
import UserContext from "../../context/UserContext";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activateButton, setActivateButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, addUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (email !== "" && password !== "") {
            setActivateButton(true);
        } else setActivateButton(false);
    }, [email, password])

    const handleSubmit = () => {
        setErrorMessage("");
        setLoading(true);
        SubmitData(email, password)
            .then(res => {
                if (res.status === 200) {
                    document.cookie = `token=${res.data.token}`;
                    console.log(res.data);
                    addUser({...res.data.user, token: res.data.token})
                    console.log("User", user);
                    // console.log(res);
                    setLoading(false);
                    navigate("/getStarted")
                }
            })
            .catch(err => {
                setErrorMessage(err.response.data);
                setLoading(false);
            })
    }

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.box}>
                <h1 className={styles.heading}>Sign In</h1>
                <div className={styles.form}>
                    <p className={styles.info}>Sign In to your account with your email.</p><br />
                    <TextField onChange={e => setEmail(e.target.value)} type="email" required id="outlined-basic" label="Email" variant="outlined" fullWidth /><br /><br />
                    <TextField onChange={e => setPassword(e.target.value)} type="password" required id="outlined-basic" label="Password" variant="outlined" fullWidth />
                    <p className={styles.forgotPassword}>I've forgotten my password</p><br /><br />
                </div>
                {!loading && !success &&
                    <Button onClick={handleSubmit} disabled={!activateButton} variant="contained" color="primary" fullWidth className={styles.button} size="large">Sign in</Button>
                }
                {loading && <CircularProgress className={styles.progress} />}
                {errorMessage !== "" && <p className={styles.error}>{errorMessage}</p>}

                <p className={styles.noAccount}><Link to="/register">I don't have a StudyMate account yet</Link></p>
            </div>
        </div>
    )
}