import axios from "axios";
export const GetQuestions = async (config, op) => {
    if (op === "+") {
        return await axios.get("http://localhost:5000/homework/getAdditionQuestions", config);
    }
    else if (op === "-") {
        return await axios.get("http://localhost:5000/homework/getSubtractionQuestions", config);
    }
}
export const EvaluateAnswers = (homework) => {
    let correct = 0;
    let incorrect = 0;
    let incorrectArray = [];
    let points = 0;
    homework.forEach(question => {
        if (question.clientAnswer === question.answer) {
            correct++;
            points += question.value;
        }
        else {
            incorrect++;
            incorrectArray.push(question);
        }
    })
    return { correct, incorrect, incorrectArray, points };

}
export const PostAnswers = (correct, incorrect, incorrectArray, points, email, user, type) => {
    const config = {
        headers: {
            "Authorization": user.token
        }
    }
    return axios.post("http://localhost:5000/homework/submit-homework-results", { correct, incorrect, incorrectArray, points, email, type }, config)
}