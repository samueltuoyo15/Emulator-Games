import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const ViewAllGames = () => {
  const games = [
    {album: "https://images.emulatorgames.net/playstation-portable/god-of-war-ghost-of-sparta.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(En,Zh).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/grand-theft-auto-vice-city-stories.webp", uri: "https://static.emulatorgames.net/roms/playstation-portable/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20(USA)%20(v1.03).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/spider-man-3.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/Spider-Man%203%20(USA)%20(v1.02).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/naruto-shippuden-ultimate-ninja-impact.webp", uri: "https://server.emulatorgames.net/server4/roms/playstation-portable/Naruto%20Shippuden%20-%20Ultimate%20Ninja%20Impact%20(USA)%20(En,Fr,Es).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/assassins-creed-bloodlines.webp", uri: "https://server.emulatorgames.net/server2/roms/playstation-portable/Assassins%20Creed%20-%20Bloodlines%20(USA)%20(En,Fr,De,Es,It).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/pro-evolution-soccer-2013.webp", uri: "https://serve.emulatorgames.net/serve2/roms/playstation-portable/Pro%20Evolution%20Soccer%202013%20(Europe)%20(En,Nl,Sv,Ru,Tr).7z"},
    {album: "https://images.emulatorgames.net/playstation-portable/avatar-the-last-airbender.webp", uri: "https://server.emulatorgames.net/server3/roms/playstation-portable/Avatar%20-%20The%20Last%20Airbender%20(USA).zip"},
    {album: "https://images.emulatorgames.net/playstation-portable/need-for-speed-most-wanted-5-1-0.webp", uri: "https://serve.emulatorgames.net/roms/playstation-portable/Need%20for%20Speed%20-%20Most%20Wanted%205-1-0%20(Europe)%20(En,Fr,De,Es,It).zip"},
    {album: "https://images.emulatorgames.net/xbox/gta-san-andreas.webp", uri: "https://static.emulatorgames.net/static2/roms/xbox/GTA%20San%20Andreas%20[!].7z"},
    {album: "https://images.emulatorgames.net/playstation-2/prince-of-persia-the-two-thrones.webp", uri: "https://static.emulatorgames.net/roms/playstation-2/Prince%20of%20Persia%20-%20The%20Two%20Thrones%20(USA)%20(En,Fr,Es).7z"},
    {album: "https://images.emulatorgames.net/playstation-2/tmnt.webp", uri: "https://serve.emulatorgames.net/serve2/roms/playstation-2/TMNT%20(USA).7z"},
    {album: "https://images.emulatorgames.net/playstation-portable/wwe-smackdown-vs-raw-2010-featuring-ecw.webp", uri: "https://serve.emulatorgames.net/serve3/roms/playstation-portable/WWE%20SmackDown!%20vs.%20RAW%202010%20featuring%20ECW%20(USA).zip"},
    {album: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QoTwGdj5wDm3v7pUVljPa4s6e7h6mX0UsA&usqp=CAU", uri: "https://www.mediafire.com/file/414abrrom8isdx5/eFootball+TM+ARTS+2024+%E2%84%A2+v2.7z?dkey=5d32xxkqlqi&r=220"}
    ]
  return(
    <div onContextMenu={(e) => e.preventDefault()} className="p-5 bg-indigo-700 grid grid-cols-1 md:grid-cols-4">
      <Link to="/" className="text-white flex items-center justify-start"><FaArrowLeft className="text-2xl mr-2 inline"/>Back</Link>
      {games.map((game, index) => (
      <article onContextMenu={(e) => e.preventDefault()} key={index} className="text-center mt-7 w-full md:w-52 rounded-2xl p-2 bg-indigo-800 shadow-2xl">
      <img src={game.album} className="w-full md:w-40 text-center mx-auto" alt="Game album" />
       <a download="true" href={game.uri} className="inline-flex text-center mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white">
      <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
     <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Download Now</span>
     </a>
    </article>
      ))}
    </div>
    )
}

export default ViewAllGames