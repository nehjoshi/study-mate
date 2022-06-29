import styles from "../../sass/GetStarted.module.scss";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FetchDetails } from "../../utils/FetchDetails";
import AdditionQuestion from "../../components/AdditionQuestion";

export default function ReviewQuestions() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "StudyMate | Review your Homework";
        FetchDetails(user.email, user.token)
            .then(res => {
            })
            .catch(err => {
                window.location.href = "/login";
            })
    })

    return (
        <div className={styles.wrapper}>
            <Navbar hideExtraOptions={true} />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Re Visit Questions you got Wrong</h2>
                </div><br />
                <hr className={styles.divider} />
                <div className={styles.body} style={{ alignItems: 'center' }}>
                    {user.incorrectQuestionsArray.length === 0 ? <h3>You have not answered any questions yet!</h3> :
                        <>

                            {user.incorrectQuestionsArray.map(question => {
                                return <AdditionQuestion op={question.question.charAt(3)} hideAnswerBoxes={true} question={question} qno={1} />
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}