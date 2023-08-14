import {
  extendType,
  nonNull,
  ObjectDefinitionBlock,
  stringArg,
} from 'nexus/dist/core'
import {
  singleTransactionResolver,
  transactionListInsightResolver,
  transactionListResolver,
} from '../resolvers/transaction'
import {
  Transaction,
  TransactionListArgs,
  TransactionListInsight,
} from '../types'
import { isLoggedIn } from '../shared/authorize'

export const TransactionQuery = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.list.field('transactions', {
      type: Transaction,
      authorize: isLoggedIn,
      args: TransactionListArgs,
      resolve: transactionListResolver,
    })

    t.field('transaction', {
      type: Transaction,
      authorize: isLoggedIn,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: singleTransactionResolver,
    })

    t.field('transactionListInsight', {
      args: TransactionListArgs,
      type: TransactionListInsight,
      authorize: isLoggedIn,
      resolve: transactionListInsightResolver,
    })
  },
})
