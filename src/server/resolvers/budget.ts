import { Context } from '@server/shared/context'

export const budgetListResolver = async (
  _parent: any,
  args: { year?: number | null },
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const filters: any = {}
  if (args.year) filters.year = args.year

  const budgets = await ctx.prisma.budget.findMany({
    where: { ...filters, userId: ctx.user.id },
    include: {
      category: true,
      currency: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  return budgets
}

export const createBudgetResolver = async (
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

  let monthlyBudget = 0
  let yearlyBudget = 0

  if (args.budgetBasis === 'MONTHLY') {
    monthlyBudget = args.monthlyBudget
    yearlyBudget = args.monthlyBudget * 12
  } else if (args.budgetBasis === 'YEARLY') {
    yearlyBudget = args.yearlyBudget
    monthlyBudget = args.yearlyBudget / 12
  }

  const budget = await ctx.prisma.budget.create({
    data: {
      budgetBasis: args.budgetBasis,
      year: args.year,
      monthlyBudget,
      yearlyBudget,

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

  return budget
}

export const updateBudgetResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const budget = await ctx.prisma.budget.findFirst({
    where: {
      id: args.id,
      userId: ctx.user.id,
    },
  })
  if (!budget) {
    throw new Error('Budget not found')
  }

  const category = await ctx.prisma.category.findFirst({
    where: {
      id: args.categoryId,
      userId: ctx.user.id,
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

  let monthlyBudget = 0
  let yearlyBudget = 0

  if (args.budgetBasis === 'MONTHLY') {
    monthlyBudget = args.monthlyBudget
    yearlyBudget = args.monthlyBudget * 12
  } else if (args.budgetBasis === 'YEARLY') {
    yearlyBudget = args.yearlyBudget
    monthlyBudget = args.yearlyBudget / 12
  }

  const updatedBudget = await ctx.prisma.budget.update({
    where: {
      id: args.id,
    },
    data: {
      budgetBasis: args.budgetBasis,
      year: args.year,
      monthlyBudget,
      yearlyBudget,

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
  return updatedBudget
}

export const deleteBudgetResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const budget = await ctx.prisma.budget.findFirst({
    where: {
      id: args.id,
      userId: ctx.user.id,
    },
  })

  if (!budget) {
    throw new Error('Budget not found')
  }

  await ctx.prisma.budget.delete({
    where: {
      id: args.id,
    },
  })

  return budget
}

export const compareBudgetVsActuals = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (!ctx.user) {
    throw new Error('Not Authenticated')
  }
  // TODO: implement this
}
