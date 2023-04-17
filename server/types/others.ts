import { scalarType } from 'nexus'

export const DateScalar = scalarType({
  name: 'date',
  asNexusMethod: 'date',
  description: 'Date custom scalar type',
  parseValue(value: any) {
    return new Date(value)
  },
  serialize(value: any) {
    // return value.getTime()
    return new Date(value)
  },
  parseLiteral(ast: any) {
    // if (ast.kind === Kind.INT) {
    return new Date(ast.value)
    // }
    return null
  },
})
