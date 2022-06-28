import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CompleteRegistration from './pages/CompleteRegistration';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./sass/Global.module.scss";
import { UserProvider } from './context/UserContext';
import GetStarted from './pages/GetStarted';
import ViewHomework from './pages/ViewHomework';
import Homework from './pages/Homework';
import { HomeworkProvider } from './context/HomeworkContext';

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
            <Route exact path='/homework/addition-grade-2' element={<Homework />} />

          </Routes>
        </BrowserRouter>
      </HomeworkProvider>
    </UserProvider>
  )
}