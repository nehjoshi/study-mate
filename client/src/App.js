import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CompleteRegistration from './pages/CompleteRegistration';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./sass/Global.module.scss";
import UserContext, { UserProvider } from './context/UserContext';
import GetStarted from './pages/GetStarted';
import { useContext } from 'react';

export default function App() {


  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register/verifyEmail/:token' element={<CompleteRegistration />} />
          <Route exact path='/getStarted' element={<GetStarted />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}