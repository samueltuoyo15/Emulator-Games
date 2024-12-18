import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Showcase from '../Components/Showcase'
import Features from '../Components/Features'
import About from '../Components/About'
import Games from '../Components/Games'
import Pricing from '../Components/Pricing'
import Faq from '../Components/Faq'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

interface User {
  id: string;
  email: string;
}

interface MainLayoutProps {
  session: User[] | null;
}

const MainLayout = ({session}: MainLayoutProps) => {
  const [Menu, setMenu] = useState<boolean>(false)
  const [games, setGames] = useState<any []>([])
  const toggleMenu = () => setMenu(!Menu)

    useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:10000/games');
        const data= await response.json()
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  const SlicedGames = games.slice(0, 3)

  return (
    <>
      <Header Menu={Menu} session={session} toggleMenu={toggleMenu} />
      <Showcase Menu={Menu} session={session}/>
      <Features />
      <About Menu={Menu} />
      <Games Menu={Menu} SlicedGames={SlicedGames} />
      <Pricing Menu={Menu}/>
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default MainLayout
