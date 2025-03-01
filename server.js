import 'dotenv/config'
import express from 'express'
import { connectToMongoDb } from './config/dbConfig.js'
import cors from "cors"
import transactionRouter from './router/transactionRouter.js'
import userRouter from './router/userRouter.js'

const app = express()
const PORT = process.env.PORT || 8000

// Middlewares
app.use(express.json())
app.use(cors())

// Connect To Database
connectToMongoDb()

// Router | API Endpoints
app.use("/api/users", userRouter)
app.use("/api/transactions", transactionRouter)

// Start a server
app.listen(PORT, (error) => {
  error ? console.log("Error", error) : console.log("Server is Running")
})