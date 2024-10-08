import {toast} from 'react-toastify'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
  const [Name, setName] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [Phone, setPhone] = useState<string>('')
  const [Message, setMessage] = useState<string>('')
  const [Country, setCountry] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Form Submission Successfully')
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setCountry('')
  }

  return (
  <> <section id="Contact" className="select-none bg-blue-900 p-5">
      <h2 className="text-white font-extrabold text-3xl text-center">
        <span className="text-purple-400">GET</span> IN TOUCH
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cursor-text border-2 border-purple-400 p-2 rounded bg-transparent"
          placeholder="Your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="cursor-text border-2 border-purple-400 p-2 rounded bg-transparent"
          placeholder="Your Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          className="cursor-text border-2 border-purple-400 p-2 rounded bg-transparent"
          placeholder="Your Phone"
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          className="cursor-text border-2 border-purple-400 p-2 rounded bg-transparent"
          placeholder="Your Country"
          value={Country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <textarea
          className="md:col-span-2 cursor-text border-2 border-purple-400 h-52 p-2 rounded bg-transparent"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="cursor-pointer p-2 rounded text-center inline-block w-32 border-2 border-purple-400"
          >
            Submit <FaPaperPlane className="inline" />
          </button>
        </div>
      </form>
    </section>
     <ToastContainer />
     </>
  )
}

export default Contact
