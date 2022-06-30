import { createContext, useState } from "react";

const HomeworkContext = createContext();
const defaultValue = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export function HomeworkProvider({ children }) {
    const [homework, setHomework] = useState(defaultValue);
    const updateHomework = (key, clientAnswer) => {
        const old = homework;
        const objectToModify = old[key];
        objectToModify.clientAnswer = clientAnswer;
        old[key] = objectToModify;
        setHomework(old);
        console.log(old);
    }
    const setOriginalQuestions = (questions) => {
        setHomework(questions);
    }
    return (
        <HomeworkContext.Provider value = {{ homework, updateHomework, setOriginalQuestions }}>
            {children}
        </HomeworkContext.Provider>
    )
}

export default HomeworkContext;