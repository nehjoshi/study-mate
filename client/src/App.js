import {Route, Routes, BrowserRouter} from 'react-router-dom';
import CompleteRegistration from './pages/CompleteRegistration';
import Home from './pages/Home';
import Register from "./pages/Register";
import "./sass/Global.module.scss";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/register/verifyEmail/:token' element={<CompleteRegistration />} />
    </Routes>
    </BrowserRouter>
  )
}