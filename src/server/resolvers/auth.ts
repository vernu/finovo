import { Context } from '../shared/context'
import {
  comparePassword,
  generateToken,
  hashPassword,
} from '../utils/authUtils'
import axios from 'axios'

export const createAccountResolver = async (
  _root: any,
  args: { password: string; name: string; email: string },
  ctx: Context
) => {
  const hashedPassword = await hashPassword(args.password)
  const user = await ctx.prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
      password: hashedPassword,
    },
  })
  return {
    user,
    token: generateToken(user.id),
  }
}

export const loginUserResolver = async (
  _root: any,
  args: { email: string; password: string },
  ctx: Context
) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: args.email,
    },
  })

  const validCredentials =
    user && (await comparePassword(args.password, user.password ?? ''))

  if (!validCredentials) {
    throw new Error('Invalid credentials')
  }

  return {
    user,
    token: generateToken(user.id),
  }
}

export const loginWithGoogleResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  const response = await axios.get(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${args.idToken}`
  )

  const { sub: googleId, name, email, picture } = response.data

  let user = await ctx.prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        // googleId,
        // avatar: picture,
      },
    })
  } else {
    // TODO: update user avatar and googleId
  }

  return {
    user,
    token: generateToken(user.id),
  }
}
