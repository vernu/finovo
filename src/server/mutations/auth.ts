import { extendType } from 'nexus'
import {
  createAccountResolver,
  loginUserResolver,
  loginWithGoogleResolver,
} from '@server/resolvers/auth'
import {
  CreateAccountArgs,
  CreateAccountResponsePayload,
  LoginArgs,
  LoginResponsePayload,
  LoginWithGoogleArgs,
} from '@server/types'

export const CreateAccount = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createAccount', {
      type: CreateAccountResponsePayload,
      args: CreateAccountArgs,
      resolve: createAccountResolver,
    })
  },
})

export const Login = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('login', {
      type: LoginResponsePayload,
      args: LoginArgs,
      resolve: loginUserResolver,
    })
  },
})

export const LoginWithGoogle = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('loginWithGoogle', {
      type: LoginResponsePayload,
      args: LoginWithGoogleArgs,
      resolve: loginWithGoogleResolver,
    })
  },
})
