import {
  list,
  nullable,
  ObjectDefinitionBlock,
  objectType,
  stringArg,
} from 'nexus/dist/core'

export const Currency = objectType({
  name: 'Currency',
  definition(t: ObjectDefinitionBlock<'Currency'>) {
    t.nonNull.string('id')
    t.nonNull.string('code')
    t.nullable.string('name')
    t.nullable.string('symbol')
  },
})

export const Transaction = objectType({
  name: 'Transaction',
  definition(t: ObjectDefinitionBlock<'Transaction'>) {
    t.nonNull.string('id')
    t.nonNull.float('amount')
    t.nullable.string('description')
    t.nullable.field('category', {
      type: 'Category',
    })
    t.nullable.field('currency', {
      type: 'Currency',
    })

    t.nullable.field('date', {
      type: 'date',
    })
    t.nullable.field('createdAt', {
      type: 'date',
    })

    t.nullable.string('type', {
      resolve: (parent: any) =>
        parent.amount === 0
          ? 'TRANSFER'
          : parent.amount > 0
          ? 'INCOME'
          : 'EXPENSE',
    })
  },
})

export const TransactionListInsight = objectType({
  name: 'TransactionListInsight',
  definition(t: ObjectDefinitionBlock<'TransactionListInsight'>) {
    t.nullable.float('totalAmount')
    t.nonNull.int('totalTransactions')
    t.nullable.float('maxAmount')
    t.nullable.float('minAmount')
    t.nullable.float('avgAmount')
  },
})

export const TransactionListArgs = {
  period: nullable(stringArg()),
  categoryIds: nullable(list(stringArg())),
  currencyCodes: nullable(list(stringArg())),
  descriptionContains: nullable(stringArg()),
}
