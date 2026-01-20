import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HowTo from './pages/HowTo';
import AboutUs from './pages/AboutUs';
import Search from './pages/Search';
import Exercise from './pages/Exercise';




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/*Here are the path routings for each page. If you guys add another page please add a Route for it*/}
        <Route path="/" element={<Dashboard />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
