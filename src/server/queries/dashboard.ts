import { extendType, ObjectDefinitionBlock } from 'nexus/dist/core'
import { DashboardStat } from '@server/types'
import { isLoggedIn } from '@server/shared/authorize'
import { dashboardStatsResolver } from '@server/resolvers/dashboard'

export const DashboardQuery = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.field('dashboardStat', {
      type: DashboardStat,
      authorize: isLoggedIn,
      resolve: dashboardStatsResolver,
    })
  },
})
