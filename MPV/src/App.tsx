import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HowTo from './pages/HowTo';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/*Here are the path routings for each page. If you guys add another page please add a Route for it*/}
        <Route path="/" element={<Dashboard />} />
        <Route path="/howto" element={<HowTo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
