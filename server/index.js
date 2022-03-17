import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import {get} from 'lodash'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import querystring from 'querystring'
import path from "path";
import axios from "axios";


dotenv.config()

const server = express()
const port = process.env.PORT || 8000

server.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

server.use(cookieParser())
server.use(express.json())

const getUser = async ({code}) => {
    const githubToken = await axios
        .post(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`)
        .then(({data}) => data)
        .catch(e => console.log(e))

    const decoded = querystring.parse(githubToken)
    const accessToken = decoded.access_token


    return axios
        .get(`https://api.github.com/user`,
            {headers: {Authorization: `Bearer ${accessToken}`},})
        .then((res) => res.data)
        .catch((error) => {
            console.error(`Error getting user from GitHub`, error);
        })
}

server.get('/api/github', async (req, res) => {
    const {code} = req.query
    const {path} = req.query

    if (!code) {
        console.log("No code!");
    }

    const githubUser = await getUser({code})

    const token = jwt.sign(githubUser, process.env.SECRET_KEY, {expiresIn: '1d'})
    res.cookie(process.env.COOKIE_NAME, token, {
        httpOnly: true,
        domain: "localhost",
        maxAge: 1000 * 60 * 60 * 2
    })

    res.redirect(`http://localhost:3000${path}`)
})

server.get('/api/about-user', (req, res) => {
    const cookie = req.cookies[process.env.COOKIE_NAME];

    if (!cookie) return res.status(401).json({message: "Пользователь не авторизован!"})

    try {
        const decoded = jwt.verify(cookie, process.env.SECRET_KEY)

        return res.json({
            message: "Пользователь  авторизован!",
            data: decoded,
            token: cookie
        })
    } catch (e) {
        return res.status(401).json(e)
    }
})


if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'))
    server.get('*', (req, res) => {
        res.sendFile(path.resolve('client/build/index.html'))
    })
}

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})