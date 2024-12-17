import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'
import {SignUpUser, SignInWithMagicLink} from './controllers/Auth.js'
dotenv.config()
const app = express()
const port = process.env.PORT

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

app.use(cors())
app.use(express.json())

app.post('/SignUp', async (req, res) => {
    const { email, password } = req.body
    const response = await SignUpUser(email, password) 
    if (response.error) {
        return res.status(400).send(response.error.message) 
    }
    const { user } = response 
    res.status(200).send('User signed up successfully') 
})

app.post('/signIn', async (req, res) => {
  const { email} = req.body
  const { user, error } = await SignInWithMagicLink(email)
  if (error) return res.status(400).send(error.message)
  res.status(200).send('User signed in successfully')
});

app.listen(port, () => console.log('Server is running on http://localhost:' + port))
