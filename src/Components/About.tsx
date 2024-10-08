import '/Business vision-pana.svg'
import '/Investment data-amico.svg'
function About({Menu}: {Menu: any}){
  return(
    <section onContextMenu={(e) => e.preventDefault()} id="About" className="w-full select-none bg-indigo-700 p-5 flex justify-between items-center flex-col md:flex-row bg-[url('/20241006_180235~2.png')] bg-no-repeat bg-cover bg-center">
      <img src="/Business vision-pana.svg" className="w-52"/>
      <div className="mt-7 text-center text-white w-52">
        <h2 className="text-center text-2xl">Who We Are?</h2>
        <p>ut labore laboris qui veniam officia quis adipisicing excepteur ex</p>
        <a className={`${Menu ? 'hidden' : 'inline-flex'} text-center mt-3 cursor-pointer btn relative z-1 items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group py-2 px-3 border-2 border-purple-600 text-2xl text-white`}>
        <span className="w-56 h-48 rounded bg-purple-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 group-hover:border-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white hover:border-0">Read More...</span>
        </a>
      </div>
      <img src="/Investment data-amico.svg" className="w-52"/>
    </section>
    )
}

export default About