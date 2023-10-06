import { ObjectDefinitionBlock, objectType } from 'nexus/dist/core'

export const CurrencyTotalStat = objectType({
  name: 'CurrencyTotalStat',
  definition(t: ObjectDefinitionBlock<'CurrencyTotalStat'>) {
    t.nonNull.string('currencyCode')
    t.nullable.float('totalAmount')
    t.nonNull.int('totalCount')
    t.nullable.float('incomeAmount')
    t.nonNull.int('incomeCount')
    t.nullable.float('expenseAmount')
    t.nonNull.int('expenseCount')
  },
})

export const CategoryStat = objectType({
  name: 'CategoryStat',
  definition(t: ObjectDefinitionBlock<'CategoryStat'>) {
    t.nonNull.string('categoryName')
    t.nullable.float('amount')
    t.nonNull.int('count')
  },
})

export const CurrencyStat = objectType({
  name: 'CurrencyStat',
  definition(t: ObjectDefinitionBlock<'CurrencyStat'>) {
    t.nonNull.string('currencyCode')
    t.nonNull.list.field('expenseByCategory', {
      type: CategoryStat,
    })
    t.nonNull.list.field('incomeByCategory', {
      type: CategoryStat,
    })
  },
})

export const DashboardStat = objectType({
  name: 'DashboardStat',
  definition(t: ObjectDefinitionBlock<'DashboardStat'>) {
    t.nonNull.list.field('totals', {
      type: CurrencyTotalStat,
    })
    // t.nonNull.list.field('topExpenses', {
    //   type: TopExpenses,
    // })
    // t.nonNull.list.field('topIncome', {
    //   type: TopExpenses,
    // })
    t.nonNull.list.field('currencies', {
      type: CurrencyStat,
    })
  },
})
