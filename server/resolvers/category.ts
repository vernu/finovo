import { Context } from '../shared/context'

export const categoryListResolver = async (
  _root: any,
  _args: any,
  ctx: Context
) => {
  const categories = await ctx.prisma.category.findMany({})
  return categories
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
