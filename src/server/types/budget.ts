import {
  floatArg,
  intArg,
  nullable,
  ObjectDefinitionBlock,
  objectType,
  stringArg,
} from 'nexus/dist/core'

export const Budget = objectType({
  name: 'Budget',
  definition(t: ObjectDefinitionBlock<'Budget'>) {
    t.nonNull.string('id')
    t.nonNull.int('year')
    t.nullable.string('budgetBasis')
    t.nullable.float('monthlyBudget')
    t.nullable.float('yearlyBudget')

    t.nullable.field('category', {
      type: 'Category',
    })
    t.nullable.field('currency', {
      type: 'Currency',
    })
    t.nullable.field('user', {
      type: 'User',
    })

    t.nullable.date('createdAt')
    t.nullable.date('updatedAt')
  },
})

export const BudgetListArgs = {
  year: nullable(intArg()),
}

export const CreateBudgetArgs = {
  year: intArg(),
  categoryId: stringArg(),
  budgetBasis: nullable(stringArg()),
  currencyCode: stringArg(),
  monthlyBudget: nullable(floatArg()),
  yearlyBudget: nullable(floatArg()),
}

export const UpdateBudgetArgs = {
  id: stringArg(),
  ...CreateBudgetArgs,
}
