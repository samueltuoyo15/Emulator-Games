import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import ViewAllGames from './Pages/ViewAllGames'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Game from './Pages/Game'
import Authentication from './Pages/Authentication'
import MainLayout from './Layout/MainLayout'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('isAuthenticated') === 'true');
  const [session, setSession] = useState<any[]>([])
  useEffect(() => {
    const Status = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(Status === 'true');
  },[]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setSession(Array.isArray(parsedUser) ? parsedUser : [parsedUser]);
      } catch (error) {
        setSession([]);
      }
    } else {
      setSession([]);
    }
  }, []);
    return (
        <Router>
          <Routes>
        <Route path="/" element={<MainLayout session={session}/>} />
        <Route path="/games" element={<ViewAllGames />} />
        <Route path="/auth" element={<Authentication setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    )
}

export default App
