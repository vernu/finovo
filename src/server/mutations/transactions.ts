import { extendType, nonNull, stringArg } from 'nexus'
import {
  createTransactionResolver,
  deleteTransactionResolver,
  updateTransactionResolver,
} from '@server/resolvers/transaction'
import {
  CreateTransactionArgs,
  Transaction,
  UpdateTransactionArgs,
} from '@server/types'

export const AddTransaction = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addTransaction', {
      type: Transaction,
      args: CreateTransactionArgs,
      resolve: createTransactionResolver,
    })
  },
})

export const DeleteTransaction = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteTransaction', {
      type: Transaction,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteTransactionResolver,
    })
  },
})

export const UpdateTransaction = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateTransaction', {
      type: Transaction,
      args: UpdateTransactionArgs,
      resolve: updateTransactionResolver,
    })
  },
})
