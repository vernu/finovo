import { Context } from '@server/shared/context'
import { extractWhereClauseForTransaction } from '@server/utils/dbQueryUtils'

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

  const currencyCodes = args.currencyCodes


  let result: any = {
    totalTransactions: 0,
    currencies: [],
  }

  for (let currencyCode of currencyCodes) {
    const aggregation = await ctx.prisma.transaction.aggregate({
      where: {
        ...filters,
        userId: ctx.user.id,
        currency: {
          code: currencyCode,
        },
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
    result.currencies.push({
      currencyCode,
      totalAmount: aggregation._sum.amount,
      totalTransactions: aggregation._count.amount,
      maxAmount: aggregation._max.amount,
      minAmount: aggregation._min.amount,
      avgAmount: aggregation._avg.amount,
    })
    result.totalTransactions += aggregation._count.amount
  }

  return result
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

export const deleteTransactionResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const transaction = await ctx.prisma.transaction.findFirst({
    where: {
      id: args.id,
      userId: ctx.user.id,
    },
  })

  if (!transaction) {
    throw new Error('Transaction not found')
  }

  await ctx.prisma.transaction.delete({
    where: {
      id: args.id,
    },
  })

  return transaction
}

export const updateTransactionResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  const { prisma } = ctx

  const { id, categoryId, currencyCode, ...rest } = args

  const transaction = await prisma.transaction.findFirst({
    where: {
      id,
    },
  })

  if (
    ctx.user === null ||
    transaction === null ||
    transaction.userId !== ctx.user.id
  ) {
    throw new Error('Not Authenticated')
  }

  const updatedTransaction = await prisma.transaction.update({
    where: {
      id,
    },
    data: {
      ...rest,
      date: new Date(args.date),
      category: {
        connect: {
          id: categoryId,
        },
      },
      currency: {
        connect: {
          code: currencyCode,
        },
      },
    },
  })
  return updatedTransaction
}
