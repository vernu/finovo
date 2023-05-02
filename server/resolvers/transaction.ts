import { Context } from '../shared/context'
import { extractWhereClauseForTransaction } from '../utils/dbQueryUtils'

export const transactionListResolver = async (
  _parent: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const filters = extractWhereClauseForTransaction(args)

  const transactions = await ctx.prisma.transaction.findMany({
    where: { ...filters, userId: ctx.user.id },
    include: {
      category: true,
      currency: true,
    },
    orderBy: {
      date: 'desc',
    },
  })
  return transactions
}

export const transactionListInsightResolver = async (
  _parent: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }
  const filters = extractWhereClauseForTransaction(args)
  let aggregation = await ctx.prisma.transaction.aggregate({
    where: {
      ...filters,
      userId: ctx.user.id,
    },
    _sum: {
      amount: true,
    },
    _count: {
      amount: true,
    },
    _max: {
      amount: true,
    },
    _min: {
      amount: true,
    },
    _avg: {
      amount: true,
    },
  })

  return {
    totalAmount: aggregation._sum.amount,
    totalTransactions: aggregation._count.amount,
    maxAmount: aggregation._max.amount,
    minAmount: aggregation._min.amount,
    avgAmount: aggregation._avg.amount,
  }
}

export const singleTransactionResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }
  const transaction = await ctx.prisma.transaction.findFirst({
    where: { id: args.id, userId: ctx.user.id },
    include: {
      category: true,
    },
  })
  if (!transaction) {
    throw new Error('Transaction not found')
  }
  return transaction
}

export const createTransactionResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const category = await ctx.prisma.category.findFirst({
    where: {
      id: args.categoryId,
    },
  })

  if (!category) {
    throw new Error('Category not found')
  }

  const currency = await ctx.prisma.currency.findFirst({
    where: {
      code: args.currencyCode,
    },
  })

  if (!currency) {
    throw new Error('Currency not found')
  }

  const transaction = await ctx.prisma.transaction.create({
    data: {
      amount: args.amount,
      description: args.description,
      date: new Date(args.date),
      category: {
        connect: {
          id: args.categoryId,
        },
      },
      currency: {
        connect: {
          code: args.currencyCode,
        },
      },
      user: {
        connect: {
          id: ctx.user.id,
        },
      },
    },
  })

  return transaction
}
