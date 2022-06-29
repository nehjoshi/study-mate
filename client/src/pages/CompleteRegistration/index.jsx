import { Navbar } from "../../components/Navbar";
import styles from "../../sass/Register.module.scss";
import { TextField, CircularProgress, Button } from "@mui/material";
import { useState } from "react";
import { CompleteVerification, CreatePassword } from "./handler";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CompleteRegistration() {

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(true);
    const [smallLoading, setSmallLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failedVerificationError, setFailedVerificationError] = useState(false);
    const { token } = useParams();
    useEffect(() => {
        CompleteVerification(token)
            .then(res => {
                setLoading(false);
            })
            .catch(err => {
                setFailedVerificationError(true);
                setLoading(false);
            })
    }, [token])

    const handleSubmit = () => {
        setSmallLoading(true);
        CreatePassword(token, password)
            .then(res => {
                setSmallLoading(false);
                setSuccess(true);
            })
            .catch(err => {
                setSmallLoading(false);
            })
    }

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.box} style={{ justifyContent: loading ? "center" : null }}>
                {failedVerificationError ? <p className={styles.error}>An unknown error ocurred.</p> : null}
                {loading && !failedVerificationError ? <CircularProgress /> :
                    <>
                        {failedVerificationError ? null :
                            <div className={styles.form}>
                                <h1 className={styles.heading}>Complete Registration</h1>
                                <p className={styles.success}>You have successfully completed your registration! Please create a password.</p><br />
                                <TextField type="password" required id="outlined-basic" label="Password" variant="outlined" fullWidth onChange={e => setPassword(e.target.value)} /><br /><br />
                                <TextField type="password" required id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth onChange={e => setConfirm(e.target.value)} /><br /><br />
                                {!smallLoading && !success && <Button onClick={handleSubmit} disabled={password !== confirm} variant="contained" color="primary" fullWidth className={styles.button} size="large">Submit</Button>}
                                {smallLoading && <CircularProgress className={styles.prgoress}/>}
                                {success && <p className={styles.success}>Password successfully created! You may now login!</p>}
                            </div>
                        }
                    </>
                }

            </div>
        </div>
    )
}