import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ViewAllGames = () => {
  const [games, setGames] = useState<any []>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`import.meta.env.VITE_GAMES/${games}');
        const data= await response.json()
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div onContextMenu={(e) => e.preventDefault()} className="p-5 bg-indigo-700 grid grid-cols-1 md:grid-cols-4">
      <Link to="/" className="text-white flex items-center justify-start">
        <FaArrowLeft className="text-2xl mr-2 inline" />
        Back
      </Link>
      {games.map((game, index) => (
        <article
          onContextMenu={(e) => e.preventDefault()}
          key={index}
          className="text-center mt-7 w-full md:w-52 rounded-2xl p-2 bg-indigo-800 shadow-2xl"
        >
          <img src={game.album} className="w-full md:w-40 text-center mx-auto" alt="Game album" />
          <Link
            to={`/games/${game.id}`}
            className="inline-flex text-center mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white"
          >
            <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">
              Download Now
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ViewAllGames;
