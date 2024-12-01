import { Link } from 'react-router-dom'
import '/Gaming-amico.png'
import '/Gaming-pana.svg'
import '/Going offline-bro.png'

function Games({ Menu, SlicedGames }: { Menu: any, SlicedGames: any }) {
  
  return (
    <section className="select-none bg-indigo-700 p-5">
      <h2 className="text-2xl text-center font-bold text-purple-400">TRENDING <span className="text-white">GAMES</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
        {SlicedGames.map((game: any) => (
          <article key={game.id} onContextMenu={(e) => e.preventDefault()} className="text-center mt-7 w-full md:w-52 rounded-2xl p-2 bg-indigo-800 shadow-2xl">
            <img src={game.album} className="w-full md:w-40 text-center mx-auto" alt="Game album" />
            <a download href={game.uri} className={`${Menu ? 'hidden' : 'inline-flex'} text-center mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white`}>
              <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Download Now</span>
            </a>
          </article>
        ))}
      </div>
      <Link to="/games" className={`${Menu ? 'hidden' : ''} block shadow-2xl font-bold text-2xl cursor-pointer bg-transparent justify-self-start mt-8 border-2 border-purple-600 rounded text-white p-3 mt-3 w-full text-center`}>View All Games..</Link>
    </section>
  )
}

export default Games