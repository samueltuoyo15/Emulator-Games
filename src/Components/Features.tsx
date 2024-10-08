import '/Gaming-amico.png'
import '/Gaming-pana.svg'
import '/Going offline-bro.png'
function Features(){
  return(
    <section onContextMenu={(e) => e.preventDefault()} className="select-none bg-indigo-700 p-5">
      <h2 className="text-2xl text-center font-bold text-white">OUR <span className="text-purple-400">FEATURES</span></h2>
     <div className="flex flex-col md:flex-row justify-between">
      <article className="mt-7 w-full md:w-72 rounded-2xl p-2 bg-indigo-800 shadow-2xl">
        <img src="/Gaming-amico.png" className="w-full" />
        <h2 className="text-white text-center font-bold text-2xl">Upcoming Events <br /> Everyday</h2>
        <p className="text-center text-white">elit commodo duis aliqua nulla veniam non veniam culpa anim quis sit cillum sint magna</p>
      </article>
        <article className="mt-7 w-full md:w-72 rounded-2xl p-2 bg-indigo-800 shadow-2xl">
        <img src="/Gaming-pana.svg" className="w-full" />
        <h2 className="text-white text-center font-bold text-2xl">Compatible With<br /> Any Device</h2>
        <p className="text-center text-white">elit commodo duis aliqua nulla veniam non veniam culpa anim quis sit cillum sint magna</p>
      </article>
      <article className="mt-7 w-full md:w-72 rounded-2xl p-2 bg-indigo-800 shadow-2xl">
       <img src="/Going offline-bro.png" className="w-full" />
        <h2 className="text-white text-center font-bold text-2xl">Online And<br /> Offline Modes</h2>
        <p className="text-center text-white">elit commodo duis aliqua nulla veniam non veniam culpa anim quis sit cillum sint magna</p>
      </article>
      </div>
    </section>
    )
}

export default Features