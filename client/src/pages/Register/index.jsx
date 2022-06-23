import { Navbar } from "../../components/Navbar";
import styles from "../../sass/Register.module.scss";
import { Select, TextField, MenuItem, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { SubmitData } from "./handler";
import { useEffect } from "react";
export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [grade, setGrade] = useState("Choose your grade");
    const [allowProceed, setAllowProceed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (email !== "" && firstName !== "" && lastName !== "" && grade !== "Choose your grade" && phone !== "") {
            setAllowProceed(true);
        }
        if (success) {
            setFirstName("");
            setLastName("");
            setGrade("Choose your grade");
            setEmail("");
            setPhone("");
        }
    }, [firstName, lastName, email, phone, grade, success])

    const handleSubmit = () => {
        setLoading(true);
        setError(false);
        SubmitData({ firstName, lastName, email, phone, grade })
            .then(res => {
                console.log(res);
                setLoading(false);
                setSuccess(true);
            })
            .catch(err => {
                console.log(err.response.status);
                setLoading(false);
                setError(true);
            })
    }

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.box}>
                <h1 className={styles.heading}>Sign up</h1>
                <div className={styles.form}>
                    <p className={styles.info}>To start your registration, please provide the following details</p>
                    <div className={styles.row}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" required onChange={e => setFirstName(e.target.value)} />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" required onChange={e => setLastName(e.target.value)} />
                    </div><br />
                    <TextField type="email" required id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={e => setEmail(e.target.value)} /><br /><br />
                    <TextField type="tel" required id="outlined-basic" label="Phone Number" variant="outlined" fullWidth onChange={e => setPhone(e.target.value)} /><br /><br />
                    <Select required value={grade} id="outlined-basic" label="Select your course" variant="outlined" fullWidth onChange={e => setGrade(e.target.value)}>
                        <MenuItem value="Choose your grade" disabled selected hidden>Choose your grade</MenuItem>
                        <MenuItem value="Grade 1">Grade 1</MenuItem>
                        <MenuItem value="Grade 2">Grade 2</MenuItem>
                        <MenuItem value="Grade 3">Grade 3</MenuItem>
                        <MenuItem value="Grade 4">Grade 4</MenuItem>
                        <MenuItem value="Grade 5">Grade 5</MenuItem>
                        <MenuItem value="Grade 6">Grade 6</MenuItem>
                        <MenuItem value="Grade 7">Grade 7</MenuItem>
                        <MenuItem value="Grade 8">Grade 8</MenuItem>
                    </Select>
                </div><br />
                {!loading && !success &&
                    <Button disabled={!allowProceed} onClick={handleSubmit} variant="contained" color="primary" fullWidth className={styles.button} size="large">Sign up</Button>
                }
                {loading && !success && <CircularProgress className={styles.progress} />}
                {success && <p className={styles.success}>Successfully registered</p>}
                {error && <p className={styles.error}>That email has been taken. Please choose another email.</p>}
            </div>

        </div>
    )
}