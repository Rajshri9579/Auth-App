import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8080;

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.use(express.urlencoded({extended:true}))
//connect to db
db()

app.get("/", (req, res)=>{
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})