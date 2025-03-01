import express from "express"
import { comparePassword, hashPassword } from "../utility/bcryptHelper.js"
import { createUser, findUserByEmail } from "../model/userModel.js"
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper.js"

const userRouter = express.Router()

// Create User | Signup | POST
userRouter.post("/signup", async(req, res)=>{
  try {
    // Signup process
    const { name, email, password } = req.body

    // Encrypt the password -> hashing the password
    const hashedPassword = hashPassword(password)

    // Create a user in DB
    const user = await createUser({
      name: name,
      email: email,
      password: hashedPassword
    })

    user?._id
      ? buildSuccessResponse(res, user, "User created successfully")
      : buildErrorResponse(res, "Could not create user")
  } catch (error) {
    // handle unique email error from db
    if(error.code === 11000){
      error.message = "User with this email address already exists!"
    }
    // this is not a good practice
    buildErrorResponse(res, error.message)
  }
})

// POST | User Login
userRouter.post("/login", async(req, res)=>{
  try {
    // get email and password from req.body
    const { email, password } = req.body

    // Step 1: Find user in Db
    const user = await findUserByEmail(email)

    // Step 2: If user not found in Db, return back
    if(!user?._id){
      return buildErrorResponse(res, "Invalid Credentials")
    }

    // Step 3: If user found in Db
    const isPasswordMatched = comparePassword(password, user.password)
    
    // Make user password null so that it's not sent back to client
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email
    }

    isPasswordMatched
      ? buildSuccessResponse(res, userData, "Logged In Successfully")
      : buildErrorResponse(res, "Invalid Credentials")
  } catch (error) {
    buildErrorResponse(res, "Invalid Credentials")
  }
})

export default userRouter