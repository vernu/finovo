import { Context } from '../shared/context'
import { sortCategories } from '../utils/sortingUtils'

export const categoryListResolver = async (
  _root: any,
  _args: any,
  ctx: Context
) => {
  let categories = await ctx.prisma.category.findMany({})

  const sortedCategories = sortCategories(categories)
  console.log(sortedCategories)
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
