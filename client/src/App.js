import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CompleteRegistration from './pages/CompleteRegistration';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./sass/Global.module.scss";
import { UserProvider } from './context/UserContext';
import GetStarted from './pages/GetStarted';
import ViewHomework from './pages/ViewHomework';
import Homework from './pages/HomeworkAddSubBoxes';
import ReviewQuestions from './pages/ReviewQuestions';
import Leaderboard from './pages/Leaderboard';
import { HomeworkProvider } from './context/HomeworkContext';
import HomeworkWordProblems from './pages/HomeworkWordProblems';

export default function App() {


  return (
    <UserProvider>
      <HomeworkProvider>
        <BrowserRouter>
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register/verifyEmail/:token' element={<CompleteRegistration />} />
            <Route exact path='/getStarted' element={<GetStarted />} />
            <Route exact path='/homework' element={<ViewHomework />} />
            <Route exact path='/homework/additionNormal-grade-2' element={<Homework op={"+"}/>} />
            <Route exact path='/homework/subtractionNormal-grade-2' element={<Homework op={"-"}/>} />
            <Route exact path='/homework/additionWord-grade-2' element={<HomeworkWordProblems op={"+"}/>} />
            <Route exact path='/homework/review' element={<ReviewQuestions />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </BrowserRouter>
      </HomeworkProvider>
    </UserProvider>
  )
}