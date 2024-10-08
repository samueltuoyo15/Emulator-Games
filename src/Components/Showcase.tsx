import { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2'
import '/gamer.png'

function Showcase({ Menu }: { Menu: boolean }) {
  const [swalProps, setSwalProps] = useState<{ show: boolean; title: string; text: string; customClass: { popup: string } }>({
    show: false,
    title: '',
    text: '',
    customClass: { popup: '' }
  })

  const handleClick = () => {
    setSwalProps({
      show: true,
      title: 'Trying to Sign in?',
      text: 'Hey Champ! Glad you saw this. Our Authentication will be part of our upcoming Events, so stay tuned.',
      customClass: {
        popup: 'bg-purple-700 text-white'
      }
    })
  }

  const handleClose = () => {
    setSwalProps(prev => ({ ...prev, show: false }))
  }

  return (
    <section
      onContextMenu={(e) => e.preventDefault()}
      id="Home"
      className="select-none p-5 h-screen flex flex-col md:flex-row md:flex-row-reverse justify-center md:justify-between items-center bg-[url('/20241006_180235~2.png')] bg-no-repeat bg-center bg-cover"
    >
      <div>
        <img src="/gamer.png" alt="gamer" className="w-full md:w-64" />
      </div>
      <div className="w-full md:w-80">
        <h2 className="font-bold text-purple-500 uppercase text-3xl">unlimited</h2>
        <h3 className="font-bold text-white uppercase text-3xl">game's heaven</h3>
        <p className="text-slate-50 mt-2">
          Discover a diverse selection of PSP emulator games available for download, providing an immersive gaming experience tailored for enthusiasts and newcomers alike
        </p>
        <a
          onClick={handleClick}
          className={`mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white ${
            Menu ? 'hidden' : 'inline-flex'
          }`}
        >
          <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Sign Up</span>
          <span className="absolute top-0 right-0 w-20 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded">
            Coming Soon
          </span>
        </a>

        <SweetAlert2
          {...swalProps}
          onConfirm={handleClose}
        />
    
  </div>
    </section>
  )
}

export default Showcase
