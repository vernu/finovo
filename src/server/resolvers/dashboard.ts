import { Context } from '@server/shared/context'

export const dashboardStatsResolver = async (
  _parent: any,
  _args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  let result: any = {
    totals: [],
    // expenseByCategory: [],
    // incomeByCategory: [],
    currencies: [],
  }

  for (let currencyCode of ['ETB', 'USD', 'EUR', 'GBP', 'CRYPTO']) {
    const totalAggregation = await ctx.prisma.transaction.aggregate({
      where: {
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
    })

    const expenseAggregation = await ctx.prisma.transaction.aggregate({
      where: {
        amount: {
          lt: 0,
        },
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
    })

    const incomeAggregation = await ctx.prisma.transaction.aggregate({
      where: {
        amount: {
          gt: 0,
        },
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
    })

    result.totals.push({
      currencyCode,
      totalAmount: totalAggregation._sum.amount,
      totalCount: totalAggregation._count.amount,
      expenseAmount: expenseAggregation._sum.amount,
      expenseCount: expenseAggregation._count.amount,
      incomeAmount: incomeAggregation._sum.amount,
      incomeCount: incomeAggregation._count.amount,
    })
  }

  const categories = await ctx.prisma.category.findMany({})

  for (let currencyCode of ['ETB', 'USD', 'EUR', 'GBP', 'CRYPTO']) {
    let expenseByCategory = []
    let incomeByCategory = []

    for (let category of categories) {
      if (category.name?.toLowerCase() === 'exchange') continue
      const expenseAggregation = await ctx.prisma.transaction.aggregate({
        where: {
          amount: {
            lt: 0,
          },
          userId: ctx.user.id,
          currency: {
            code: currencyCode,
          },
          category: {
            id: category.id,
          },
        },
        _sum: {
          amount: true,
        },
        _count: {
          amount: true,
        },
      })

      const incomeAggregation = await ctx.prisma.transaction.aggregate({
        where: {
          amount: {
            gt: 0,
          },
          userId: ctx.user.id,
          currency: {
            code: currencyCode,
          },
          category: {
            id: category.id,
          },
        },
        _sum: {
          amount: true,
        },
        _count: {
          amount: true,
        },
      })

      if (expenseAggregation._count.amount > 0) {
        expenseByCategory.push({
          categoryId: category.id,
          categoryName: category.name,
          amount: expenseAggregation._sum.amount,
          count: expenseAggregation._count.amount,
        })
      }
      if (incomeAggregation._count.amount > 0) {
        incomeByCategory.push({
          categoryId: category.id,
          categoryName: category.name,
          amount: incomeAggregation._sum.amount,
          count: incomeAggregation._count.amount,
        })
      }
    }

    if (expenseByCategory.length > 0 || incomeByCategory.length > 0) {
      result.currencies.push({
        currencyCode,
        expenseByCategory,
        incomeByCategory,
      })
    }
  }

  result.totals = result.totals.filter(
    (i: { totalCount: number }) => i.totalCount > 0
  )

  console.log(result)

  return result
}
