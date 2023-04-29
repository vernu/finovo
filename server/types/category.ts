import { ObjectDefinitionBlock, objectType } from 'nexus/dist/core'
import { Context } from '../shared/context'

export const Category = objectType({
  name: 'Category',
  definition(t: ObjectDefinitionBlock<'Category'>) {
    t.nonNull.string('id')
    t.nullable.string('name')
    t.nullable.string('slug')
    t.nullable.string('description')
    t.nullable.list.field('transactions', {
      type: 'Transaction',
      resolve: async (parent: any, _args: any, ctx: Context) => {
        const transactions = await ctx.prisma.transaction.findMany({
          where: {
            categoryId: parent.id,
          },
        })
        return transactions
      },
    })
    t.nullable.field('createdAt', {
      type: 'date',
      resolve: (parent: any) => parent.createdAt,
    })
  },
})
