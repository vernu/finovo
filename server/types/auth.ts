import { ObjectDefinitionBlock, objectType } from 'nexus/dist/core'
import { nonNull, stringArg } from 'nexus'

export const CreateAccountResponsePayload = objectType({
  name: 'CreateAccountResponsePayload',
  definition(t: ObjectDefinitionBlock<'CreateAccountResponsePayload'>) {
    t.nullable.field('user', {
      type: 'User',
    })
    t.nullable.string('token')
  },
})

export const LoginResponsePayload = objectType({
  name: 'LoginResponsePayload',
  definition(t: ObjectDefinitionBlock<'LoginResponsePayload'>) {
    t.nullable.field('user', {
      type: 'User',
    })
    t.nullable.string('token')
  },
})

export const CreateAccountArgs = {
  name: nonNull(stringArg()),
  email: nonNull(stringArg()),
  password: nonNull(stringArg()),
}

export const LoginArgs = {
  email: nonNull(stringArg()),
  password: nonNull(stringArg()),
}

export const LoginWithGoogleArgs = {
  idToken: nonNull(stringArg()),
}
