import { PrismaClient } from '@prisma/client'
import prisma from '../../lib/prisma'
import { verifyToken } from '../utils/authUtils'

export type Context = {
  prisma: PrismaClient
  user: any
}

const getLoggedInUser = async (req: any) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    const userId = (await verifyToken(token))?.id

    if (!userId) {
      return null
    }

    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
  } catch (e) {
    console.log(e)
    return null
  }
}

export const createContext = async (req: any, res: any): Promise<Context> => {
  return {
    prisma,
    user: await getLoggedInUser(req),
  }
}
