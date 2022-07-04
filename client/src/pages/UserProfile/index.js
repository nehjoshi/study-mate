import axios from 'axios';
import { useState, useContext } from 'react';
import { Navbar } from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import UserContext from '../../context/UserContext';
import styles from "../../sass/UserProfile.module.scss";
import { FaUserAlt } from 'react-icons/fa';
export default function UserProfile() {

    const [photo, setPhoto] = useState(null);
    const { user } = useContext(UserContext);
    const [userphoto, setUserphoto] = useState(null);

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const handleSubmit = () => {
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
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Your Profile</h2>
                    <p className={styles.subheading}>Edit your profile and upload a profile picture</p>
                </div><br />
                <hr className={styles.divider} />
                <div className={styles.profile}>
                    {photo && <img src={URL.createObjectURL(photo)} alt="profile" className={styles.profilePic} onClick={() => document.getElementById("file-input").click()} />}
                    {!photo && <FaUserAlt className={styles.profilePic} onClick={() => document.getElementById("file-input").click()} />}
                    <input type="file" className={styles.fileInput} onChange={handlePhoto} hidden id="file-input" />
                    {photo && <div className={styles.button} onClick={handleSubmit}>Update</div>}<br /><br />
                    <div className={styles.profileInfo}>
                        <p className={styles.profileText}>{user.firstName}  {user.lastName}</p>
                        <p className={styles.profileText}>{user.email}</p>
                        <p className={styles.profileText}>{user.phoneNumber}</p>
                    </div>

                </div>
            </div>
            {/* <label className={styles.label}>Upload a profile picture</label>
            <input className={styles.input} type="file" name="photo" accept=".png, .jpg, .jpeg" onChange={handlePhoto} />
            <div className={styles.button} onClick={handleSubmit}>Submit</div>
            {userphoto && <img src={userphoto} /> } */}
        </div>
    )
}