import { Context } from '../shared/context'

export const categoryListResolver = async (
  _root: any,
  _args: any,
  ctx: Context
) => {
  let categories = await ctx.prisma.category.findMany({})

  const sortOrder: any = {
    INCOME: 1,
    EXCHANGE: 2,
    EXPENSE: 3,
  }

  const sortedCategories = categories.sort((a, b) => {
    const aOrder = a.type != null ? sortOrder[a.type] : 4
    const bOrder = b.type != null ? sortOrder[b.type] : 4
    return aOrder - bOrder
  })

  return sortedCategories
}

export const singleCategoryResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  const category = await ctx.prisma.category.findUnique({
    where: { id: args.id },
  })
  return category
}
