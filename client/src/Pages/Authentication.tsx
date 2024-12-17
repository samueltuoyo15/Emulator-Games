import { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

const Authentication = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [swalProps, setSwalProps] = useState<{ show: boolean; title: string; text: string; customClass: { popup: string } }>({
    show: false,
    title: '',
    text: '',
    customClass: { popup: '' }
  })
  const navigate = useNavigate()

  const handleClick = () => {
    setSwalProps({
      show: true,
      title: 'Hey Champ 👋',
      text: 'Seems like this user already exists!',
      customClass: { popup: 'bg-purple-700 text-white' }
    })
  }

  const handleClose = () => {
    setSwalProps(prev => ({ ...prev, show: false }))
  }

  const sendEmailToServer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password.length > 15) {
      setSwalProps({
        show: true,
        title: 'Error',
        text: 'Password should be no longer than 15 characters!',
        customClass: { popup: 'bg-red-500 text-white' }
      })
      return
    }
    try {
      const res = await fetch(import.meta.env.VITE_SIGNUP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (res.ok) {
        setSwalProps({
          show: true,
          title: 'Success',
          text: 'Account created successfully! Redirecting...',
          customClass: { popup: 'bg-green-500 text-white' }
        })
        setTimeout(() => {
          navigate('/')
        }, 2000)
      } else if (data.error.code === 'P2002') {
        handleClick()
      } else {
        setSwalProps({
          show: true,
          title: 'Error',
          text: data.error.message,
          customClass: { popup: 'bg-red-500 text-white' }
        })
      }
    } catch (error: any) {
      setSwalProps({
        show: true,
        title: 'Error',
        text: error.code,
        customClass: { popup: 'bg-red-500 text-white' }
      })
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <section className="font-sans select-none flex h-96 flex-col items-center bg-white text- p-4">
      <strong className="text-center text-2xl mt-20">Create an Account</strong>
      <form onSubmit={sendEmailToServer}>
        <input
         required 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="p-4 rounded border-2 border-purple-600 text-black block w-80 mt-4 outline-1 outline-purple-700"
        />
        <div className="relative">
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            maxLength={15}
            placeholder="Password"
            className="p-4 rounded border-2 border-purple-600 text-black block w-80 mt-3 outline-1 outline-purple-700"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <input
          type="submit"
          value="Continue"
          className="block w-80 p-4 rounded bg-purple-600 text-white mt-4 mb-2"
        />
      </form>
      <div>
        Already Have an Account? <Link to="/Login" className="text-purple-700">Login</Link>
      </div>
      <SweetAlert2 {...swalProps} onConfirm={handleClose} />
    </section>
  )
}

export default Authentication
