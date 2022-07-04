import axios from 'axios';
import { useState, useContext } from 'react';
import { Navbar } from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import UserContext from '../../context/UserContext';
import styles from "../../sass/UserProfile.module.scss";

export default function UserProfile() {

    const [photo, setPhoto] = useState(null);
    const { user } = useContext(UserContext);
    const [userphoto, setUserphoto] = useState(null);

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const handleSubmit =  () => {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('photo', photo);
        axios.post('http://localhost:5000/users/uploadProfilePicture', formData)
            .then(res => {
                console.log("Reponse:");
                console.log(res);
                const blob = new Blob([res.data], { type: 'image/jpeg' });
                const url = window.URL.createObjectURL(blob);
                setUserphoto(window.URL.createObjectURL(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions />
            <Sidebar />
            <label className={styles.label}>Upload a profile picture</label>
            <input className={styles.input} type="file" name="photo" accept=".png, .jpg, .jpeg" onChange={handlePhoto} />
            <div className={styles.button} onClick={handleSubmit}>Submit</div>
            {userphoto && <img src={userphoto} /> }
        </div>
    )
}