import { Context } from '../shared/context'
import { sortCategories } from '../utils/sortingUtils'

export const categoryListResolver = async (
  _root: any,
  _args: any,
  ctx: Context
) => {
  let categories = await ctx.prisma.category.findMany({})

  const sortedCategories = sortCategories(categories)
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

export const createCategoryResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  if (ctx.user === null) {
    throw new Error('Not Authenticated')
  }

  const existingCategory = await ctx.prisma.category.findFirst({
    where: {
      name: args.name,
      userId: ctx.user.id,
    },
  })
  if (existingCategory) {
    throw new Error('Category already exists')
  }

  const category = await ctx.prisma.category.create({
    data: {
      emoji: args.emoji || null,
      name: args.name,
      description: args.description,
      active: args.active ?? true,
      type: args.type || null,
      user: {
        connect: {
          id: ctx.user.id,
        },
      },
    },
  })

  return category
}

export const updateCategoryResolver = async (
  _root: any,
  args: any,
  ctx: Context
) => {
  const { prisma } = ctx

  const { id, name, type, description, emoji, active, ...rest } = args

  const category = await prisma.category.findFirst({
    where: {
      id,
    },
  })

  if (
    ctx.user === null ||
    category === null ||
    category.userId !== ctx.user.id
  ) {
    throw new Error('Not Authenticated')
  }

  const existingCategory = await ctx.prisma.category.findFirst({
    where: {
      name: args.name,
      userId: ctx.user.id,
    },
  })
  if (existingCategory && existingCategory.id !== id) {
    throw new Error('Category already exists')
  }

  const updatedCategory = await prisma.category.update({
    where: {
      id,
    },
    data: {
      emoji,
      name,
      type: type || null,
      description,
      active,
    },
  })
  return updatedCategory
}
