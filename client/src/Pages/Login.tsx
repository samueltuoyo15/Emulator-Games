import { useState } from 'react'
import { Link } from 'react-router-dom'

interface SignInProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}



const Login = ({setIsAuthenticated}: SignInProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
   const [errorMessage, setErrorMessage] = useState<string>('')
  const sendEmailToServer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(import.meta.env.VITE_SIGNIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
       
      const data = await res.json()
        if (!res.ok) {  
        throw new Error(data.message)
        setErrorMessage(data.message)
      }
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', data.token)
        window.location.href = "/"
        setEmail('')
    } catch (error: any){
      console.error(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <section className="font-sans select-none flex h-96 flex-col items-center bg-white text- p-4">
      <strong className="text-center text-4xl mt-20">Login</strong>
      <form onSubmit={sendEmailToServer}>
        <input
         required 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="p-4 rounded border-2 border-purple-600 text-black block w-80 mt-4 outline-1 outline-purple-700"
        />
          <input
         required 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="p-4 rounded border-2 border-purple-600 text-black block w-80 mt-4 outline-1 outline-purple-700"
        />
        <input
          required
          type="submit"
          value="Continue"
          className="block w-80 p-4 rounded bg-purple-600 text-white mt-4 mb-2"
        />
      </form>
        <div>
        Dont have an Account Yet? <Link to="/auth" className="text-purple-700">Sign Up</Link>
      </div>
      {errorMessage && <div className="text-red-600 mt-2">{errorMessage}</div>}
    </section>
  )
}

export default Login
