import bcrypt from "bcryptjs"

const SALT = 15

export const hashPassword = (plainPassword) => {
  const hashedPassword = bcrypt.hashSync(plainPassword, SALT)

  return hashedPassword
}

export const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}