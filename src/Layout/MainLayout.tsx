import { useState } from 'react'
import Header from '../Components/Header'
import Showcase from '../Components/Showcase'
import Features from '../Components/Features'
import About from '../Components/About'
import Games from '../Components/Games'
import Pricing from '../Components/Pricing'
import Faq from '../Components/Faq'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const MainLayout = () => {
  const [Menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!Menu)

  const games = [
    { album: "https://images.emulatorgames.net/playstation-portable/god-of-war-ghost-of-sparta.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(En,Zh).zip" },
    { album: "https://images.emulatorgames.net/playstation-portable/grand-theft-auto-vice-city-stories.webp", uri: "https://static.emulatorgames.net/roms/playstation-portable/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20(USA)%20(v1.03).zip" },
    { album: "https://images.emulatorgames.net/playstation-portable/spider-man-3.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/Spider-Man%203%20(USA)%20(v1.02).zip" },
    { album: "https://images.emulatorgames.net/playstation-portable/naruto-shippuden-ultimate-ninja-impact.webp", uri: "https://server.emulatorgames.net/server4/roms/playstation-portable/Naruto%20Shippuden%20-%20Ultimate%20Ninja%20Impact%20(USA)%20(En,Fr,Es).zip" },
    { album: "https://images.emulatorgames.net/playstation-portable/assassins-creed-bloodlines.webp", uri: "https://server.emulatorgames.net/server2/roms/playstation-portable/Assassins%20Creed%20-%20Bloodlines%20(USA)%20(En,Fr,De,Es,It).zip" },
    { album: "https://images.emulatorgames.net/playstation-portable/pro-evolution-soccer-2013.webp", uri: "https://serve.emulatorgames.net/serve2/roms/playstation-portable/Pro%20Evolution%20Soccer%202013%20(Europe)%20(En,Nl,Sv,Ru,Tr).7z" },
    { album: "https://images.emulatorgames.net/playstation-portable/avatar-the-last-airbender.webp", uri: "https://server.emulatorgames.net/server3/roms/playstation-portable/Avatar%20-%20The%20Last%20Airbender%20(USA).zip" }
  ]

  const SlicedGames = games.slice(0, 7)

  return (
    <>
      <Header Menu={Menu} toggleMenu={toggleMenu} />
      <Showcase Menu={Menu} />
      <Features />
      <About Menu={Menu} />
      <Games Menu={Menu} SlicedGames={SlicedGames} />
      <Pricing Menu={Menu} />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default MainLayout
