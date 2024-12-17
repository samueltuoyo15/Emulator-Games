import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

const SignUpUser = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
    
    if (error) {
        console.log('SignUp error:', error)
    } else {
        console.log('User Signed Up Successfully:', user)
    }

    return { user, error }
}

const SignInWithMagicLink = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
      redirectTo: 'http://localhost:4000/dashboard'
        }
    })

    if (error) {
        console.log('Error sending magic link:', error.message)
    } else {
        console.log('Magic link sent successfully to:', data)
    }

    return { data, error }
}
export {SignUpUser, SignInWithMagicLink}
