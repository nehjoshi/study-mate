import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Register from "./pages/Register";
import "./sass/Global.module.scss";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}