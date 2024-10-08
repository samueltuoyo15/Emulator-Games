import {FaGithub, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
const Footer = () => {
  return(
    <footer onContextMenu={(e) => e.preventDefault()} className="w-full p-5 bg-[url('/20241006_180235~2.png')] bg-cover bg-no-repeat">
      <div className="select-none flex flex-col md:flex-row md:justify-between">
      <div>
        <h2 className="font-bold text-2xl text-purple-400">Quick Links</h2>
     <nav>
          {['Home', 'About', 'Pricing', 'Faq', 'Contact'].map((item, index) => (
          <a key={index} href={`#${item}`} className="group relative text-white block mr-5 cursor-pointer">
            <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-12"></span>
          </a>
        ))}
     </nav>
      </div>
      <div className="md:text-center mt-5 md:mt-0">
      <h2 className="font-bold text-2xl text-purple-400">Terms Of Use</h2>
      <p className="text-white">esse cupidatat consequat amet eiusmod aute</p>
      <a href="mailto:samueltuoyo9082@gmail.com"><BiLogoGmail className="cursor-pointer mr-3 inline text-2xl text-white"/></a>
      <a href="https://github.com/samueltuoyo15"><FaGithub className="cursor-pointer mr-3 inline text-2xl text-white"/></a>
      <a href="https://www.x.com/TuoyoS26091"><FaTwitter className="cursor-pointer mr-3 inline text-2xl text-white"/></a>
      <a href="https://wa.link/bpo20c"><FaWhatsapp className="cursor-pointer inline text-2xl text-white"/></a>
      </div>
      <div className="mt-5 md:mt-0">
       <h2 className="font-bold text-2xl text-purple-400">Useful Links</h2>
       <ul className="text-white">
         <li>User Login</li>
         <li>Upcoming Updates</li>
         <li>Buy Battle Pass</li>
         <li>Other Services</li>
         <li>Privacy Policy</li>
       </ul>
      </div>
      </div>
    <div className="mt-5 text-white text-center">
      <h2>Created By Samuel Tuoyo with ♥️</h2>
    </div>
    </footer>
    )
}

export default Footer