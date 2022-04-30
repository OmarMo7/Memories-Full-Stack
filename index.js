import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from '../server/routes/posts.js'
const app = express();


app.use(express.json(({ limit: "30mb", extended: true })))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes)

dotenv.config()
const PORT = process.env.PORT | 8000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => { app.listen(PORT, () => console.log("Successfully connected ON!", PORT)) })
  .catch((error) => console.log(`ERROR OCCURED as ! ${error}`))