import {
  createBudgetResolver,
  deleteBudgetResolver,
  updateBudgetResolver,
} from './../resolvers/budget'
import { CreateBudgetArgs, UpdateBudgetArgs } from './../types/budget'
import { extendType, stringArg } from 'nexus'

export const AddBudget = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addBudget', {
      type: 'Budget',
      args: CreateBudgetArgs,
      resolve: createBudgetResolver,
    })
  },
})

export const UpdateBudget = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateBudget', {
      type: 'Budget',
      args: UpdateBudgetArgs,
      resolve: updateBudgetResolver,
    })
  },
})

export const DeleteBudget = extendType({
  type: 'Mutation',

  definition(t) {
    t.nonNull.field('deleteBudget', {
      type: 'Budget',
      args: {
        id: stringArg(),
      },
      resolve: deleteBudgetResolver,
    })
  },
})