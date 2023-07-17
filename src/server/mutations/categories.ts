import { isLoggedIn } from './../shared/authorize'
import { CreateCategoryArgs } from './../types/category'
import { createCategoryResolver } from './../resolvers/category'
import { extendType } from 'nexus'

export const AddCategory = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addCategory', {
      type: 'Category',
      args: CreateCategoryArgs,
      authorize: isLoggedIn,
      resolve: createCategoryResolver,
    })
  },
})
