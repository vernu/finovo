import { ObjectDefinitionBlock, objectType } from 'nexus/dist/core'

export const User = objectType({
  name: 'User',
  definition(t: ObjectDefinitionBlock<'User'>) {
    t.nonNull.string('id')
    t.nullable.string('email')
    t.nullable.string('name')
  },
})
