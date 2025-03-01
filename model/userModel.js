import userModel from "../schema/userSchema.js";

// Create User
export const createUser = (userObject) => {
  return userModel(userObject).save()
}

// Find user by Email
export const findUserByEmail = (email) => {
  return userModel.findOne({ email })
}