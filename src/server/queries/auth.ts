import { extendType, ObjectDefinitionBlock } from 'nexus/dist/core'

import { isLoggedIn } from '@server/shared/authorize'
import { User } from '@server/types'
import { getCurrentUserResolver } from '@server/resolvers/auth'

export const CurrentUserQuery = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.field('currentUser', {
      type: User,
      authorize: isLoggedIn,
      args: {},
      resolve: getCurrentUserResolver,
    })
  },
})
