import { extendType, nonNull, stringArg } from 'nexus'
import {
  createTransactionResolver,
  deleteTransactionResolver,
} from '../resolvers/transaction'
import { CreateTransactionArgs } from '../types'

export const AddTransaction = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addTransaction', {
      type: 'Transaction',
      args: CreateTransactionArgs,
      resolve: createTransactionResolver,
    })
  },
})

export const DeleteTransaction = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteTransaction', {
      type: 'Transaction',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteTransactionResolver,
    })
  },
})