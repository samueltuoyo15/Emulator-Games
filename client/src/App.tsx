import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import ViewAllGames from './Pages/ViewAllGames'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Authentication from './Pages/Authentication'
import MainLayout from './Layout/MainLayout'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('isAuthenticated') === 'true');
  useEffect(() => {
    const Status = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(Status === 'true');
  },[]);
  
    return (
        <Router>
          <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/games" element={<ViewAllGames />} />
        <Route path="/auth" setIsAuthenticated={setIsAuthenticated} element={<Authentication />} />
        <Route path="/login" setIsAuthenticated={setIsAuthenticated} element={<Login />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    )
}

export default App
