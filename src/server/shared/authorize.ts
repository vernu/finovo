import { Context } from './context'

export const isLoggedIn = (_root: any, _args: any, ctx: Context) => !!ctx.user

export const isGuest = (_root: any, _args: any, ctx: Context) => !ctx.user

export const isAdmin = (_root: any, _args: any, ctx: Context) =>
  !!ctx.user && ctx.user.role === 'ADMIN'
