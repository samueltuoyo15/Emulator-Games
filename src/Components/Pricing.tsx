import { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2'
import { FiCheck } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'

const Pricing = ({ Menu }: { Menu: any }) => {
  const [swalProps, setSwalProps] = useState<{ show: boolean; closeOnClickOutside?: boolean; title: string; text: string; customClass: { popup: string } }>({
    show: false,
    closeOnClickOutside: false,
    title: '',
    text: '',
    customClass: { popup: '' }
  })

  const handleClick = () => {
    setSwalProps({
      show: true,
      closeOnClickOutside: true,
      customClass: {
        popup: 'bg-purple-700 text-white'
      },
      title: 'Trying to Pay?',
      text: 'Hey Champ! Glad you saw this. Payments will be part of our upcoming Events, so stay tuned.'
    })
  }

  const handleClose = () => {
    setSwalProps(prev => ({ ...prev, show: false }))
  }

  return (
     <section id="Pricing" className="select-none bg-blue-900 p-5">
         <SweetAlert2 {...swalProps} onConfirm={handleClose} />
      <h2 className="text-2xl text-center font-bold text-white">
        OUR <span className="text-purple-400">PRICING</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <article className="text-justify px-3 mt-7 w-full md:w-72 py-5 bg-transparent border-4 border-indigo-400">
          <h2 className="text-white text-2xl font-bold text-left border-b-2">Silver</h2>
          <h3 className="mt-5 font-extrabold text-2xl text-purple-600 text-center">$.9.99</h3>
          <button className="cursor-pointer mt-3 bg-purple-600 w-full rounded text-white p-3">For 3 Months</button>
          <ul className="text-left text-white">
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />20 Days Free Trial</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Cancel Anytime</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Daily Coins Diamond</li>
            <li className="mt-3"><FaTimes className="inline text-red-600 w-20" />Premium Games Access</li>
            <li className="mt-3"><FaTimes className="inline text-red-600 w-20" />Unlimited Access</li>
          </ul>
          <button onClick={handleClick} className={`${Menu ? 'hidden' : 'bg-transparent'} relative cursor-pointer hover:bg-purple-600 hover:border-0 justify-self-start mt-3 border-2 border-purple-600 w-48 rounded text-white p-3 text-center`}>
            Checkout<span className="absolute top-0 right-0 bg-red-600 rounded">Coming Soon</span>
          </button>
        </article>
        <article className="text-justify mt-7 w-full md:w-72 py-5 px-3 bg-transparent border-4 border-indigo-400">
          <h2 className="text-white text-2xl font-bold text-left border-b-2">Gold</h2>
          <h3 className="mt-5 font-extrabold text-2xl text-purple-600 text-center">$12.99</h3>
          <button className="cursor-pointer mt-3 bg-purple-600 w-full rounded text-white p-3">For 6 Months</button>
          <ul className="text-left text-white">
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />20 Days Free Trial</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Cancel Anytime</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Daily Coins Diamond</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Premium Games Access</li>
            <li className="mt-3"><FaTimes className="inline text-red-600 w-20" />Unlimited Access</li>
          </ul>
          <button onClick={handleClick} className={`${Menu ? 'hidden' : 'bg-transparent'} relative cursor-pointer hover:bg-purple-600 hover:border-0 justify-self-start mt-3 border-2 border-purple-600 w-48 rounded text-white p-3 text-center`}>
            Checkout<span className="absolute top-0 right-0 bg-red-600 rounded">Coming Soon</span>
          </button>
        </article>
        <article className="text-justify text-center px-3 mt-7 w-full md:w-72 py-5 bg-transparent border-4 border-indigo-400">
          <h2 className="text-white text-2xl font-bold text-left border-b-2">Diamond</h2>
          <h3 className="text-center mt-5 font-extrabold text-2xl text-purple-600 text-center">$16.99</h3>
          <button className="cursor-pointer mt-3 bg-purple-600 w-full rounded text-white p-3">For 12 Months</button>
          <ul className="text-white">
            <li className="mt-3 inline-flex"><FiCheck className="inline text-green-600 w-20" />20 Days Free Trial</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Cancel Anytime</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Daily Coins Diamond</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Premium Games Access</li>
            <li className="mt-3"><FiCheck className="inline text-green-600 w-20" />Unlimited Access</li>
          </ul>
          <button onClick={handleClick} className={`${Menu ? 'hidden' : 'bg-transparent'} relative cursor-pointer hover:bg-purple-600 hover:border-0 justify-self-start mt-3 border-2 border-purple-600 w-48 rounded text-white p-3 text-center`}>
            Checkout<span className="absolute top-0 right-0 bg-red-600 rounded">Coming Soon</span>
          </button>
      </article>
      </div>
    </section>
  )
}

export default Pricing
