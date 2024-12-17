import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './db/mongoose.js';
import {registerUser, loginUser} from "./controllers/Auth.js";
dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
connectDb();
app.post("/signUp", registerUser);
app.post("/signIn", loginUser);


app.listen(port, () => console.log('Server is running on http://localhost:' + port))
