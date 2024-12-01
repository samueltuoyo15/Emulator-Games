import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaTrophy } from 'react-icons/fa'

function Header({ Menu, toggleMenu }: { Menu: boolean, toggleMenu: () => void }) {
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleLinkClick = () => {
    toggleMenu()
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = Menu ? 'hidden' : 'auto'
  }, [Menu])

  return (
    <header className={`select-none fixed top-0 w-full flex justify-between items-center p-5 transition-all ${scrolled ? 'bg-purple-700 z-50' : 'bg-transparent'}`}>
      <div className="text-2xl text-white">
        <FaTrophy className={`${scrolled ? 'text-white' : 'text-purple-400'} inline mr-3`} />
        Emulator Games
      </div>

      <nav className={`fixed z-10 h-full flex flex-col justify-center items-center top-0 left-0 bg-indigo-700 text-white w-full px-8 transition-transform duration-300 ${Menu ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        {['Home', 'About', 'Pricing', 'Faq', 'Contact'].map((item, index) => (
          <a key={index} href={`#${item}`} onClick={handleLinkClick} className="group relative block text-3xl mb-4 cursor-pointer">
            <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <nav className="hidden md:inline-block text-white">
        {['Home', 'About', 'Pricing', 'Faq', 'Contact'].map((item, index) => (
          <a key={index} href={`#${item}`} className="group relative text-2xl inline mr-5 cursor-pointer">
            <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <a
        className="hidden md:inline-flex mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white">
        <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Sign Up</span>
      </a>
    {!Menu ? 
        <FaBars onClick={() => { toggleMenu(); document.body.style.overflow = 'hidden' }} className="z-10 text-2xl text-white inline-flex md:hidden" /> : 
        <FaTimes onClick={() => { toggleMenu(); document.body.style.overflow = 'auto' }} className="z-10 text-2xl text-white inline-flex md:hidden" />
      }
    </header>
  )
}

export default Header
