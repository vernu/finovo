import { budgetListResolver } from '@server/resolvers/budget'
import { Budget, BudgetListArgs } from '@server/types/budget'
import {
  extendType,
  nonNull,
  ObjectDefinitionBlock,
  stringArg,
} from 'nexus/dist/core'

import { isLoggedIn } from '@server/shared/authorize'

export const BudgetQuery = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.list.field('budgets', {
      type: Budget,
      authorize: isLoggedIn,
      args: BudgetListArgs,
      resolve: budgetListResolver,
    })

    // t.field('budget', {
    //   type: 'Budget',
    //   authorize: isLoggedIn,
    //   args: {
    //     id: nonNull(stringArg()),
    //   },
    //   resolve: singleBudgetResolver,
    // })
  },
})

export const CompareBudgetWithActuals = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {},
})
