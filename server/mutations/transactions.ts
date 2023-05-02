import { extendType } from 'nexus'
import {} from '../resolvers/auth'
import { createTransactionResolver } from '../resolvers/transaction'
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
