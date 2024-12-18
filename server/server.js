import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './db/mongoose.js';
import { registerUser, loginUser } from "./controllers/Auth.js";

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
connectDb()

app.post("/signUp", registerUser)
app.post("/signIn", loginUser)

const games = [
    {id: 1, album: "https://images.emulatorgames.net/playstation-portable/god-of-war-ghost-of-sparta.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/God%20of%20War%20-%20Ghost%20of%20Sparta%20(Asia)%20(En,Zh).zip"},
    {id: 2, album: "https://images.emulatorgames.net/playstation-portable/grand-theft-auto-vice-city-stories.webp", uri: "https://static.emulatorgames.net/roms/playstation-portable/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20(USA)%20(v1.03).zip"},
    {id: 3, album: "https://images.emulatorgames.net/playstation-portable/spider-man-3.webp", uri: "https://serve.emulatorgames.net/serve4/roms/playstation-portable/Spider-Man%203%20(USA)%20(v1.02).zip"},
    {id: 4, album: "https://images.emulatorgames.net/playstation-portable/assassins-creed-bloodlines.webp", uri: "https://server.emulatorgames.net/server2/roms/playstation-portable/Assassins%20Creed%20-%20Bloodlines%20(USA)%20(En,Fr,De,Es,It).zip"},
    {id: 6, album: "https://images.emulatorgames.net/playstation-portable/avatar-the-last-airbender.webp", uri: "https://server.emulatorgames.net/server3/roms/playstation-portable/Avatar%20-%20The%20Last%20Airbender%20(USA).zip"},
]


app.get('/games', (req, res) => {
    res.status(200).json(games)
})


app.get('/games/:id', (req, res) => {
    const gameId = parseInt(req.params.id)
    const game = games.find(g => g.id === gameId)

    if (game) {
        res.status(200).json(game)
    } else {
        res.status(404).json({ message: "Game not found" })
    }
})

app.listen(port, () => console.log('Server is running on http://localhost:' + port))
