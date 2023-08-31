import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

export const generateToken = (userId: string) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '90d',
    }
  )
}

export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET as string)
}

export const hashPassword = async (plainPassword: string): Promise<string> => {
  return await bcrypt.hash(plainPassword, 10)
}

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}
