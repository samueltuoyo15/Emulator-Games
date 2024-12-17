import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {FaArrowLeft} from 'react-icons/fa'
function Game(){
  const { id } = useParams()
   const [game, setGame] = useState<any []>([]);
 
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`http://localhost:10000/games/${id}`);
        const data = await response.json()
        setGame(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);
  return (
    <div className="text-center mt-10">
        <Link to="/games" className="flex items-center justify-start">
        <FaArrowLeft className="text-2xl mr-2 inline" />
        Back
      </Link>
        <article
          onContextMenu={(e) => e.preventDefault()}
          key={game.id}
          className="text-center mt-7 w-full md:w-52 rounded-2xl p-2"
        >
          <img src={game.album} className="w-full md:w-40 text-center mx-auto" alt="Game album" />
          <a
            href={game.uri}
            download={true}
            className="inline-flex bg-indigo-800 text-center mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white"
          >
            <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">
              Download Now
            </span>
          </a>
        </article>
    </div>
  )
}

export default Game
