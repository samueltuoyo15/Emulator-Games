import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import ViewAllGames from './Pages/ViewAllGames';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Game from './Pages/Game';
import Authentication from './Pages/Authentication';
import MainLayout from './Layout/MainLayout';

interface User {
  email: string;
  id: string;
}

function App() {
  const [, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('isAuthenticated') === 'true');
  const [session, setSession] = useState<User[] | null>(null);

  useEffect(() => {
    const Status = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(Status === 'true');
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser: User | User[] = JSON.parse(user);
        setSession(Array.isArray(parsedUser) ? parsedUser : [parsedUser]);
      } catch (error) {
        setSession(null);
      }
    } else {
      setSession(null);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout session={session} />} />
        <Route path="/games" element={<ViewAllGames />} />
        <Route path="/auth" element={<Authentication setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
