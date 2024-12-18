import {Link} from 'react-router-dom'

interface User {
  id: string;
  email: string;
}

function Showcase({ Menu, session}: { Menu: boolean, session: User[] | null}) {
  return (
    <section
      onContextMenu={(e) => e.preventDefault()}
      id="Home"
      className="font-sans select-none p-5 h-screen flex flex-col md:flex-row md:flex-row-reverse justify-center md:justify-between items-center bg-[url('/20241006_180235~2.png')] bg-no-repeat bg-center bg-cover"
    >
      <div>
        <img src="/gamer.png" alt="gamer" className="w-full md:w-64" />
      </div>
        {session && session.length > 0 ? (
         <div className="w-full md:w-80">
         <h2 className="font-bold text-purple-500 text-3xl">Welcome, {session[0]?.email.split('@')[0]}</h2>
        <h3 className="font-bold text-white uppercase text-3xl">game's heaven</h3>
        <p className="text-slate-50 mt-2">
          Welcome abored 🫵 Glad you stop by and we are aware you are a lover of mobile psspp games 
        </p>
         <Link
         to="/games"
          className={`mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white ${
            Menu ? 'hidden' : 'inline-flex'
          }`}
        >
         <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Explore Games</span>
        </Link>
        </div>
        ):
        (
        <div className="w-full md:w-80">
        <h2 className="font-bold text-purple-500 uppercase text-3xl">unlimited</h2>
        <h3 className="font-bold text-white uppercase text-3xl">game's heaven</h3>
        <p className="text-slate-50 mt-2">
          Discover a diverse selection of PSP emulator games available for download, providing an immersive gaming experience tailored for enthusiasts and newcomers alike
        </p>
         <Link
         to="/auth"
          className={`mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white ${
            Menu ? 'hidden' : 'inline-flex'
          }`}
        >
         <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Sign Up</span>
        </Link>
        </div>
        )}
    </section>
  )
}

export default Showcase
