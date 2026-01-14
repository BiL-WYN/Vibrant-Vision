import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HowTo from './pages/HowTo';
import AboutUs from './pages/AboutUs';
import Search from './pages/search';
import Login from './components/Login';
import SignUp from './components/SignUp';
//import Profile from './components/Profile';



import {ToastContainer} from 'react-toastify'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/*Here are the path routings for each page. If you guys add another page please add a Route for it*/}
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/search" element={<Search />} />
        {/*<Route path="/profile" element={<Profile />} />*/}

      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
