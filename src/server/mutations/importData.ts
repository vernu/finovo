import { extendType, nonNull, stringArg } from 'nexus'
import { importDataResolver } from '../resolvers/importData'

export const ImportData = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('importData', {
      type: 'String',
      args: {
        fileCategory: nonNull(stringArg()),
        // file: 'Upload',
      },
      resolve: importDataResolver,
    })
  },
})
